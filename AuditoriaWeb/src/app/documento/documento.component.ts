import { Component, OnInit, DebugNode } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuditoriaModel } from './auditoria.model';
import { UtilModel } from './util.model';
import { DocumentoService } from './documento.service';


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
  providers: [DocumentoService]
})
export class DocumentoComponent implements OnInit {

  public listAuditoria: Array<AuditoriaModel>;
  public listPagination: Array<UtilModel>;

  private idLoja: number;
  private idColadorador: number;
  private listIdDocumentos: string;
  private totalRows: number;
  private paginaAtual: number;

  private mensagem: string;

  constructor(private service: DocumentoService ,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
    }
    this.paginaAtual = 0;
    this.onInitAuditoria(0);
  }

  onNextPagina(){
    this.paginaAtual = this.paginaAtual + 5;
    this.onInitAuditoria(this.paginaAtual);
  }

  onAfterPagina(){
    if(this.paginaAtual > 0){
      this.paginaAtual = this.paginaAtual - 5;
      this.onInitAuditoria(this.paginaAtual);
    }
  }

  onInitAuditoria(inicio:number){
    this.listAuditoria = new Array<AuditoriaModel>();

    if(this.paginaAtual != inicio){
      this.paginaAtual = inicio;
    }

    let fim:number =  inicio + 5;

    let result = this.service.getListGrid(inicio,fim);
    result.then((items) => {
      this.totalRows = (items.TotalRows % 5) == 0 ? (items.TotalRows / 5) : ((items.TotalRows + 1) / 5);

      this.listPagination = new Array<UtilModel>();
      let index : number = 0
      for( let i = 0; i < this.totalRows; i++ ) {
        const item:UtilModel = new UtilModel();
        if(i ==0){
          item.Id = i;
        } else{
          item.Id = index + 5;
        }
        item.Texto = i.toString();
        this.listPagination.push(item);
      }

      for( let i = 0; i < items.Items.length; i++ ) {
        const element = items.Items[i];
        const item:AuditoriaModel = new AuditoriaModel();
        item.Id = element.Index;
        item.NomeLoja = element.NomeLoja;
        item.NomeColaborador = element.NomeColaborador;
        item.Documentos = element.Documentos;
        item.Obs = element.Obs;
        item.DataCadastro = element.DataCadastro;
        this.listAuditoria.push(item);
      }
    });    
  }
}
