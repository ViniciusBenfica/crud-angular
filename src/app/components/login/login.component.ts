import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = ""
  password: string = ""
  userData!: User

  constructor(private serviceservice: ServiceService) {
  }

  ngOnInit(): void {
  }

  login(): void{
    var user: User = {
      "id": 1,
      "name": this.name,
      "password": this.password,
    }
    
    this.serviceservice.login(user).subscribe(item => console.log(item))

    this.name = ""
    this.password = ""

  }

}
