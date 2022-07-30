export interface CreateUser{
    firstName :string,
    lastName:string,
    email:string,
    password:string,
    whishList:string,
    creditCard:string,
    isActive:boolean,
    OnlinePayment:string,
    Phone:number,
    token:string
}
export class User  { 
    constructor( 
     public firstName :string,
     public lastName:string,
     public email:string,
     public password:string,
     public whishList:string,
     public  creditCard:string,
     public  isActive:boolean,
     public   OnlinePayment:string,
     public  Phone:number)
     {
        this.firstName =firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.whishList = whishList;
        this.creditCard = creditCard;
        this.isActive = isActive;
        this.OnlinePayment = OnlinePayment;
        this.Phone = Phone;
        
     }
}