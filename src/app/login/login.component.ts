import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string = "";
  public clave: string = "";

  constructor() { }

  ngOnInit() {

  }

  loguear(){
    console.log("USUARIO", this.usuario + " " + this.clave);
  }

}
