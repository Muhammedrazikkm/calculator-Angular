import { Component } from '@angular/core';

@Component({
  selector: 'app-tempconveter',
  templateUrl: './tempconveter.component.html',
  styleUrls: ['./tempconveter.component.css']
})
export class TempconveterComponent {
  result:number=0
  num1:number=0
 
  performDegToFa(){
    this.result=((this.num1*(9/5))+32)
  }
  performFaToDeg(){
    this.result=((this.num1-32)*5/9)
  }

}
