import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DropdownModel } from './../../dropdown/dropdown.model';
import { DocumentoService } from './../documento.service'
import { Auditoria } from './../auditoria';

@Component({
  selector: 'app-documento-form',
  templateUrl: './documento-form.component.html',
  styleUrls: ['./documento-form.component.css'],
  providers: [DocumentoService]
})
export class DocumentoFormComponent implements OnInit {

  public listDropDown: Array<DropdownModel>;
  public fromDocumentos : FormGroup;

  private idLoja: number;
  private idColadorador: number;
  private listIdDocumentos: string;
  private obs : string;
  private returnUrl: string;

  private listDoc : Array<number>;
  private mensagem: string;

  constructor(private formBuilder: FormBuilder, 
    private service: DocumentoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
    }
    this.validate();
    this.returnUrl = this.route.snapshot.queryParams['documento'] || '/';
    this.listDoc = new Array<number>();
  }

  validate() {
    this.fromDocumentos = this.formBuilder.group({
      idLoja : ['idLoja', Validators.required],
      idColadorador : ['idColadorador', Validators.required],
      listIdDocumentos : ['listIdDocumentos'],
      obs : ['obs']
    });
  }

  isInvalid(field: string, validate: string) {
    const fieldControl = this.fromDocumentos.controls[field];
    let status = ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid);
    return status;
  }

  onInitDropDown(item: DropdownModel){
    this.listDropDown = new Array<DropdownModel>();
    if (item.Id > 0) {
      this.idLoja = item.Id;
      let result = this.service.getListDropDownById(item.Id);
      result.then((items) => {
        for( let i = 0; i < items.length; i++ ) {
          const element = items[i];
          const item:DropdownModel = new DropdownModel();
          item.Id = element.id;
          item.Texto = element.sNome;
          this.listDropDown.push(item);
        }
      });
    }
  }

  onSelectedDrop(item: DropdownModel){
    if (item.Id > 0) {
      this.idColadorador = item.Id;
    } 
  }

  onSelectedCheckbox(event: any){
    if(event.currentTarget.checked) {
      this.listDoc.push(event.currentTarget.id);
    }else{
      let index = this.listDoc.findIndex(d => d === event.currentTarget.id); //find index in your array
      this.listDoc.splice(index, 1)
    }
  }

  onSave(){
    if (this.fromDocumentos.valid) {
      let auditoria : Auditoria = new Auditoria();
      auditoria.IdLoja = this.idLoja;
      auditoria.IdPessoa = this.idColadorador;

      if(this.listDoc){
        for (let index = 0; index < this.listDoc.length; index++) {
          const element = this.listDoc[index];
          this.listIdDocumentos =  this.listIdDocumentos + element + ',';
        }
      }
      auditoria.AuditoriaItem = this.listIdDocumentos;
      auditoria.Obs = this.obs;
      let result = this.service.onInsertAuditoria(auditoria);
      this.mensagem = 'Form OK';
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.mensagem = 'Form Invalido!';
    }
    
  }

  Cancel(){
    
  }
}
