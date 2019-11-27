import { ReviewIds } from './reviewIds';

export class Review {
    id: ReviewIds;
    description: string;
    rating: number;
    postDate: Date;

    constructor (id: ReviewIds, description: string, rating: number) {
        this.id = id;
        this.description = description;
        this.rating = rating; 
        this.postDate = null;
    }
}