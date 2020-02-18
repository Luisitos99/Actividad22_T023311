import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  Saldo = 0;

  Transacciones = [
  ]

  dep(cant:HTMLInputElement){
    if(cant.value===""){
      alert("El cuadro de texto esta vacío")
    }
    else{
    if (cant.valueAsNumber>=0){
      this.Saldo=this.Saldo+cant.valueAsNumber;
      this.Transacciones.unshift(cant.valueAsNumber)
    }
    else{
      alert("No se aceptan valores negativos")
    }
  }
  }

  ret(cant:HTMLInputElement){
    if(cant.value===""){
      alert("El cuadro de texto esta vacío")
    }
    else{
    if (cant.valueAsNumber>=0){
      this.Saldo=this.Saldo-cant.valueAsNumber;
      this.Transacciones.unshift(-cant.valueAsNumber)
    }
    else{
      alert("No se aceptan valores negativos")
    }
  }
  }
}