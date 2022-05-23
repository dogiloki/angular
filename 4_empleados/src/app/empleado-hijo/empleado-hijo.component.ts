import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  // Obtener las variables del componente padre
  // Signo de ! se usa en el modo estricto (no puede definir variables sin asignar un valor) para indicar que la variable no puede ser null o undefined
  @Input()empleado!:Empleado;
  @Input()indice!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
