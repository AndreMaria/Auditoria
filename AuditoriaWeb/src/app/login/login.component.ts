import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';

import { ServiceGeralService } from './../home/serviceGeral.service';
import { LogimModel } from './login.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceGeralService]
})
export class LoginComponent implements OnInit {

  @Output() onStatus = new EventEmitter<any>();
  public fromlogin : FormGroup;
  private email: string;
  private password: string;
  private returnUrl: string;
  private formSubmitAttempt: boolean;

  private mensagem: string;
  constructor(private formBuilder: FormBuilder,
    private service: ServiceGeralService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.onOff();
    }
    this.validate();
  }

  validate() {
    this.fromlogin = this.formBuilder.group({
      email : ['email', Validators.required],
      password : ['password', Validators.required],
    });
  }

  
  isInvalid(field: string, validate: string) {
    const fieldControl = this.fromlogin.controls[field];
    let status = ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid);
    return status;
  }

  onSignIn(){
    if (this.fromlogin.valid) {
      this.mensagem = 'Form OK';
      let login: LogimModel = new LogimModel();
      login.Email = this.email;
      login.Password = this.password;

      let result = this.service.onSignIn(login);
      result.then((items) => {
        localStorage.setItem('currentUser', JSON.stringify({ token: items, name: this.email }));
        this.onStatus.emit(items);
      });
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.mensagem = 'Login invalido!';
    }
  }

  onOff(){
    let result = this.service.onLogoff();

    result.then((items) => {
      localStorage.clear();
      this.onStatus.emit(items);

    });
  }
}
