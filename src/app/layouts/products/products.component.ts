import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../Services/api-products.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { CatagoriesComponent } from "../catagories/catagories.component";
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CartService } from '../../Services/cart.service';
import { Product, ProductResponse } from '../../Model/products.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeComponent, CatagoriesComponent, RouterLink, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   public productList:Product[]=[];

   constructor(private apiProds:ApiProductsService, private router:Router, private cart:CartService){}
  ngOnInit(): void {

    this.allProductsList()
    
  }

  allProductsList(){
    this.apiProds.getAllProduct().subscribe({next:(res)=>{
      this.productList=res.products
      console.log(res);

    },error:(err)=>{
      console.log(err);
    }

  })}

  onViewDetails(product: any) {
    this.router.navigate(['/product', product.id]);
  }


  addToCart(product:any){
    this.cart.addToCart(product)
    console.log(product);
    alert(`product added successfully`)
  }




}
