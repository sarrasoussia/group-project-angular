import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {
  @Input() recipie: any;
  constructor() { }

  ngOnInit() {
  }

}
