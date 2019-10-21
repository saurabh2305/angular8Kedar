import { Directive, ElementRef, Renderer2, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
 @Input("color") colorName:string;
  constructor(private el:ElementRef,private renderer:Renderer2) { 
     this.renderer.setStyle(this.el.nativeElement,"color","red");
     console.log("From constructor" + this.colorName);
  }
  ngOnInit()
  {
    console.log("From onInit" +this.colorName);
    this.renderer.setStyle(this.el.nativeElement,"color",this.colorName);
  }

  @HostListener("mouseenter")
  applyColor(){
    this.renderer.setStyle(this.el.nativeElement,"color",this.colorName);
  }

  @HostListener("mouseleave")
  removeColor(){
    this.renderer.removeStyle(this.el.nativeElement,"color");
  }
}
