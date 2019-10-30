package com.eecs395.fint;

import java.io.Serializable;
import javax.persistence.Embeddable;

@Embeddable
public class ReviewIds implements Serializable{

	private Integer reviewedId;
	
	private Integer reviewerId;
}
