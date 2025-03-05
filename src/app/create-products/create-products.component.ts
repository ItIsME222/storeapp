import { Component, OnInit } from '@angular/core';
import { Product, ProductDB } from './../models/products.model'
import { StoreServiceService } from '../service/store-service.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-products',
  standalone: false,
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent implements OnInit
{
  productInfo!: FormGroup;

  wasSubmitted = false;

  constructor(private service: StoreServiceService) { }
  ngOnInit()
  {
    this.productInfo = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      price: new FormControl(0),
      });
  }
  public onSubmit()
  {
    console.log("made it in");
    const data = this.productInfo.value;

    let product:ProductDB = {
      productName: data.name!,
      productPrice: data.price!,
      productCategory: data.category!,
    }

    this.service.createProducts(product, () => {
      this.wasSubmitted = true;
    });
  }
};
