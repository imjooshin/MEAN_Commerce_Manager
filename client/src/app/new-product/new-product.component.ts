import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '../../../node_modules/@angular/router';

@Component({
    selector: 'NewProductComponent',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    private product:any;

    ngOnInit(){}

    constructor(private ps:ProductService, private router:Router){
        this.product = {
            name: "",
            quantity: "",
            price: "",
            errors:{}
        };
    }

    create(){
        this.ps.create(this.product,(data)=>{
            if(data.errors){
                this.product.errors = data.errors;
            }else{
                this.product = {
                    name: "",
                    quantity: "",
                    price: "",
                    errors:{}
                };
                return this.router.navigateByUrl("/products");
            }
        });
        
    }

    reset(){
      this.product = {
          name: "",
          quantity: "",
          price: "",
          errors:{}
      };
    }

}
