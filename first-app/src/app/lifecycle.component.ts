import { Component, Input, ViewChild, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph')
  boundParagraph: HTMLElement;

  constructor() { }

  ngOnChanges() {
    this.log(`ngOnChanges`)
  }

  ngDoCheck() {
    this.log(`ngDoCheck`)
  }

  ngOnInit() {
    this.log(`ngOnInit`)
  }

  ngOncheck() {
    this.log(`ngOncheck`)
  }

  ngAfterContentInit() {
    this.log(`ngAfterContentInit`)
  }

  ngAfterContentChecked() {
    this.log(`ngAfterContentChecked`)
  }

  ngAfterViewInit() {
    this.log(`ngAfterViewInit`);
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked() {
    this.log(`ngAfterViewChecked`)
  }

  ngOnDestroy() {
    this.log(`ngOnDestroy`)
  }

  private log(hook: string) {
    console.log(hook);
  }
}
