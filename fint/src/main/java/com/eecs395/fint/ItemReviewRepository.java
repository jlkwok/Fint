package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemReviewRepository extends CrudRepository<ItemReview, ReviewIds>{
	@Query("SELECT i FROM ItemReview i WHERE i.id.reviewedId=?1")
	public List<ItemReview> findItemReviewsById(Integer itemId);
	
	@Query("SELECT AVG(i.rating) FROM ItemReview i WHERE i.id.reviewedId=?1")
	public double getItemRating(Integer itemId);
	
	@Query("SELECT i FROM ItemReview i WHERE i.id.reviewerId=?1 AND i.id.reviewedId=?2")
	public ItemReview findItemReviewByIdPair(Integer reviewerId, Integer itemId);
}
