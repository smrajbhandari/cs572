import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input() appIsVisible:boolean;
  constructor(private element:ElementRef, private r: Renderer2) { 
  }
  ngOnInit(){
    console.log("Is visible");
    console.log(this.appIsVisible);
    if(!this.appIsVisible){
        this.r.setStyle(this.element.nativeElement,"display","none");
    }
  }
}
