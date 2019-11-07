export class Transaction {
    tId: number;
    itemId: number;
    isReturned: boolean;
    finteeId: number;
    length: number;
    startDate: Date;
    endDate: Date;
    tPrice: number;

    constructor (itemId: number, isReturned: boolean, finteeId: number, startDate: Date, endDate: Date, tPrice: number) {
        this.itemId = itemId;
        this.isReturned = isReturned; 
        this.finteeId = finteeId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tPrice = tPrice;
    }
}