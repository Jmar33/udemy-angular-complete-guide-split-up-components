import { AfterContentInit, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements OnInit, AfterContentInit {
  @HostBinding('class') className = 'control';
  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  // private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  label = input.required<string>();
  private el = inject(ElementRef);

  ngOnInit(): void {
    console.log('INIT');
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
    console.log(this.control)
  }


  onClick(){
    console.log('Clicked!')
    console.log(this.el);
    // console.log(this.control());
    console.log(this.control);
  }

}
