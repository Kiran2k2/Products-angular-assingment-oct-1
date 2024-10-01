import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../Services/api-products.service';
import { Product } from '../../Model/products.model';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-product-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './product-ag-grid.component.html',
  styleUrl: './product-ag-grid.component.css'
})
export class ProductAgGridComponent implements OnInit {
productList:Product[]=[]
constructor(private apiProducts: ApiProductsService){}

colDefs: ColDef[] = [

  {field:'id',headerName:"Product-id"},
  { field: "title",headerName:'User-name',filter:true },
  {field:"thumbnail"},
  { field: "category" },
  { field: "price" },
  { field: "rating" },
  
  


 
];
defaultColDef={
  sortable:true,
  flex:1,
  // minWidth:10
}











ngOnInit(): void {
  this.ongetProdct()
}
ongetProdct(){
  this.apiProducts.getAllProduct().subscribe({next:(res)=>{

   this.productList=res.products;
    console.log(res.products);


  },error:(err)=>{
    console.log(err);
  }



})
}

}
