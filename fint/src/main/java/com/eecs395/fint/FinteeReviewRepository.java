package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinteeReviewRepository extends CrudRepository<FinteeReview, ReviewIds>{
	@Query("SELECT f FROM FinteeReview f WHERE f.id.reviewedId=?1")
	public List<FinteeReview> findFinteeReviewsById(Integer finteeId);
	
	@Query("SELECT AVG(f.rating) FROM FinteeReview f WHERE f.id.reviewedId=?1")
	public double getFinteeRating(Integer finteeId);

	@Query("SELECT f FROM FinteeReview f WHERE f.id.reviewerId=?1 AND f.id.reviewedId=?2")
	public FinteeReview findFinteeReviewByIdPair(Integer reviewerId, Integer finteeId);
}
