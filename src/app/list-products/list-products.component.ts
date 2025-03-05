import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreServiceService } from '../service/store-service.service';
import { Product } from '../models/products.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: false,
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent
{
  @Input() product: any;
  Id!: Number;
  constructor(private route: ActivatedRoute, private service: StoreServiceService) {}
  selectedProduct: Product | null = null;
  products: Product[] = [];


  ngOnInit()
  {
    this.service.getProducts((product:Product[]) =>
    {
      console.log(product);
      console.log(this.products);
      this.products = product;
    })
  }
  onSelectedProduct(product: Product)
  {
    this.selectedProduct = product;
  }

  deleteProduct(productId: number): void
  {
    this.service.deleteProduct(productId
    , () => {
      console.log("deleted");
    });
  }
}
