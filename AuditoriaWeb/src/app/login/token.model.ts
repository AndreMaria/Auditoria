export class TokenModel {
    private tokenSecret: string;
    private password: string;

    get TokenSecret() {
        return this.tokenSecret;
    }
    set TokenSecret(value: string) {
        this.tokenSecret = value;
    }
}