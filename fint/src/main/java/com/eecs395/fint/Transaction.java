package com.eecs395.fint;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name="Transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tId;

    private Integer itemId;

    private boolean isReturned;

    private int finteeId;

    private String startDate;
    
    private String endDate;

    private double tPrice;

    public int getTId() {
        return tId;
    }

    public void setTId(int tId) {
        this.tId = tId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public boolean getIsReturned() {
        return isReturned;
    }

    public void setIsReturned(boolean returned) {
        isReturned = returned;
    }

    public int getFinteeId() {
        return finteeId;
    }

    public void setFinteeId(int finteeId) {
        this.finteeId = finteeId;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String date) {
        this.startDate = date;
    }
    
    public int getLength() {
        return StringDateConverter.stringToCalendar(endDate).get(Calendar.DAY_OF_YEAR) - StringDateConverter.stringToCalendar(startDate).get(Calendar.DAY_OF_YEAR);
    }

    public double getTPrice() {
        return tPrice;
    }

    public void setTPrice(double tPrice) {
        this.tPrice = tPrice;
    }

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
}
