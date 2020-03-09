import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardList = Array.from({length: 18}, (_, i) => Math.floor(Math.random() * 5) + 1);

  constructor() {}

  ngOnInit(): void {
  }

}
