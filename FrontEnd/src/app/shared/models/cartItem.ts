import { CartId } from './cartId';

export class CartItem {
    id:CartId;
    endDate:String;
    startDate:String;
    price:number;

    constructor (id:CartId, startDate:String, endDate:String, price:number) {
        this.id = id;
        this.endDate = endDate;
        this.startDate = startDate;
        this.price = price;
    }
}