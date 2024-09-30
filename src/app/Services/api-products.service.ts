import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductResponse } from '../Model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  allProdUrl="https://dummyjson.com/products";

  searchProductUrl="https://dummyjson.com/products/search"
  constructor(private httpClient:HttpClient) {}
  getAllProduct(){
    return this.httpClient.get<ProductResponse>(this.allProdUrl).pipe(map((res:any)=>{
      return res;
    }))
  }


getSingleProduct(id:string):Observable<any>{
  return this.httpClient.get(`${this.allProdUrl}/${id}`)
}

updateProduct(id:string,uData:any):Observable<any>{
  return this.httpClient.put(`${this.allProdUrl}/${id}`,uData)
}

deleteProduct(id:string):Observable<any>{
  return this.httpClient.delete(`${this.allProdUrl}/${id}`)
}


searrchProduct(query:string):Observable<any>{
  return this.httpClient.get(`${this.searchProductUrl}?q=${query}`)

}

}
