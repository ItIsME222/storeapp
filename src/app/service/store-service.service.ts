import { Injectable } from '@angular/core';
import { Product, ProductDB } from './../models/products.model';
//import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class StoreServiceService
{
  private host = "http://localhost:5000";
  constructor(private http: HttpClient)
  {
  }

  public getProducts(callback: (products: Product[]) => void): void
  {
    this.http.get<Product[]>(this.host + "/product").subscribe((products: any) =>{
      const prod = products.products as Product[];
      callback(prod);
    })
  }

public createProducts(product: ProductDB, callback: () => void): void
{
  this.http.post<ProductDB>(this.host + "/createProducts", product)
      .subscribe((data) =>
      {
          callback();
      });
}
public deleteProduct(id: number, callback: () => void): void
{
  this.http.delete(this.host + "/deleteProduct/" + id)
      .subscribe((data) =>
      {
          callback();
      });
}
}
