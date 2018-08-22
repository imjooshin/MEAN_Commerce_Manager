import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private product:any;

  constructor(
      private ps:ProductService,
      private route: ActivatedRoute,
      private router: Router){}

  ngOnInit(){
      this.route.params.subscribe(params=>{
          this.ps.findById(params.id,(data)=>{
              console.log(data);
              this.product=data;
          });
      });
  }

  delete(product){
    console.log(product)
    this.ps.destroy(product, data=>{
        return this.router.navigateByUrl("/products");
    })
}
}
