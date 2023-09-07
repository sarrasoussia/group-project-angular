import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recette = [
    {name: 'pasta', describ:'ena makrouna bnina', imag:'assets/img/pasta.jpeg' , },
    {name: 'pizza', describ:'ena pizza bnina', imag:'assets/img/pizza.jpeg'},
    {name: 'chakchouka', describ:'ena chakchouka bnina', imag:'assets/img/chakchouka.png'}
  
  ];

  constructor() { }

  ngOnInit() {
  }

}
