import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularclass';
  firstCounter: number = 1;
  secondCounter: number = 1;
  thridCounter: number = 1;

  counterConfig(childValue: any) {
    const finalValue = 4;
    switch(childValue) { 
      case 'firstChild': { 
         this.firstCounter += 1;
         if(this.firstCounter === finalValue){
          this.firstCounter = 1;
         }
         break; 
      } 
      case 'secondChild': { 
        this.secondCounter += 1;
        if(this.secondCounter === finalValue){
          this.secondCounter = 1;
         }
         break; 
      }
      case 'thirdChild': {
        this.thridCounter += 1; 
        if(this.thridCounter  === finalValue){
          this.thridCounter = 1;
         }
         break; 
      } 
      default: { 
        this.firstCounter = 1;
        this.secondCounter = 1;
        this.thridCounter = 1;
         break; 
      } 
   }
  }
}
