package com.eecs395.fint;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping(path="/finterreview")
public class FinterReviewController {
	@Autowired
	private FinterReviewRepository finterRepository;

	@PostMapping(path="/postFinterReview") // Map ONLY POST Requests
	public @ResponseBody String addNewFinterReview (@RequestParam Integer reviewerId, @RequestParam Integer finterId, @RequestParam Integer rating, @RequestParam String description, @RequestParam String date) {
		FinterReview review = new FinterReview();
		review.setId(new ReviewIds<Integer>(reviewerId, finterId));
		review.setDescription(description);
		review.setRating(rating);
		review.setPostDate(StringDateConverter.stringToCalendar(date));
		finterRepository.save(review);
		return "Review Posted";
	}
	
	@GetMapping(path="/getFinterReview")
	public @ResponseBody FinterReview getItemReview (@RequestParam Integer reviewerId, @RequestParam Integer finterId) {
		return finterRepository.findFinterReviewByIdPair(reviewerId, finterId);
	}
	
	@GetMapping(path="/getFinterReviews") // Map ONLY GET Requests	
	public @ResponseBody List<FinterReview> getFinterReviews (Integer finterId) {
		return finterRepository.findFinterReviewsById(finterId);
	}
	
	@GetMapping(path="/getFinterRating") // Map ONLY GET Requests
	public @ResponseBody double getFinterRating (@RequestParam Integer finterId) {
		return finterRepository.getFinterRating(finterId);
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<FinterReview> getAllReviews() {
		return finterRepository.findAll();
	}
}
