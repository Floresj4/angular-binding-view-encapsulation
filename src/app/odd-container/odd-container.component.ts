import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-container-component',
  templateUrl: './odd-container.component.html',
  styleUrls: ['./odd-container.component.css']
})
export class OddContainerComponent {

  @Input('data-value') data: { count: number };
  
  constructor() {
  
  }
  
  ngOnInit() {
  
  }
}