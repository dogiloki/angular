import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string="REGISTRO DE USUARIOS";
  mensaje:string="";
  esRegistrado:boolean=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  noticias:any;
  
  constructor(){
    this.noticias=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Colbol ¿Dónde quedó?"}
    ];
  }

  registrar():void{
    this.esRegistrado=true;
    this.mensaje="El usuario ";
  }
}
