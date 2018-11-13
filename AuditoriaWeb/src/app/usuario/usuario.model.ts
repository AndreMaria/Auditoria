export class UsuarioModel {
    private id: number;
    private nome: string;
    private email: string;
    private senha: string;
    private dataCadastro: string;
    private tokenSecret: string;

    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get Nome() {
        return this.nome;
    }
    set Nome(value: string) {
        this.nome = value;
    }

    get Email() {
        return this.email;
    }
    set Email(value: string) {
        this.email = value;
    }

    get Senha() {
        return this.senha;
    }
    set Senha(value: string) {
        this.senha = value;
    }

    get DataCadastro() {
        return this.dataCadastro;
    }
    set DataCadastro(value: string) {
        this.dataCadastro = value;
    }

    get TokenSecret() {
        return this.tokenSecret;
    }
    set TokenSecret(value: string) {
        this.tokenSecret = value;
    }
}