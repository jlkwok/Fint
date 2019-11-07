import { ReviewIds } from './reviewIds';

export class Review {
    id: ReviewIds;
    content: String;
    rating: number;
    postDate: Date;

    constructor (id: ReviewIds, content: String, rating: number, postDate: Date) {
        this.id = id;
        this.content = content;
        this.rating = rating; 
        this.postDate = postDate;
    }
}