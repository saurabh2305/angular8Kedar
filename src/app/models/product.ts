export interface Product {
    id?:number;
    name:string;
    price:number;
    quantity:number;
    recordLevel:number;
    taxRate:number;
    manufacturingDate:Date;
    imageUrl:string;
    brand:string;
    categoryId:number;
}
