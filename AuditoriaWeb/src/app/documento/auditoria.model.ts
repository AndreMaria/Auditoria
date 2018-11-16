export class AuditoriaModel {
    private id: number;
    private nomeLoja: string;
    private nomeColaborador: string;
    private documentos: string;
    private obs: string;
    private dataCadastro: string;
    private auditoriaItem: Array<AuditoriaItem>;

    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get NomeLoja() {
        return this.nomeLoja;
    }
    set NomeLoja(value: string) {
        this.nomeLoja = value;
    }

    get NomeColaborador() {
        return this.nomeColaborador;
    }
    set NomeColaborador(value: string) {
        this.nomeColaborador = value;
    }

    get Documentos() {
        return this.documentos;
    }
    set Documentos(value: string) {
        this.documentos = value;
    }

    get Obs() {
        return this.obs;
    }
    set Obs(value: string) {
        this.obs = value;
    }

    get DataCadastro() {
        return this.dataCadastro;
    }
    set DataCadastro(value: string) {
        this.dataCadastro = value;
    }

    get AuditoriaItem() {
        return this.auditoriaItem;
    }
    set AuditoriaItem(value: Array<AuditoriaItem>) {
        this.auditoriaItem = value;
    }
}

export class AuditoriaItem {

    private id: number;
    private idAuditoria: number;
    private idSubTiposDocumentos: number;
    private documentosDescricao: string;

    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get IdAuditoria() {
        return this.idAuditoria;
    }
    set IdAuditoria(value: number) {
        this.idAuditoria = value;
    }

    get IdSubTiposDocumentos() {
        return this.idSubTiposDocumentos;
    }
    set IdSubTiposDocumentos(value: number) {
        this.idSubTiposDocumentos = value;
    }

    get DocumentosDescricao() {
        return this.documentosDescricao;
    }
    set DocumentosDescricao(value: string) {
        this.documentosDescricao = value;
    }
}