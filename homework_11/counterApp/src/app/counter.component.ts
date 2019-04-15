import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="update($event)">-</button>  {{counterValue}}  <button (click)="update($event)">+</button>
  `
})
export class CounterComponent implements OnInit{
  @Input() counterValue=0;
  @Input() counter:number;
  @Input() ComponentCounterValue:number;
  @Output() counterChange:EventEmitter<number>;
  constructor(){
    this.counterChange = new EventEmitter();
  }
  ngOnInit() {
    this.counterValue=this.counter;
  }

  update(e){
    let value=e.target.innerHTML;
    if(value==='-')
      this.counterValue--;
    else
      this.counterValue++;

    this.counterChange.emit(this.counterValue);
  }


}
