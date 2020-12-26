import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cliente } from './../../../interfaces/cliente.interface';
import { CuentaBancaria } from './../../../models/cuentas.bancarias';
import { AuthService } from './../../../services/auth.service';
import { ClienteService } from './../../../services/cliente.service';
import { TransferenciaService } from './../../../services/transferencia.service';
import { NotificacionService } from './../../../services/notificacion.service';
import { Transferencia } from './../../../models/transferencia.model';
import { Notificacion } from './../../../models/notificacion.model';
import { SocketService } from "./../../../services/socket.service";
@Component({
  selector: 'app-transfer-depositos',
  templateUrl: './transfer-depositos.component.html',
  styleUrls: ['./transfer-depositos.component.css']
})
export class TransferDepositosComponent implements OnInit {


  @Input('data') componenteTransferenciaDepositos:any

  @Output() retrocederComponenteTransferenciaDeposito=new EventEmitter<boolean>()



  


  transf: Boolean = false;
  resumen: Boolean = false;
  confirmacion: Boolean = false;

  cuentaOrigen: CuentaBancaria = new CuentaBancaria();
  cuentaDestino: CuentaBancaria = new CuentaBancaria();

  notificacion: Notificacion = new Notificacion();
  numeroCuenta: string;

  cliente: cliente;
  clienteDestino: cliente;
  cuentasBancarias: CuentaBancaria[]
  transferenciaData: Transferencia = new Transferencia();
  monto: number = 0
  constructor(private socketService:SocketService,private authService: AuthService, private clienteService: ClienteService, private router: Router, private tranferenciaService: TransferenciaService, private notificacionService: NotificacionService) {
    if (authService.getCliente() !== null) {

      this.cliente = JSON.parse(authService.getCliente());
      
      clienteService.getCuentasBancarias(this.cliente.codCli)
        .subscribe((data) => {
          console.log('id del metodo getCuentasBancarias  :  '+this.cliente.codCli)
          console.log('cuenta bancaria')
          console.log(data)

          this.cuentasBancarias = data as CuentaBancaria[]
        }, (err) => {
          console.log(err);

        }
        );

    } else {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit(): void {
    console.log(this.componenteTransferenciaDepositos)
    this.socketService.conectar(this.cliente.codCli)
    this.tranferenciaService.obtenerTransaccionesByIdCliente(this.cliente.codCli)
  }

  retrocederAComponenteTransferencia(){
    console.log('cambiaaaaaaaaa')
    this.componenteTransferenciaDepositos=!this.componenteTransferenciaDepositos;
    this.retrocederComponenteTransferenciaDeposito.emit(this.componenteTransferenciaDepositos)
  }
 

  verificarDatos() {
   

    if (this.transferenciaData.monto > 0 && this.transferenciaData.codCuenta) {
      this.tranferenciaService.verificarCuenta(this.numeroCuenta)
        .subscribe(
          (data: CuentaBancaria) => {
            console.log(data)
            this.transferenciaData.codDestinoCuenta = data.codCuenta;
            console.log(this.cliente.codCli)
            console.log(this.transferenciaData.codDestinoCuenta)
            this.cuentaDestino.numCuenta = data.numCuenta;
            this.cuentaDestino.tarjeta = data.tarjeta;
            this.cuentaDestino.codCli = data.codCli;
            this.transf = true;
          },
          (err) => {
            console.log(err);
          }
        );
      this.tranferenciaService.obtenerCuentaById(this.transferenciaData.codCuenta)
        .subscribe(
          (data: CuentaBancaria) => {
            this.cuentaOrigen.numCuenta = data.numCuenta;
            this.cuentaOrigen.tarjeta = data.tarjeta;
            this.cuentaOrigen.codCli = data.codCli;

            this.transf = true;
            this.resumen = true;
          },
          (err) => {
            console.log(err);
          }
        );

    }

  }

  realizarTransferencia(transfe: NgForm) {
    this.transferenciaData.codTipoTransaccion = { "codTipoTransaccion": 1 }
    this.transferenciaData.codCuenta = { "codCuenta": this.transferenciaData.codCuenta }
    var myDate = new Date();

    this.transferenciaData.fecha = new Date();
    console.log('fecha'+this.transferenciaData.fecha)
    this.transferenciaData.hora = new Date().getHours()+": "+new Date().getMinutes()
    console.log(this.transferenciaData)
    this.tranferenciaService.realizarTransferencia(this.transferenciaData)
      .subscribe(
        (data) => {
          this.resumen = false;
          this.confirmacion = true;

          this.notificacion.titulo = "Transferencia realizada con éxito!";
          this.notificacion.estado = 0;
          this.notificacion.descripcion = `El monto transferido fue de ${this.transferenciaData.monto}`;
          this.notificacion.fecha = this.transferenciaData.fecha;
          this.notificacion.hora = this.transferenciaData.hora;
          this.notificacion.codTipoNotificaciones = { "codTipoNotificaciones": 2 };
          this.notificacionService.generarNotificacion(this.notificacion)
            .subscribe(
              (data) => {
                console.log("TODO OKAY");
                console.log('id  emisor  : '+this.cliente.codCli)
                console.log('id  receptor  : '+this.transferenciaData.codDestinoCuenta)
                localStorage.setItem("receptor",this.transferenciaData.codDestinoCuenta+"")
                this.socketService.recibirDatos(this.cliente.codCli,this.transferenciaData.codDestinoCuenta)
              },
              (err) => {
                console.log(`Error ${err}`);

              }
            );


        },
        (err) => {
          console.log("Error");

        }
      );

  }

  ponerSaldo(codCuenta:number){

   this.cuentasBancarias.forEach(data=>{
     if(data.codCuenta==codCuenta){
       this.monto=data.saldo;
     }
   })
  }
}

