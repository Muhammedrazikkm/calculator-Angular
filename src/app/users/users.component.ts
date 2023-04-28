import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:any
  constructor(private service:ProductsService){

  }
ngOnInit(){
  this.service.getAllUsers().then(res=>res.json()).then(data=>this.users=data)
}

}
