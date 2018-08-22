import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector: 'EditComponent',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
    private product:any;

    constructor(
        private ps:ProductService, 
        private route:ActivatedRoute, 
        private router:Router){}

    ngOnInit(){
        this.route.params.subscribe(params=>{
            this.ps.findById(params.id, (data)=>{
                console.log(data)
                this.product=data
            });
        });
    }

    update(){
      this.ps.update(this.product,(data)=>{
          this.product = data;
          return this.router.navigateByUrl("/products");
      });
    }

    reset(){
      this.route.params.subscribe(params=>{
        this.ps.findById(params.id, (data)=>{
            console.log(data)
            this.product=data
        });
    });

    } 
}