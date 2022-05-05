import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { User } from 'src/interfaces/User';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: string = ""
  email: string = ""
  password: string = ""

  constructor(private serviceservice: ServiceService) {
  }

  ngOnInit(): void {
  }

  createUser(): void{
    var user: User = {
      "id": 1,
      "name": this.name,
      "email": this.email,
      "password": this.password,
    }
    
    this.serviceservice.addUser(user).subscribe()

    this.name = ""
    this.email = ""
    this.password = ""

  }

}
