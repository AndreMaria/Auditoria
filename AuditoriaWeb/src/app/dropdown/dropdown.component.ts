import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DropdownModel } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  private colaborador: string = 'Colaborador';
  @Input() listDropdown: Array<DropdownModel>;
  @Output() public ItemSelected = new EventEmitter<DropdownModel>();

  constructor() { }

  ngOnInit() {

  }

  onClickDropdown(item: DropdownModel){
    this.colaborador = item.Texto;
    this.ItemSelected.emit(item);
  }
  
}
