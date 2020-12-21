import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})

/**

************* What is a virtual cart? ***********************
What's an E-Commerce Shopping Cart. ... For the uninitiated, the shopping cart is a virtual cart that 
“holds” items you wish to purchase until you check out. An unlimited number of items can go into the cart.

************* What does a shopping cart mean? ***********************
Definition: A shopping cart on an online retailer's site is a piece of software that
facilitates the purchase of a product or service. It accepts the customer's payment 
and organizes the distribution of that information to the merchant, payment processor and other parties.

*********************** What is the meaning of add to cart in online shopping? ***********************
Add to Cart is a way to create a temporary list of items by adding them to your cart, 
which will keep track of the items until you leave our website. You can export items in your cart 
by saving the list to a file or sending it to an email address. You can also place the items on 
hold or add them to your wish list.

*********************** What is the difference between add to cart and buy now? ***********************
Add to cart: this option will give you choice to add more item in your list. ... This is very good option in online 
transaction to keep editing in cart. Buy now: is the option to buy it immediately. The option will lead you to final check out.

 ************ How does the shopping cart works? ********************
For shoppers, the shopping cart is where to place and review stuff(s) before paying. 
Customers can manage all of the things they want to buy beforehand; 
make specific changes in quantity, sizes, colors; carry out checkout process, 
and reconsider whether those things worth buying or not within their budget.

 */
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    //check already item in the cart 
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    
    if(this.cartItems.length > 0){
      //find the item in the cart based on id

      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);

      //check if we found it
      alreadyExistsInCart = (existingCartItem != undefined)
    } 

    if(alreadyExistsInCart){
      //increment the quantity
      existingCartItem.quantity++;
    }else {
      //add to cart item array
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
    
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(cartItem: CartItem){
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    }else {
      this.calculateTotalPrice();
    }
  }

  remove(cartItem: CartItem){
    const itemIndex = this.cartItems
                          .findIndex(
                            tempCartItem => tempCartItem.id === cartItem.id
                          );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.calculateTotalPrice();
    }
  }
}
