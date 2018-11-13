import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class DocumentoService {

    private headers: Headers;
    private options: RequestOptions;
    private url:string ="http://localhost:49394/api/auditoria/";
    private sessionTokem : any;
    private token : string;
    private IdUsuario: number;

    constructor(private http:Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Accept': 'q=0.8;application/json;q=0.9' });
      this.options = new RequestOptions({ headers: this.headers });
      this.sessionTokem = JSON.parse(localStorage.getItem('currentUser'));

      if(this.sessionTokem){
        let itens = this.sessionTokem.token.toString().split(";");

        let ItemIdUsuario = itens[1].split("=");
        this.IdUsuario = Number(ItemIdUsuario[1].toString());
8
        let itemtoken = itens[0].split("="); 
        this.token = itemtoken[1].trim();
      }
    }

    createService(url: string, param: any): Promise<any> {
        let body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }  

    getSearchAutoComplite(texto: string) : Promise<any> {
        let metodo : string = `GetSearchLoja?TokenSecret=${this.token}&nome=${texto}`;
        let headers = new Headers({
          'Content-Type':'application/json; charset=utf-8;' 
          ,'Accept':'*/*'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this.url}${metodo}`).toPromise().then((response:Response) => {
          return response.json();
        }).catch((erro)=>{ console.log(`[Erro]:${erro}`)});
    }

    getListDropDownById(id: number) : Promise<any> {
        let metodo : string = `GetPessoaByIdLoja?TokenSecret=${this.token}&idLoja=${id}`;
        let headers = new Headers({
          'Content-Type':'application/json; charset=utf-8;' 
          ,'Accept':'*/*'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(`${this.url}${metodo}${id}`).toPromise().then((response:Response) => {
          return response.json();
        }).catch((erro)=>{ console.log(`[Erro]:${erro}`)});
    }

    getListCheckbox() : Promise<any> {
      let metodo : string = `GetSubTiposDocumentos?TokenSecret=${this.token}&IdTipoDocumento=0`;
      let headers = new Headers({
        'Content-Type':'application/json; charset=utf-8;' 
        ,'Accept':'*/*'
      });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(`${this.url}${metodo}`).toPromise().then((response:Response) => {
        return response.json();
      }).catch((erro)=>{ console.log(`[Erro]:${erro}`)});
    }

    getListGrid(inicio:number, fim:number) : Promise<any> {
      let metodo : string = `GetListAuditoria?TokenSecret=${this.token}&inicio=${inicio}&fim=${fim}`;
      let headers = new Headers({
        'Content-Type':'application/json; charset=utf-8;' 
        ,'Accept':'*/*'
      });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(`${this.url}${metodo}`).toPromise().then((response:Response) => {
        return response.json();
      }).catch((erro)=>{ console.log(`[Erro]:${erro}`)});
    }

    onInsertAuditoria(param: any): Promise<any> {
        param.IdUsuario = this.IdUsuario;
        param.TokenSecret = this.token;
        let metodo = 'InsertAuditoria'
        return this.createService(`${this.url}${metodo}`,param)
        .then((response) => {return response.json();})
        .catch((erro)=>{ console.log(`[Erro]:${erro}`)});
    }

    private extractData(res: Response) {
        let body = res.headers.values()[4];
        return body || {};
    }
  
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}