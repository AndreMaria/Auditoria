import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UtilModel } from './../documento/util.model';
import { UsuarioModel  } from './usuario.model';
import { UsuarioService  } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  public listUsuario: Array<UsuarioModel>;
  public listPagination: Array<UtilModel>;

  private totalRows: number;

  constructor(private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
    }
    this.onInitUsuario(1);
  }

  onInitUsuario(inicio:number){
    this.listUsuario = new Array<UsuarioModel>();

    let fim:number = inicio + 5;

    let result = this.service.getListGridUsuario(inicio,fim);
    result.then((items) => {
      this.totalRows = (items.TotalRows % 5) == 0 ? (items.TotalRows / 5) : ((items.TotalRows + 1) / 5);

      this.listPagination = new Array<UtilModel>();
      for( let i = 0; i < this.totalRows; i++ ) {
        const item:UtilModel = new UtilModel();
        item.Id = i;
        item.Texto = i.toString();
        this.listPagination.push(item);
      }

      for( let i = 0; i < items.Items.length; i++ ) {
        const element = items.Items[i];
        const item:UsuarioModel = new UsuarioModel();
        item.Id = element.Id;
        item.Nome = element.Nome;
        item.Email = element.Email;
        item.DataCadastro = element.DataCadastro;
        this.listUsuario.push(item);
      }
    });    
  }
}
