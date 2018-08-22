import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { EditComponent } from "./edit/edit.component";


const routes: Routes = [

  {
    path:"products/new",
    component: NewProductComponent
  },

  {
    path:"products",
    component: ProductsComponent
  },  

  {
    path:"products/:id",
    component: ProductComponent
  },  

  {
    path:"products/edit/:id",
    component: EditComponent
  },  

  {
    path:"**",
    component: ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
