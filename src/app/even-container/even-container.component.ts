import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-container-component',
  templateUrl: './even-container.component.html',
  styleUrls: ['./even-container.component.css']
})
export class EvenContainerComponent {

  @Input('data-value') data:number[] = [];
  
  ngOnInit() {
  
  }
}