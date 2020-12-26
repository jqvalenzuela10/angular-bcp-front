import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cambio-dolares',
  templateUrl: './cambio-dolares.component.html',
  styleUrls: ['./cambio-dolares.component.css']
})
export class CambioDolaresComponent implements OnInit {

  constructor() { }


  @Input('data') componenteCambiarDolares:any

  @Output() retrocederComponenteTransferenciaDeposito=new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  retrocederAComponenteTransferencia(){
    console.log('cambiaaaaaaaaa')
    this.componenteCambiarDolares=!this.componenteCambiarDolares;
    this.retrocederComponenteTransferenciaDeposito.emit(this.componenteCambiarDolares)
  }

}
