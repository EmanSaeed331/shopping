export class Store  { 
    constructor( 
     public storeName :string,
     public about:string,
     public rating:string,
     public category:string,
     public admins:string)
     {
     this.storeName= storeName;
     this.about=about;
     this.rating=rating;
     this.category=category;
     this.admins=admins;
        
     }
    }