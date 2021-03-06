package com.eecs395.fint;

import java.io.Serializable;
import javax.persistence.Embeddable;

@Embeddable
public class ReviewIds implements Serializable{
	
	private Integer reviewedId;
	private Integer reviewerId;
	
	public ReviewIds() {
		this.reviewedId = null;
		this.reviewerId = null;
	}
	
	public ReviewIds(Integer reviewerId, Integer reviewedId) {
		this.reviewerId = reviewerId;
		this.reviewedId = reviewedId;
	}

	/**
	 * @return the reviewedId
	 */
	public Integer getReviewedId() {
		return reviewedId;
	}

	/**
	 * @param reviewedId the reviewedId to set
	 */
	public void setReviewedId(Integer reviewedId) {
		this.reviewedId = reviewedId;
	}

	/**
	 * @return the reviewerId
	 */
	public Integer getReviewerId() {
		return reviewerId;
	}

	/**
	 * @param reviewerId the reviewerId to set
	 */
	public void setReviewerId(Integer reviewerId) {
		this.reviewerId = reviewerId;
	}
}
