import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from "./../../../services/socket.service";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  expandNav: boolean = false;
  
  @Output() navFlag:EventEmitter<boolean>;

  userName: string = "Gonzalo Roa Castillo";

  userEmail: string = "roasgo@hotmail.com";

  constructor(private router: Router,private socketService:SocketService) { 
    this.navFlag = new EventEmitter();
  }

  ngOnInit(): void {
    //console.log(document.querySelector('#nav-toggle'));
  }
  cerrarSocket(){
    this.socketService.desconectar();
  }

  mostrarMenu = () => {
    const toggle = document.querySelector('#nav-toggle');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body');
    
    toggle.classList.toggle('rotate');
    nav.parentElement.classList.toggle('show');
    
    if(nav.parentElement.classList.contains('show')) {
      this.expandNav = true;
    } else {
      this.expandNav = false;
    }

    body.classList.toggle('expander');

    this.navFlag.emit( this.expandNav );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
