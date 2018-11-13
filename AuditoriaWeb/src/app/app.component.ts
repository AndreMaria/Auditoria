import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuditoriaWeb';

  public statuslogin : boolean;

  onStatusLogin(event){
    this.statuslogin = event != null ? true : false;
  }
}
