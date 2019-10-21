import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services';
import { Product } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products:Observable<Product[]>;
  constructor(private productSvc:ProductService) {
    this.products = this.productSvc.getProducts();
   }
  ngOnInit() {
    console.log("OnInit executed");
  }
}
