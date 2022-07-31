export class Cart {
    constructor(
        public items:string,
        public userId:string,
        public coupon:string,
        public totalPrice:number

        ){
            this.items=items,
            this.userId=userId,
            this.coupon=coupon,
            this.totalPrice=totalPrice
        
    }
}
