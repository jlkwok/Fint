package com.eecs395.fint;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="CartItem")
public class CartItem {
	
	@EmbeddedId
	@Column(name = "id")
    private CartId id;
	
    private String endDate;
    
    private double price;

	/**
	 * @return the endDate
	 */
	public String getEndDate() {
		return endDate;
	}

	/**
	 * @param endDate the endDate to set
	 */
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	/**
	 * @return the id
	 */
	public CartId getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(CartId id) {
		this.id = id;
	}

	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}
}
