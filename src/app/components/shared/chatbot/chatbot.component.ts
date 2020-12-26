import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../services/auth.service';
import { NotificacionService } from '../../../services/notificacion.service';
import { Notificacion } from '../../../models/notificacion.model';




@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {


  mostrar: boolean = false;
  descripcion: String = 'Descripccion de notificacion pero tiene que verse un poco pequeña y con sus respectivos puntos suspensivos si es muy larga.';
  listaNotificacion: Array<Notificacion> = []

  constructor(private notificacionesService: NotificacionService) {

    notificacionesService.obtenerNotificacion()
      .subscribe(
        (data: Array<Notificacion>) => {
          this.listaNotificacion = data;
          console.log(this.listaNotificacion);

        },
        (error) => {
          console.log(error);

        }
      );
  }

  ngOnInit(): void {
  }

  mostrarNotificacion() {
    document.querySelector('.notificaciones').classList.toggle('mostrarN');
  }




}
