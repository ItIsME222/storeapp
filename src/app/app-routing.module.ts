import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { DisplayProductsComponent } from './display-products/display-products.component';

const routes: Routes = [
  { path: 'createProduct', component: CreateProductsComponent },

  { path: 'listProduct', component: ListProductsComponent },

  { path: 'updateProduct', component: EditProductsComponent },

  { path: 'displayProduct', component: DisplayProductsComponent},

  { path: 'deleteProduct/id', component: DeleteProductsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
