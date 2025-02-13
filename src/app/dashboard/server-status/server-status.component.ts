import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect(() => {
      console.log(this.currentStatus());
    })
  }


  ngOnInit(){
    const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus.set('online');
      } else if (rnd < 0.9) { 
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);


    // it's an alternative to use ngOnDestroy
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

}
