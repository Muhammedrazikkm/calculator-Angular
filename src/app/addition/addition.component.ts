import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  result:number=0
   performAddition(tbox1:any,tbox2:any){
    let n1=+tbox1.value
    let n2=+tbox2.value
    this.result=n1+n2
   
    
    
  }

}
