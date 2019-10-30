package com.eecs395.fint;

import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Review {

	@EmbeddedId
    private ReviewIds id;
      
    /**
	 * @return the id
	 */
	public ReviewIds getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(ReviewIds id) {
		this.id = id;
	}

	private String description;
    
    private int rating;

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the rating
	 */
	public int getRating() {
		return rating;
	}

	/**
	 * @param rating the rating to set
	 */
	public void setRating(int rating) {
		this.rating = rating;
	}
    
    
}
