package com.eecs395.fint;

import java.util.List;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping(path="/finteereview")
public class FinteeReviewController {
	@Autowired
	private FinteeReviewRepository finteeRepository;

	@PostMapping(path="/postFinteeReview") // Map ONLY POST Requests
	public @ResponseBody String addNewfinteeReview (@RequestBody FinteeReview review) {
		review.setPostDate(StringDateConverter.calendarToString(Calendar.getInstance()));
		finteeRepository.save(review);
		return "Review Posted";
	}
		
	@GetMapping(path="/getFinteeReview")
	public @ResponseBody FinteeReview getFinteeReview (@RequestParam Integer reviewerId, @RequestParam Integer finteeId) {
		return finteeRepository.findFinteeReviewByIdPair(reviewerId, finteeId);
	}

	@GetMapping(path="/getFinteeReviews") // Map ONLY GET Requests	
	public @ResponseBody List<FinteeReview> getfinteeReviews (Integer finteeId) {
		return finteeRepository.findFinteeReviewsById(finteeId);
	}
	
	@GetMapping(path="/getFinteeRating") // Map ONLY GET Requests
	public @ResponseBody double getfinteeRating (@RequestParam Integer finteeId) {
		return finteeRepository.getFinteeRating(finteeId);
	}
	
	@GetMapping(path="/getReviewCount")
	public @ResponseBody double getReviewCount(@RequestParam Integer finteeId) {
		return finteeRepository.reviewCount(finteeId);
	}


	@GetMapping(path="/all")
	public @ResponseBody Iterable<FinteeReview> getAllReviews() {
		return finteeRepository.findAll();
	}
}
