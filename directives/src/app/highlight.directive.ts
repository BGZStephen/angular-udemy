import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = this.highlightColor
  };

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = this.defaultColor
  };

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  }
  @Input() defaultColor = "White"
  @Input("dirHighlight") highlightColor = "#369"

  private backgroundColor: string;;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
