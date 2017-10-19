import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  count: number = 0;
  intervalId: number;
  
  constructor() { }

  ngOnInit() {
  }
  
  onStartCounter() {
    //set interval and capture id to clear later
    this.intervalId = setInterval(() => {
	  this.count++;
	  console.log(this.count);
	}, 1000);
  }
  
  onStopCounter() {
    clearInterval(this.intervalId);
  }
}
