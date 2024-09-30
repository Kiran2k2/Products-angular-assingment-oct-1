import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './layouts/products/products.component';
// import { LayoutsComponent } from './layouts/layouts.component';
import { ProductComponent } from './layouts/product/product.component';
import { CartComponent } from './layouts/cart/cart.component';
import { CatagoriesComponent } from './layouts/catagories/catagories.component';
import { MenDataComponent } from './layouts/catagories/men-data/men-data.component';
import { ElectronicsComponent } from './layouts/catagories/electronics/electronics.component';
import { UserListComponent } from './layouts/user-list/user-list.component';
import { SingleUserComponent } from './layouts/single-user/single-user.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AddUserComponent } from './layouts/add-user/add-user.component';
import { SearchProductComponent } from './layouts/search-product/search-product.component';


export const routes: Routes = [{
    path:'',
    redirectTo:"login",
    pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
{    path:'resister',component:SignupComponent},
 {
    path:'',
    component:ProductsComponent,
    
 },{
    path:'products',
    component:ProductsComponent,
 },
 {
    path:'product/:id',
    component:ProductComponent
 },
 {
   path:'cartList',
   component:CartComponent
 },{
   path:"productss/:catagory",
   component:MenDataComponent
 },{
  path:'productts/search',component:SearchProductComponent
 },
{
   path:'users-list',
   component:UserListComponent
},
{
   path:'user/:id',
   component:SingleUserComponent

},
{
  path:'userss/new-user',
  component:AddUserComponent

},
{
   path:'**',
   component:ElectronicsComponent
}

];
