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
@RequestMapping(path="/finteereview")
public class FinteeReviewController {
	@Autowired
	private FinteeReviewRepository finteeRepository;

	@PostMapping(path="/postFinteeReview") // Map ONLY POST Requests
	public @ResponseBody String addNewfinteeReview (@RequestParam Integer reviewerId, @RequestParam Integer finteeId, @RequestParam Integer rating, @RequestParam String description, @RequestParam String date) {
		FinteeReview review = new FinteeReview();
		review.setId(new ReviewIds(reviewerId, finteeId));
		review.setDescription(description);
		review.setRating(rating);
		review.setPostDate(StringDateConverter.stringToCalendar(date));
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

	@GetMapping(path="/all")
	public @ResponseBody Iterable<FinteeReview> getAllReviews() {
		return finteeRepository.findAll();
	}
}
