import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  private products:any;

  constructor(private ps:ProductService, private router:Router) { }

  ngOnInit() {
      this.getProduct();
  }

  getProduct(){
      this.ps.all(data=>this.products=data)
  }


}
