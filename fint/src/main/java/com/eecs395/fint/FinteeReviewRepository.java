package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface FinteeReviewRepository extends CrudRepository<FinteeReview, ReviewIds>{
	@Query("SELECT f FROM FinteeReview f WHERE f.id.reviewedId=?1")
	public List<FinteeReview> findFinteeReviewsById(Integer finteeId);
	
	@Query("SELECT AVG(f.rating) FROM FinteeReview f WHERE f.id.reviewedId=?1")
	public double getFinteeRating(Integer finteeId);

}
