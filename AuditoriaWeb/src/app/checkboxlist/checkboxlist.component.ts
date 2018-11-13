import { Component, OnInit, EventEmitter, Output,Input   } from '@angular/core';
import { FormArray } from '@angular/forms';

import { DocumentoService } from './../documento/documento.service';
import { DropdownModel } from './../dropdown/dropdown.model';


@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.css'],
  providers: [DocumentoService]
})
export class CheckboxlistComponent implements OnInit {

  @Output() public onResult = new EventEmitter<any>();
  public listCheckbox : Array<DropdownModel>;
  public formArray: FormArray;
  constructor(private service: DocumentoService) {
   }

  ngOnInit() {
    this.listCheckbox = new Array<DropdownModel>();

    this.onGetListCheckbox();
  }

  onGetListCheckbox() {
    let result = this.service.getListCheckbox();
    result.then((items) => {
      for( let i = 0; i < items.length; i++ ) {
        const element = items[i];
        const item:DropdownModel = new DropdownModel();
        item.Id = element.IdSubTipoDocumento;
        item.Texto = element.Descricao;
        this.listCheckbox.push(item);
      }
    });
  }

  onCheck(item:any){
    this.onResult.emit(item);
  }
}
