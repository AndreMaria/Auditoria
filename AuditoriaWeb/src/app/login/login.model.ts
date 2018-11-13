export class LogimModel {
    private email: string;
    private password: string;

    get Email() {
        return this.email;
    }
    set Email(value: string) {
        this.email = value;
    }

    get Password() {
        return this.password;
    }
    set Password(value: string) {
        this.password = value;
    }
}