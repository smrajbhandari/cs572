import { Directive, HostListener, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  @HostBinding("style.fontSize") fontSize = "18px";

  constructor(private element:ElementRef, private r: Renderer2) { 
  }
  @HostListener('dblclick') dblclick(){
    this.fontSize = parseInt(this.fontSize) + 2  + "px";
    this.r.setStyle(this.element.nativeElement,"font-size", this.fontSize);
  }

}
