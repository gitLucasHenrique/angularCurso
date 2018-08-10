import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input() appTextColor : string;
  @Input() textAlign : string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if(this.appTextColor){
      this.el.nativeElement.style.color = this.appTextColor;
    }
    if(this.textAlign){
      this.el.nativeElement.style.textAlign = this.textAlign;
    }
  }
}
