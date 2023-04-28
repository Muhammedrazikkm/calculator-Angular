import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  result:number=0
  height:number=0
  weight:number=0
  performBmi(){
    this.result=(this.weight/(this.height/100)**2)
  }

}
