import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services';
import { Product } from 'src/app/models';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
product:Product;
  constructor(private route:ActivatedRoute, private productSvc:ProductService ){ 
   /* let id = this.route.snapshot.params["id"];
    this.productSvc.getProductById(id)
    .subscribe(
      res=>this.product= res, // success callback // taking data in product variable once data received
      err=>console.log(err)   // error callback
    );*/
    // this is taken care by (data loading) resolver 
    this.product = this.route.snapshot.data["item"];
  }

  ngOnInit() {
  }

}
