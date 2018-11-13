import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceGeralService } from './../../home/serviceGeral.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css'],
  providers: [ServiceGeralService]
})
export class LogoffComponent implements OnInit {

  @Output() onOff = new EventEmitter<any>();
  constructor(
    private service: ServiceGeralService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let result = this.service.onLogoff();

    result.then((items) => {
      localStorage.clear();
    });

    this.router.navigate(['/login']);
  }

}
