import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:`Código html`;
  styleUrls: ['./empleado.component.css'] 
  //styles:[`código css`]
})
export class EmpleadoComponent implements OnInit {

  nombre="Julio";
  apellido="Villanueva";
  edad=20
  empresa="Empresa X";

  getNameFull(){
    return this.nombre+" "+this.apellido;
  }

  caja_habilitada=false;
  es_registrado=false;
  texo_registro=this.es_registrado?"Usario registrado":"Sin registrarse";

  usuarioRegister(){
    this.es_registrado=this.es_registrado?false:true;
    this.texo_registro=this.es_registrado?"Usario registrado":"Sin registrarse";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
