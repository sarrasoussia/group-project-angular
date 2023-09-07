import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

recipies = [
  {name: 'pasta', describ:'ena makrouna bnina', imag:'assets/img/pasta.jpeg' , },
  {name: 'pizza', describ:'ena pizza bnina', imag:'assets/img/pizza.jpeg'},
  {name: 'chakchouka', describ:'ena chakchouka bnina', imag:'assets/img/chakchouka.png'}

];
  constructor() { }

  ngOnInit() {
  }

}
