import { Component, OnInit , Input } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DropdownModel } from './../../dropdown/dropdown.model';
import { DocumentoService } from './../documento.service'
import { Auditoria } from './../auditoria';
import { AuditoriaModel,AuditoriaItem } from '../auditoria.model';

@Component({
  selector: 'app-documento-form-edit',
  templateUrl: './documento-form-edit.component.html',
  styleUrls: ['./documento-form-edit.component.css'],
  providers: [DocumentoService]
})
export class DocumentoFormEditComponent implements OnInit {

  public fromDocumentos : FormGroup;

  private id: number;
  private NomeLoja: string;
  private NomeColaborador: string;
  private listIdDocumentos: string;
  private obs : string;
  private listDoc : Array<number>;
  private mensagem: string;
  private auditoria : AuditoriaModel;

  constructor(private formBuilder: FormBuilder, 
    private service: DocumentoService,
    private route: ActivatedRoute,
    private router: Router) { }
    public docsUtilizados : Array<DropdownModel>;

  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
    }

    this.validate();

    this.listDoc = new Array<number>();

    this.loadDocumento();
  }

  validate() {
    this.fromDocumentos = this.formBuilder.group({
      idLoja : ['NomeLoja', Validators.required],
      idColadorador : ['idColadorador'],
      listIdDocumentos : ['listIdDocumentos'],
      obs : ['obs']
    });
  }

  loadDocumento(){
    let _id = this.route.snapshot.params["id"]
    if(_id){
      let result = this.service.getAuditoria(Number(_id));

      result.then((items) => {
        this.id = items.Item.id;
        this.NomeLoja = items.Item.Nomeloja;
        this.NomeColaborador = items.Item.NomePessoa;
        this.obs = items.Item.Obs;
        if(items.Item.AuditoriaItem){
          for( let i = 0; i < items.Item.AuditoriaItem.length; i++ ) {
            const element = items.Item.AuditoriaItem[i];
            this.listDoc.push(element.idSubTiposDocumentos);
          }
        }
      }); 
    }
  }

  isInvalid(field: string, validate: string) {
    const fieldControl = this.fromDocumentos.controls[field];
    let status = ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid);
    return status;
  }

  onSelectedCheckbox(event: any){
    if(event.currentTarget.checked) {
      this.listDoc.push(Number(event.currentTarget.id));
    }else{
      let index = this.listDoc.findIndex(d => d === Number(event.currentTarget.id)); //find index in your array
      this.listDoc.splice(index, 1)
    }
  }

  onSave(){
    if (this.fromDocumentos.valid) {
      let auditoria : Auditoria = new Auditoria();
      auditoria.Id = Number(this.route.snapshot.params["id"]);

      if(this.listDoc){
        this.listIdDocumentos = '';
        for (let index = 0; index < this.listDoc.length; index++) {
          const element = this.listDoc[index];
          this.listIdDocumentos =  this.listIdDocumentos + element + ',';
        }
      }
      auditoria.AuditoriaItem = this.listIdDocumentos;
      auditoria.Obs = this.obs;
      let result = this.service.onUpdateAuditoria(auditoria);
      this.mensagem = 'Form OK';
      this.router.navigate(['/documento']);
    } else {
      this.mensagem = 'Form Invalido!';
    } 
  }

  Cancel(){
    this.router.navigate(['/documento']);
  }
}
