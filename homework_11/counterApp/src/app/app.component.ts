import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter [counter]="counterNo" [ComponentCounterValue]="ComponentCounterValue" (counterChange)="printChange($event)"></app-counter>
  Component Counter Value = {{ComponentCounterValue}}
  `
})
export class AppComponent {
  title = 'counterApp';
  counterNo=5;
  ComponentCounterValue=this.counterNo;
  printChange(e){
    this.ComponentCounterValue=e;
  }
}
