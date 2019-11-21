package com.eecs395.fint;

import java.io.Serializable;
import javax.persistence.Embeddable;

@Embeddable
public class CartId implements Serializable{
	
	private Integer itemId;
	private Integer finteeId;
	
	public CartId() {
		this.itemId = null;
		this.finteeId = null;
	}
	
	public CartId(Integer itemId, Integer finteeId) {
		this.itemId = itemId;
		this.finteeId = finteeId;
	}

	/**
	 * @return the itemId
	 */
	public Integer getItemId() {
		return itemId;
	}

	/**
	 * @param itemId the itemId to set
	 */
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	/**
	 * @return the finteeId
	 */
	public Integer getFinteeId() {
		return finteeId;
	}

	/**
	 * @param finteeId the finteeId to set
	 */
	public void setFinteeId(Integer finteeId) {
		this.finteeId = finteeId;
	}
	

	@Override
	public boolean equals(Object obj) {
		if((obj == null) || (obj.getClass() != this.getClass())) {
	        return false;
		}
		
		CartId cartObj = (CartId)obj;
		return (cartObj.getItemId().equals(this.itemId) && cartObj.getFinteeId().equals(this.finteeId));		
	}
}
