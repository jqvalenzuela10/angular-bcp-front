import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card-bcp',
  templateUrl: './card-bcp.component.html',
  styleUrls: ['./card-bcp.component.css']
})
export class CardBCPComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle="#006bb3";
    this.ctx.fillRect(0, 0, 500, 150);
    this.ctx.strokeStyle = '#005392';
    
    this.ctx.fill();

    var grd = this.ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0,"#004b85");
    grd.addColorStop(1,"#1976be");

    this.ctx.fillStyle = grd;
    this.ctx.beginPath();
    this.ctx.moveTo(200, 150);
    this.ctx.quadraticCurveTo(300,30,500,20);
    this.ctx.lineTo(500,150);
    this.ctx.closePath()
    this.ctx.strokeStyle = '#005392';
    this.ctx.fill()


    var grd = this.ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0,"#004b85");
    grd.addColorStop(1,"#1976be");

    this.ctx.fillStyle = grd;
    this.ctx.beginPath();
    this.ctx.moveTo(200, 0);
    this.ctx.quadraticCurveTo(350,0,500,150);
    this.ctx.lineTo(500,0);
    this.ctx.closePath(); 
    this.ctx.strokeStyle = '#005392';
    this.ctx.fill()

  


    this.ctx.stroke();
  
  }

}
