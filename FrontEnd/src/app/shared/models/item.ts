export class Item {
    itemId: number;
    name: String;
    price: number;
    picture: String;
    fintCount: number;
    isAvailable: boolean;
    location: String;
    finterId: number;

    constructor (name, price, picture, fintCount, isAvailable, location, finterId) {
        this.name = name;
        this.price = price; 
        this.picture = picture;
        this.fintCount = fintCount;
        this.isAvailable = isAvailable;
        this.location = location;
        this.finterId = finterId;
    }
}