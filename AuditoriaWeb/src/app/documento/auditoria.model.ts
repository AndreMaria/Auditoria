export class AuditoriaModel {
    private id: number;
    private nomeLoja: string;
    private nomeColaborador: string;
    private documentos: string;
    private obs: string;
    private dataCadastro: string;

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
}