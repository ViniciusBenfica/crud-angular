import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private serviceservice: ServiceService) {
  }

  ngOnInit(): void {
  }

  createUser(): void{
    // this.serviceservice.addUser(this.teste).subscribe()
  }

}
