import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from './../../services/cliente.service';
import { TransaccionService } from "./../../services/transaccion.service";
import { Transaccion } from '../../models/transaccion.model';
import { SocketService } from "./../../services/socket.service";
import { Client } from "@stomp/stompjs";
import * as SockJS from "sockjs-client"
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  private client: Client;
  conectado: boolean = false;



  transf: Boolean = false;
  fecha: Date = new Date("2020-11-12T08:23:11.236+00:00");
  cliente: cliente;
  transacciones: Transaccion[] = []
  transaccion: Transaccion
  mensaje: string = ""
  movimientoColor: boolean = true
  constructor(private socketService: SocketService, private authService: AuthService, private clienteService: ClienteService, private router: Router, private transaccionService: TransaccionService) {
    if (authService.getCliente() !== null) {

      this.cliente = JSON.parse(authService.getCliente());

    } else {
      this.router.navigateByUrl("/login");
    }
  }



  ngOnInit(): void {
    this.onConnectSocket()
  }

  comenzarTransferencia() {

  }



  onConnectSocket() {
    this.client = new Client();
    console.log('entro para activar')


    this.client.activate();


    this.client.webSocketFactory = () => {
      console.log('entro web socket factory')
      return new SockJS("http://localhost:8080/notificacion-websocket");
    }
    this.client.onConnect = (frame) => {
      console.log('entro a transferCompoenet')
      console.log('Conectados: ' + this.client.connected + ' : ' + frame);
      this.conectado = true;

      this.client.subscribe('/notificacion/' + this.cliente.codCli, e => {

        this.transacciones=[]
        console.log('entro adentro transfer Component')
        console.log(e)
        let mensaje = JSON.parse(e.body);

        mensaje.forEach(e => {
          console.log(e.codCuenta)
          if (e.codCuenta == this.cliente.nomCli) {
            this.mensaje = "enviaste dinero ha :" + e.codDestinoCuenta
            this.movimientoColor = false
          } else {
            this.mensaje = "recibiste dinero de :" + e.codCuenta
            this.movimientoColor = true
          }
          this.transaccion = {
            cod_tran: e.cod_tran,
            monto: e.monto,
            cod_destino_cuenta: e.cod_destino_cuenta,
            descripcion: e.descripcion,
            fecha: e.fecha,
            hora: e.hora,
            codCuenta: e.codCuenta,
            tipoTransaccion: e.tipoTransaccion,
            mensaje: this.mensaje,
            movimientoColor: this.movimientoColor
          }
          this.transacciones.push(this.transaccion)
        });

        console.log(mensaje);
       
      });
      this.client.publish({ destination: '/app/prueba/'+this.cliente.codCli });
      /*this.client.subscribe('/chat/escribiendo', e => {
        this.escribiendo = e.body;
        setTimeout(() => this.escribiendo = '', 3000)
  
      });*/
      this.client.onDisconnect = (frame) => {
        console.log('Desconectados: ' + !this.client.connected + ' : ' + frame);
        this.conectado = false;

      }

    }
  }
}
