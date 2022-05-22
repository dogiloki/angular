import { Component } from '@angular/core';
import { Empleado } from './empleado.model'; // Importar la clase empledos del archivo empleado.model.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo='Listado de empleados';
  caja_nombre:string="";
  caja_apellido:string="";
  caja_cargo:string="";
  caja_salario:number=0;
  
  empleados:Empleado[]=[
    new Empleado("Julio","Villanueva","Presidente",20000),
    new Empleado("Ana","Cervantes","Directora",15000),
    new Empleado("Maria","Hernandéz","Administradición",13000),
    new Empleado("Laura","Lopéz","Recursos humanos",10000),
    new Empleado("Marco","Espinosa","Sistemas",30000)
  ];

  registrar():void{
    let empleado=new Empleado(this.caja_nombre,this.caja_apellido,this.caja_cargo,this.caja_salario);
    this.empleados.push(empleado);
    // Otra forma agregar los empleados al array
    //this.empleados.push(new Empleado(this.caja_nombre,this.caja_apellido,this.caja_cargo,this.caja_salario));
  }
}
