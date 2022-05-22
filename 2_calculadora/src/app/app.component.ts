import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo="Calculadora Básica";
  num1:number=0;
  num2:number=0;
  resultado:string="0";
  operador="";
  milesimas=" ";
  decimal=",";

  cambiarOperador(event:Event):void{
    this.operador=(<HTMLInputElement>event.target).value
  }

  cambiar_milesimas(event:Event):void{
    this.milesimas=(<HTMLInputElement>event.target).value
  }

  cambiar_decimal(event:Event):void{
    this.decimal=(<HTMLInputElement>event.target).value
  }

  calcular():void{
    switch(this.operador){
      case 'suma': this.resultado=(this.num1+this.num2).toString(); break;
      case 'resta': this.resultado=(this.num1-this.num2).toString(); break;
      case 'multiplicacion': this.resultado=(this.num1*this.num2).toString(); break;
      case 'division': this.resultado=(this.num1/this.num2).toString(); break;
      case 'potencia': this.resultado=getPotencia(this.num1,this.num2).toString(); break;
    }

    if(this.decimal==","){
      this.resultado=remplazarTexto(".",",",this.resultado.toString());
    }
    let posicion_negativo=buscarCaracter("-",this.resultado);
    if(posicion_negativo!=-1){
      this.resultado=remplazarTexto("-","",this.resultado.toString());
    }
    let resultado_temp:string[]=separarTexto(this.decimal,this.resultado);
    this.resultado=(posicion_negativo!=-1)?"-":"";
    this.resultado+=ponerSeparador(this.milesimas,3,resultado_temp[0]);
    this.resultado+=(resultado_temp[1]??false)?this.decimal+resultado_temp[1]:"";
    // Function para declarar un función dentro de otar función / método
    function buscarCaracter(caracter:string,textro:string):number{
      for(let a:number=0; a<textro.length; a++){
        if(textro[a]==caracter){
          return a;
        }
      }
      return -1;
    }
    function getPotencia(num1:number, num2:number):number{
      let resultado:number=num1;
      for(let a:number=1; a<num2; a++){
        resultado*=num1;
      }
      return resultado;
    }
    function separarTexto(separador:string,texto:string):string[]{
      let arreglo:string[]=[];
      let posicion:number=0;
      let conta:number=0;
      let letras:string="";
      for(let a:number=0; a<texto.length; a++){
        if(texto[a]==separador){
          letras="";
          for(let b:number=posicion; b<a; b++){
            letras+=texto[b];
          }
          arreglo[conta]=letras;
          posicion=a+1;
          conta++;
        }
      }
      letras="";
      for(let b:number=posicion; b<texto.length; b++){
        letras+=texto[b];
      }
      arreglo[conta]=letras;
      return arreglo;
    }
    function ponerSeparador(separador:string,logitud:number,texto:string):string{
      let texto_nuevo:string="";
      let residuo=texto.length%logitud;
      let div=Math.floor(texto.length/logitud);
      let posicion:number=residuo;
      if(residuo<=logitud && residuo!=0){
        for(let a:number=0; a<residuo; a++){
          texto_nuevo+=texto[a];
        }
        if(texto.length>logitud){
          texto_nuevo+=separador;
        }
      }
      for(let a:number=1; a<=div; a++){
        for(let b:number=posicion; b<posicion+logitud; b++){
          texto_nuevo+=texto[b]??"";
        }
        if(a!=div){
          texto_nuevo+=separador;
        }
        posicion+=logitud;
      }
      return texto_nuevo;
    }
    function remplazarTexto(letra:string,remplazar:string,texto:string):string{
      let texto_nuevo:string="";
      for(let a:number=0; a<texto.length; a++){
        if(texto[a]==letra){
          texto_nuevo+=remplazar;
        }else{
          texto_nuevo+=texto[a];
        }
      }
      return texto_nuevo;
    }
    
  }
}
