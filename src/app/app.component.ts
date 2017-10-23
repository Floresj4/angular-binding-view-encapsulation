import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd: number[] = [];
  even: number[] = [];

  onIncrement(event) {
	event.count % 2 == 0
	  ? this.even.push(event.count)
	    : this.odd.push(event.count);
  }
}
