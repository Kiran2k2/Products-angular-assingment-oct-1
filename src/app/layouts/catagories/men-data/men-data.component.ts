import { Product, ProductResponse } from './../../../Model/products.model';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CatagoriesComponent } from '../catagories.component';
import { CatagoryService } from '../../../Services/catagory.service';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
// import { Product } from '../../../Model/products.model';

@Component({
  selector: 'app-men-data',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './men-data.component.html',
  styleUrl: './men-data.component.css'
})
export class MenDataComponent implements OnInit {


catagory:string | null=null

product:Product[]=[]
constructor(private catService:CatagoryService,
  private routee:ActivatedRoute
){

}

ngOnInit() {
  // console.log("hello");
  
  this.routee.params.subscribe({next:params => {
      this.getCata(params['catagory']);
      }
  });
 
  }


  getCata(cata:any){
    
    this.catService.getCatagoryProd(cata).pipe(catchError(error=>{
      console.log(error);
      return []
    })).subscribe(res=>{
      this.product=res.products
      console.log(this.product);
    })
  

    // this.catService.getCatagoryProd(cata).subscribe({next:(res)=>{
    //   console.log(res);
    //   this.product=res
    // },error:(err)=>{
    //   console.log(err)
    // }})
}











}


