import { CartId } from './cartId';

export class CartItem {
    cartId:CartId;
    endDate:String;
    startDate:String;
    price:number;

    constructor (cartId:CartId, endDate:String, price:number, startDate:String) {
        this.cartId = cartId;
        this.endDate = endDate;
        this.startDate = startDate;
        this.price = price;
    }
}