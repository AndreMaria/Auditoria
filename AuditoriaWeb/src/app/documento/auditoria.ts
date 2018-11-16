export class Auditoria {
    private id: number;
    private idLoja: number;
    private idPessoa: number;
    private auditoriaItem: string;
    private obs: string;
    private tokenSecret: string;
    private idUsuario : number;

    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get IdLoja() {
        return this.idLoja;
    }
    set IdLoja(value: number) {
        this.idLoja = value;
    }

    get IdPessoa() {
        return this.idPessoa;
    }
    set IdPessoa(value: number) {
        this.idPessoa = value;
    }

    get AuditoriaItem() {
        return this.auditoriaItem;
    }
    set AuditoriaItem(value: string) {
        this.auditoriaItem = value;
    }

    get Obs() {
        return this.obs;
    }
    set Obs(value: string) {
        this.obs = value;
    }

    get TokenSecret() {
        return this.tokenSecret;
    }
    set TokenSecret(value: string) {
        this.tokenSecret = value;
    }

    get IdUsuario() {
        return this.idUsuario;
    }
    set IdUsuario(value: number) {
        this.idUsuario = value;
    }
}

