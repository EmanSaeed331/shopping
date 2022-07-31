export class Order {
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

    ){}
}
