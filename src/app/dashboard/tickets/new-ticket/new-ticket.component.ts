import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('form')form?: ElementRef<HTMLFormElement>
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('INIT')
    console.log(this.form);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEWINIT');
    console.log(this.form)
  }

  onSubmit(title:string, text:string){
    console.log(title);
    console.log(text);

    this.form?.nativeElement.reset();
    // this.form()?.nativeElement.reset();
  }

}
