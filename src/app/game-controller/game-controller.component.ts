import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  count: number;
  intervalId: number;

  @Output() counterIncremented = new EventEmitter<{count: number}>();

  constructor() { }

  isRunning() {
    return this.intervalId !== undefined;
  }

  ngOnInit() {
    this.count = 0;
  }

  onStartCounter() {
    // set interval which emits the incremented count
    this.intervalId = setInterval(() => {

    this.counterIncremented.emit(
      {count: this.count});
    }, 1000);
  }

  onStopCounter() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
