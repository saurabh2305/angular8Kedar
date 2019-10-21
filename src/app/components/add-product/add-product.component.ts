import { Component, OnInit } from '@angular/core';
import { Product, Category } from 'src/app/models';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product:Product;
 categories:Observable<Category[]>;
 formStatus:any={
   submitted:false,
   valid:true
 }
 navigationEnabled:boolean=false;
  constructor(private productSvc:ProductService,private router:Router) {
   this.categories = this.productSvc.getCategories();
    this.product = {
      name:"",
      brand:"",
      price:undefined,
      quantity:undefined,
      manufacturingDate:undefined,
      recordLevel:undefined,
      taxRate:undefined,
      categoryId:undefined,
      imageUrl:""
    }
   }

  ngOnInit() {
  }
  save(form:any){
    this.formStatus.submitted=true;
    if(form.valid){
      this.productSvc.addProduct(form.value)
      .subscribe(
          res=>{
            this.navigationEnabled =true;
            alert("no.1valid");
            this.router.navigate(['/'])
        },
          err=>{ this.formStatus.valid=false}
      )
      alert("valid");
    }
    else{
      this.formStatus.valid=false;
    }
  }

}
