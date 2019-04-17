import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template : `<li> {{names}} </li>`
})
export class DumbComponent implements OnInit {
  @Input() names;
  constructor() { }

  ngOnInit() {
  }

}