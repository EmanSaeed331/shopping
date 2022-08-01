export interface CartsType {
     items:string,
     userId:string,
     coupon:string,
     totalPrice:number
}

export class Carts {
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
