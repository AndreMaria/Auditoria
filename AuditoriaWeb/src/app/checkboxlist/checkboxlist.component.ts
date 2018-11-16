import { Component, OnInit, EventEmitter, Output,Input   } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DocumentoService } from './../documento/documento.service';
import { DropdownModel } from './../dropdown/dropdown.model';


@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css'],
  providers: [DocumentoService],
})
export class CheckboxlistComponent implements OnInit {

  @Output() public onResult = new EventEmitter<any>();
  private docUtilizados : Array<DropdownModel>;
  public listCheckbox : Array<DropdownModel>;
  public formArray: FormArray;
  constructor(private service: DocumentoService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit() {
    this.listCheckbox = new Array<DropdownModel>();
    this.onGetListCheckbox();
  }

  onGetListCheckbox() {
    let _id = this.route.snapshot.params["id"];
    if(_id){
      this.loadEditDoc(_id);
    }else {
      this.loadNewDoc();
    }
  }

  onCheck(item:any){
    this.onResult.emit(item);
  }

  loadNewDoc(){
    let result = this.service.getListCheckbox();
    result.then((items) => {
      for( let i = 0; i < items.length; i++ ) {
        const element = items[i];
        const item:DropdownModel = new DropdownModel();
        item.Id = element.IdSubTipoDocumento;
        item.Texto = element.Descricao;
        this.listCheckbox.push(item);
      }
    })
  }

  loadEditDoc(id:number){
    let resultItem = this.service.getAuditoriaItem(id);
    resultItem.then((response)=> {
      this.docUtilizados = new Array<DropdownModel>();
      for( let i = 0; i < response.Items.length; i++ ) {
        const element = response.Items[i];
        const item:DropdownModel = new DropdownModel();
        item.Id = element.idSubTiposDocumentos;
        item.Texto = element.DocumentosDescricao;
        item.Checked = true;
        this.docUtilizados.push(item);
      }
    }).finally( () => {
      let result = this.service.getListCheckbox();
      result.then((items) => {
        for( let i = 0; i < items.length; i++ ) {
          const element = items[i];
          const item:DropdownModel = new DropdownModel();
          item.Id = element.IdSubTipoDocumento;
          item.Texto = element.Descricao;
          item.Checked = (this.docUtilizados.find( x=> x.Texto == element.Descricao) != null);
          this.listCheckbox.push(item);
        }
      })
    });
  }
}
