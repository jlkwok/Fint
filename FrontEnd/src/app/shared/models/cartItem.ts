import { CartId } from './cartId';

export class CartItem {
    id:CartId;
    endDate:string;
    startDate:string;
    price:number;

    constructor (id:CartId, startDate:string, endDate:string, price:number) {
        this.id = id;
        this.endDate = endDate;
        this.startDate = startDate;
        this.price = price;
    }
}