import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
  heroeBorrado: string = '' ;
  heroes:string []= [
    'Iron Man', 'Thor', 'Hulk', 'Dr. Strange'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
