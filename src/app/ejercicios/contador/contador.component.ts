import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  numero: number = 0;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  acumular( valor: number ) {
    this.numero += valor;
  }

}
