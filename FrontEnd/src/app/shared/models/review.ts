import { ReviewIds } from './reviewIds';

export class Review {
    id: ReviewIds;
    description: String;
    rating: number;
    postDate: Date;

    constructor (id: ReviewIds, description: String, rating: number, postDate: Date) {
        this.id = id;
        this.description = description;
        this.rating = rating; 
        this.postDate = postDate;
    }
}