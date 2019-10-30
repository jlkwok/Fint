package com.eecs395.fint;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.sql.Date;

@Entity
@Table(name="Transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tId;

    private int itemId;

    private boolean isReturned;

    private int finteeId;

//    private Date date;

    private int length;

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

//    public Date getDate() {
//        return date;
//    }
//
//    public void setDate(Date date) {
//        this.date = date;
//    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public double getTPrice() {
        return tPrice;
    }

    public void setTPrice(double tPrice) {
        this.tPrice = tPrice;
    }
}