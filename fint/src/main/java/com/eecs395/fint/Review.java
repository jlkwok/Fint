package com.eecs395.fint;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Review {

	@EmbeddedId
	@Column(name = "id")
    private ReviewIds id;
      
	@Column(name = "description")
	private String description;
    
	@Column(name = "rating")
    private int rating;
	
	@Column(name = "postDate")
	private Date postDate;

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
	
	/**
	 * @return the rating
	 */
	public Date getPostDate() {
		return postDate;
	}

	/**
	 * @param rating the rating to set
	 */
	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
}
