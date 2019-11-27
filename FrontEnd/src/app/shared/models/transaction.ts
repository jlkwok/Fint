export class Transaction {
    tid: number;
    itemId: number;
    isReturned: boolean;
    finteeId: number;
    length: number;
    startDate: Date;
    endDate: string;
    tPrice: number;

    constructor (itemId: number, finteeId: number, endDate: string) {
        this.itemId = itemId;
        this.finteeId = finteeId;
        this.endDate = endDate;
    }
}