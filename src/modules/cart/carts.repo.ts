
import { CartsType,Carts } from "./types";
import cartsModel from "./carts.model";
import { crud } from "../../CRUD/crud";
import productModel from "../products/products.model";
import { ProductsType } from "../products/types";
import couponseModel from "../coupons/coupons.model";

// Calculate total price 

const calcTotalCartPrice = (cart:CartsType) =>{
  let  totalPrice = 0 ; 

  cart.items.forEach((item:any)=>{
    totalPrice +=item.quantity * item.price;
  });
  cart.totalPrice = totalPrice ;
  cart.totalPriceAfterDiscount = totalPrice;
  
}


const addProductToCart  = async(productId:any , userId:string) =>{
  const product = await productModel.findById(productId);
 
  // Get Cart for Logged User 
  let cart:any =await cartsModel.findOne({userId});
  if(!cart) {
    // Create Cart for logged user with product 
    cart = await cartsModel.create({
      userId,
      items:[{products:productId ,price:product?.price}],
    });
  }
  else {
    let productIndex:any = cart.items;
    productIndex.findIndex((item:any) =>item.productId === product);

      if(productIndex> -1 ) {
        const cartItem = cart.items[productIndex];
        cartItem.quantity!  += 1;
        cart.items[productIndex] = cartItem 
      }
      else {
        // product not exist in cart,  push product to cartItems array
        cart.items.push({  price:product?.price , products:productId });
      }
  }
    // Calculate total cart price
    calcTotalCartPrice(cart);
    await cart.save();

    return cart;
}


const createCarts = async(data:CartsType)=>{
  const Carts =  await crud.create({data},cartsModel);
  return Carts;
}
const getCartsById = async (id:string)=>{

  console.log(` Carts id is  ${ id }`)
  const carts = await  crud.get({ id} , cartsModel);
   
  return carts;
}

const updating = async(id:string)=>{
    const carts =await crud.update(id , Carts , cartsModel) ; 
    if (!carts) { 
     console.log('Cart Not found')
     return ' Cart not found '
    }
  
    return carts; }
// remove specfic items from carts 
const removeItemsFromCarts = async (userId:any , itemId:any) =>{
  const cart = await crud.update(userId , cartsModel , {$pull:{itemId}})
  calcTotalCartPrice(cart);
  cart.save();
  return cart ; 
}

// delete cart 
const deleting = async(id:string)=>{

  const carts =await crud.remove(id , cartsModel) ;
  if ( !carts) { 
    console.log('Cart not deleted')
  }
  console.log('Cart deleted')
 
  return carts;
}

// Apply coupon 
const appliedCoupon = async(userId:any)=>{
  const coupon = await crud.get(couponseModel , userId);
  if (!coupon)
  {
    return ' Coupon is not valid or expired '
  }
  //   Get logged user cart to get total cart price
  const cart  = await await crud.get(cartsModel , userId);
  const totalPrice = cart.totalPrice;
  
  //  Calculate price after applying coupon 

  const totalPriceAfterDiscount = (totalPrice - (totalPrice * coupon.discount) / 100 ).toFixed(2); 
  cart.totalPriceAfterDiscount = totalPriceAfterDiscount ;
  await cart.save();
  return cart ; 

} 

export const cartsRepo = { 
  
  createCarts,
  getCartsById,
  updating,
  deleting,
  addProductToCart,
  removeItemsFromCarts,
  appliedCoupon
    
}
