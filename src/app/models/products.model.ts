export interface Product
{
  Id?: number;
  Name: string;
  Price?: number;
  Category: string;
}

export interface ProductDB {
  productId?: number;
  productName?: string;
  productPrice?: number;
  productCategory?: string;
}
