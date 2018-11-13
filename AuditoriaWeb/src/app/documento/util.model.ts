export class UtilModel {
    private id: number;
    private texto: string;

    get Id() {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get Texto() {
        return this.texto;
    }
    set Texto(value: string) {
        this.texto = value;
    }
}