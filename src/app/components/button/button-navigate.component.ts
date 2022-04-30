import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-navigate',
  templateUrl: './button-navigate.component.html',
  styleUrls: ['./button-navigate.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Input() rota: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigation(){
    this.router.navigate([this.rota])
  }

}
