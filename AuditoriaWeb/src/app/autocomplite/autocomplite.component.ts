import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

import { DocumentoService } from './../documento/documento.service';
import { DropdownModel } from './../dropdown/dropdown.model';

@Component({
  selector: 'app-autocomplite',
  templateUrl: './autocomplite.component.html',
  styleUrls: ['./autocomplite.component.css'],
  providers: [DocumentoService]
})
export class AutocompliteComponent implements OnInit {

  private query: string = '';
  @Output() public onResult = new EventEmitter<DropdownModel>();
  public listAutocomplite : Array<DropdownModel>;
  constructor(private service: DocumentoService) { }

  ngOnInit() {

  }

  onKey(event:any) {
    this.query = event.target.value;
    if (this.query.length > 2) {
      this.listAutocomplite = new Array<DropdownModel>();
      let result = this.service.getSearchAutoComplite(this.query);
      result.then((items) => {
        for( let i = 0; i < items.length; i++ ) {
          const element = items[i];
          const item:DropdownModel = new DropdownModel();
          item.Id = element.id;
          item.Texto = element.sNome;
          this.listAutocomplite.push(item);
        }
      });
    }
  }

  onClickAutocomplite(item:DropdownModel){
    this.query = item.Texto;
    this.onResult.emit(item);
  }

}
