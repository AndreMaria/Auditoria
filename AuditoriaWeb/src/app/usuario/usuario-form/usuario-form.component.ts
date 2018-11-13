import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { UsuarioModel } from './../usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  providers: [UsuarioService]
})
export class UsuarioFormComponent implements OnInit {

  public fromUsuario : FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private service: UsuarioService, 
    private route: ActivatedRoute,
    private router: Router) { }

  private mensagem : string;
  private nome : string;
  private password : string;
  private repassword : string;
  private email : string;
  private returnUrl: string;

  ngOnInit() {
    if(!localStorage.getItem('currentUser')){
      this.router.navigate(['/login']);
    }
    this.validate();
    this.returnUrl = this.route.snapshot.queryParams['usuario'] || '/';
  }

  validate() {
    this.fromUsuario = this.formBuilder.group({
      nome : ['nome', Validators.required],
      password : ['password', Validators.required],
      repassword : ['repassword', Validators.required],
      email : ['email', Validators.required]
    });
  }

  isInvalid(field: string, validate: string) {
    const fieldControl = this.fromUsuario.controls[field];
    let status = ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid);
    return status;
  }

  onValidatePassword(event){
    if(this.password != this.repassword){
        this.mensagem = "Senha Invalida!";
    }
  }

  onSave(){
    if (this.fromUsuario.valid) {

      let user : UsuarioModel = new UsuarioModel();

      if(this.password != this.repassword){
        this.mensagem = "Senha Invalida!";
      }else {
        user.Nome = this.nome ;
        user.Email = this.email;
        user.Senha = this.password;

        this.service.onInsertUsuario(user);
        this.mensagem = 'Form OK';
        this.router.navigateByUrl(this.returnUrl);
      }
    } else {
      this.mensagem = 'Form Invalido!';
    }
  }
}
