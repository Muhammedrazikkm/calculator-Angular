import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  result:number=0
  num1:number=0
  performFact(){
    let fact:number=1
    for(let i=1;i<=this.num1;i++){
      fact=fact*i
    }
    this.result=fact
    
    
  }

}
