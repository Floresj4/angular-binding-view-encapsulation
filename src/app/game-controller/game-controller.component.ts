import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  count: number = 0;
  intervalId: number;
  
  @Output() counterIncremented = new EventEmitter<{count: number}>();
  
  constructor() { }

  isRunning() {
    return this.intervalId !== null;
  }

  ngOnInit() {
  }
  
  onStartCounter() {
    //set interval which emits the incremented count
    this.intervalId = setInterval(() => {
	  console.log(++this.count);
	  this.counterIncremented.emit({count: this.count});
	}, 1000);
  }
  
  onStopCounter() {
    clearInterval(this.intervalId);
  }
}
