import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '../../node_modules/@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private router:Router){}

  ngOnInit(){
      return this.router.navigateByUrl("/products");
  }
}