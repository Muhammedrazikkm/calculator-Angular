import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  result:number=0
  performSub(tbox1:any,tbox2:any){
    this.result=(+tbox1.value)-(+tbox2.value)
    
    
  }


}
