export class DropdownModel {
    private id: number;
    private texto: string;
    private checked: boolean;

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

    get Checked() {
        return this.checked;
    }
    set Checked(value: boolean) {
        this.checked = value;
    }
}