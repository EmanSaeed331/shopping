export interface CouponsType {
     ownerStore:string,
     codeNumber:number,
     quantity:number,
     valueOfDiscount:number,
     cartId:number
}

export class Couponse {
    constructor(
        public ownerStore:string,
        public codeNumber:number,
        public quantity:number,
        public valueOfDiscount:number,
        public cartId:number
    ){
        this.ownerStore=ownerStore;
        this.codeNumber= codeNumber;
        this.quantity=quantity;
        this.valueOfDiscount=valueOfDiscount;
        this.cartId=cartId;
    }
}