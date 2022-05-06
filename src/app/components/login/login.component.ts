import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = ""
  password: string = ""

  constructor(private serviceservice: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void{
    var user = {
      "name": this.name,
      "password": this.password,
    }
    
    this.serviceservice.login(user).subscribe(item => {

      if(item){
        alert("Logado")
        this.router.navigate(["/"])
      }else{
        alert("Não logado")
      }
    })

    this.name = ""
    this.password = ""

  }
}
