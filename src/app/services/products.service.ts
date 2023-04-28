import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getAllProduct(){
 
    return fetch("https://fakestoreapi.com/products/")
  }
  getAllUsers(){
    
    return fetch("https://fakestoreapi.com/users/")
  }
}
