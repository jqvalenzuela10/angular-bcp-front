import { Injectable } from '@angular/core';
import { Client } from "@stomp/stompjs";
import * as SockJS from "sockjs-client"
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private client: Client;
  conectado: boolean = false;
  constructor() { }
  contador:number=0
  conectar(codCli:number) {
    this.client = new Client();
    console.log('entro para activar')
  
 
    this.client.activate();
    this.client.webSocketFactory = () => {
      console.log('entro web socket factory')
      return new SockJS("http://localhost:8080/notificacion-websocket");
    }

    this.onConnect(codCli)
    

  }
  desconectar(): void {
    this.client.deactivate();
  }

  recibirDatos(id:number, receptor:number){
    console.log('id')
    console.log(id)
    console.log('receptor')
    console.log(receptor)
    this.client.publish({ destination: '/app/prueba/'+id+"/"+receptor });
    this.client.publish({ destination: '/app/prueba/'+id });
  }


   onConnect(codCli:number){
    this.client.onConnect = (frame) => {
      console.log('entro a cliente')
      console.log('Conectados: ' + this.client.connected + ' : ' + frame);
      this.conectado = true;

      this.client.subscribe('/notificacion/'+codCli, e => {


        console.log('entro aqui')
        console.log(e)
        let mensaje = JSON.parse(e.body);
        console.log(mensaje);

      });

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
