import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css'],
})
export class CalcularMediaComponent implements OnInit {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  media: number;

  constructor() {}

  ngOnInit() {}

  calcularmedia() {
    this.n1;
    this.n2;
    this.n3;
    this.n4;
    this.media = (+this.n1 + +this.n2 + +this.n3 + +this.n4) / 4;
    console.log(this.media);
  }
}
