import { Component, OnInit , Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() isLoggedIn : boolean

  constructor(
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    console.log(`Status Login = ${this.isLoggedIn}`);
  }

  onLogout(){
    this.isLoggedIn = false; 
    this.router.navigate(['/login']);
  }

}
