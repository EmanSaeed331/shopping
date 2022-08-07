export interface OrdersType {

     userId:object,
     price:number,
     items:[{
        product: string
        price: number,
        quantity: number,
        total: number
    }],
     totalPrice:number,
     status:string , 
     creditCard:{
         cardType:string,
         cardNumber:string
         cardDescription:string
    }, 
     deliveryAgentId:string,
     shippingAddress:{
        city:string,
        street:string,
    } 
 }


export class Orders {
    constructor(
        public userId:string,
        public price:number,
        public items:[{
            product: string
            price: number,
            quantity: number,
            total: number
        }],
        public totalPrice:number,
        public status:string , 
        public creditCard:{
             cardType:string,
             cardNumber:string
             cardDescription:string
        }, 
        public deliveryAgentId:string,
        public shippingAddress:{
            city:string,
            street:string,
        } 

    ){
        this.userId=userId;
        this.price=price;
        this.items=items;
        this.totalPrice=totalPrice;
        this.status=status;
        this.creditCard=creditCard;
        this.deliveryAgentId=deliveryAgentId;
        this.shippingAddress=shippingAddress;
    }
}
