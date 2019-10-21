import { Injectable } from '@angular/core';
import { Category, Product } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 readonly API_URL="http://localhost:3000";
  constructor( private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return (this.http.get<Product[]>(`${this.API_URL}/products`));
  }

  getProductById(id:number):Observable<Product>{
    //let item = this.products.find(s=>s.id==id);
   // return of(item) ;
   return this.http.get<Product>(`${this.API_URL}/products/${id}`);
  }

  addProduct(product:Product):Observable<Product>{
    //let lastId= this.products[this.products.length-1].id;
    //product.id = lastId;+1;
    //this.products.push(product);
    //return of(product) ;
    return this.http.post<Product>(`${this.API_URL}/products`,product);
  }

  removeProduct(id:number):Observable<any>{
    //let itemIndex =  this.products.findIndex(s=>s.id==id);
    //this.products.splice(itemIndex,1);
    //return undefined;
    return this.http.delete<Product>(`${this.API_URL}/products/${id}`);
  }

  getCategories():Observable<Category[]>{
    //return of(this.categories);
    return this.http.get<Category[]>(`${this.API_URL}/categories`);
  }
}
