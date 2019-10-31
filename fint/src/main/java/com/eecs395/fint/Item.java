package com.eecs395.fint;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemId;

    private String name;

    private double price;

    private String picture;

    private int fintCount;

    private boolean isAvailable;

    private String location;

    private int finterId;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPicture() { return picture; }

    public void setPicture(String picture) { this.picture = picture; }

    public int getFintCount() {
        return fintCount;
    }

    public void setFintCount(int fintCount) {
        this.fintCount = fintCount;
    }

    public boolean getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation (String location) {
        this.location =  location;
    }

    public int getFinterId() {
        return finterId;
    }

    public void setFinterId(int finterId) {
        this.finterId = finterId;
    }
}
