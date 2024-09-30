export interface ProductResponse{
 limit:number,
 skip:number,
 products:Product[]
 total:number

}
export interface Product{
 id:number,
 title:string,
 price:number,
 rating:number,
 images:string[]



}