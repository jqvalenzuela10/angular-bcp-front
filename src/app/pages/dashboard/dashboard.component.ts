import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--nav-width','56px');
  }

  modificarWidth(flag:boolean) {    
    if(flag) {
      document.documentElement.style.setProperty('--nav-width','216px');
    } else {
      document.documentElement.style.setProperty('--nav-width','56px');
    }
  }

}
