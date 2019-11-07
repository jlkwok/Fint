export class Item {
    itemId: number;
    name: string;
    price: number;
    picture: string;
    fintCount: number;
    isAvailable: boolean;
    location: string;
    finterId: number;

    constructor (name) {
        this.name = name;
    }
}