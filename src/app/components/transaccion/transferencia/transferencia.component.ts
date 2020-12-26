import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
 
  componenteTransferenciaDepositos:boolean=true;
  componentePagosDepositos:boolean=true;
  componenteCambiarDolares:boolean=true;
  contenidoTransferencia:boolean=false;
  contenidoPago:boolean=false;
  contenidoCambiarDolares:boolean=false;
  constructor() { }




  ngOnInit(): void {
    this.componenteTransferenciaDepositos=true;
    this.componentePagosDepositos=true;
    this.componenteCambiarDolares=true;
  }

  abrirComponenteTransferenciaDepositos(){
    this.componenteTransferenciaDepositos=!this.componenteTransferenciaDepositos;
  }

  abrirComponentePagoDepositos(){
    this.componentePagosDepositos=!this.componentePagosDepositos;
  }

  abrirComponenteCambiarDolares(){
    this.componenteCambiarDolares=!this.componenteCambiarDolares;
  }

  abrirContenido(contenido:string){
    if(contenido == 'contenidoTransferencia'){
      this.contenidoTransferencia = !this.contenidoTransferencia;
    }
    if(contenido == 'contenidoPago'){
      this.contenidoPago = !this.contenidoPago;
    }
    if(contenido == 'contenidoCambiarDolares'){
      this.contenidoCambiarDolares = !this.contenidoCambiarDolares;
    }
  }
}
