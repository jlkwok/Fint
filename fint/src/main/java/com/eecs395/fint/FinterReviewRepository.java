package com.eecs395.fint;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinterReviewRepository extends CrudRepository<FinterReview, ReviewIds>{
	
	@Query("SELECT f FROM FinterReview f WHERE f.id.reviewedId=?1")
	public List<FinterReview> findFinterReviewsById(Integer finterId);
	
	@Query("SELECT AVG(f.rating) FROM FinterReview f WHERE f.id.reviewedId=?1")
	public double getFinterRating(Integer finterId);
	
	@Query("SELECT f FROM FinterReview f WHERE f.id.reviewerId=?1 AND f.id.reviewedId=?2")
	public FinterReview findFinterReviewByIdPair(Integer reviewerId, Integer finterId);
}