export class ReviewIds {
    reviewedId: number;
    reviewerId: number;

    constructor (reviewerId: number, reviewedId: number) {
		this.reviewedId = reviewedId;
		this.reviewerId = reviewerId;
	}
}