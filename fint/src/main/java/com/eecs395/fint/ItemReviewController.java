package com.eecs395.fint;

import java.util.List;
import java.text.ParseException;
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
@RequestMapping(path="/itemreview")
public class ItemReviewController {
	@Autowired
	private ItemReviewRepository itemRepository;

//	@PostMapping(path="/postItemReview") // Map ONLY POST Requests
//	public @ResponseBody String addNewItemReview (@RequestParam Integer reviewerId, @RequestParam Integer itemId, @RequestParam Integer rating, @RequestParam String description) {
//		ItemReview review = new ItemReview();
//		review.setId(new ReviewIds(reviewerId, itemId));
//		review.setDescription(description);
//		review.setRating(rating);
//		review.setPostDate(StringDateConverter.calendarToString(Calendar.getInstance()));
//		itemRepository.save(review);
//		return "Review Posted";
//	}
	
	@PostMapping(path="/postItemReview") // Map ONLY POST Requests
	public @ResponseBody String addNewItemReview (@RequestBody ItemReview review) {
		review.setPostDate(StringDateConverter.calendarToString(Calendar.getInstance()));
		itemRepository.save(review);
		return "Review Posted";
	}
	
	@GetMapping(path="/getItemReview")
	public @ResponseBody ItemReview getItemReview (@RequestParam Integer reviewerId, @RequestParam Integer itemId) {
		return itemRepository.findItemReviewByIdPair(reviewerId, itemId);
	}
	
	@GetMapping(path="/getItemReviews") // Map ONLY GET Requests	
	public @ResponseBody List<ItemReview> getItemReviews (@RequestParam Integer itemId) {
		return itemRepository.findItemReviewsById(itemId);
	}
	
	@GetMapping(path="/getItemRating") // Map ONLY GET Requests
	public @ResponseBody Double getItemRating (@RequestParam Integer itemId) {
		if(null == itemRepository.getItemRating(itemId))
			return 0.0;
		return itemRepository.getItemRating(itemId);
	}
	
	@GetMapping(path="/getReviewCount")
	public @ResponseBody double getReviewCount(@RequestParam Integer itemId) {
		return itemRepository.reviewCount(itemId);
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<ItemReview> getAllReviews() {
		return itemRepository.findAll();
	}
}
