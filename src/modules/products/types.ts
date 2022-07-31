export interface ProductsType {
     productName:string,
     productDescription:string,
     price:number, 
     discount:number, 
     storeId:string,
     image:string , 
     category:string,
     quantity:number
}


export class Products 
{
    constructor
    (
        public productName:string,
        public productDescription:string,
        public price:number, 
        public discount:number, 
        public storeId:string,
        public image:string , 
        public category:string,
        public quantity:number)
        {
            this.productName=productName;
            this.productDescription=productDescription,
            this.price=price,
            this.discount=discount,
            this.discount=discount,
            this.storeId=storeId,
            this.image=image,
            this.category=category,
            this.quantity=quantity
        }
}