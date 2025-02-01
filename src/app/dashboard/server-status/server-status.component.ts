import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  constructor(){ }


  ngOnInit(){
    const interval = setInterval(() => {
      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus = 'online'
      } else if (rnd < 0.9) { 
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
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
