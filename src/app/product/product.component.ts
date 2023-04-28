import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
items:any
constructor(private service:ProductsService){

}
ngOnInit() {
  this.service.getAllProduct().then(res=>res.json()).then(data=>this.items=data)
  
}
}
