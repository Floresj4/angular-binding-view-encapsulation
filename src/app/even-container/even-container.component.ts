import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-even-container-component',
  templateUrl: './even-container.component.html',
  styleUrls: ['./even-container.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EvenContainerComponent {

  @Input('data-value') data: { count: number };
  
  constructor() {
  
  }

  ngOnInit() {
  
  }
}