package com.eecs395.fint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/itemreview")
public class ItemReviewController {
	@Autowired
	private ItemReviewRepository itemRepository;

	@PostMapping(path="/postItemReview") // Map ONLY POST Requests
	public @ResponseBody String addNewItemReview (@RequestParam Integer reviewerId, @RequestParam Integer itemId, @RequestParam Integer rating, @RequestParam String description) {
		ItemReview review = new ItemReview();
		review.setId(new ReviewIds(reviewerId, itemId));
		review.setDescription(description);
		review.setRating(rating);
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
	public @ResponseBody double getItemRating (@RequestParam Integer itemId) {
		return itemRepository.getItemRating(itemId);
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<ItemReview> getAllReviews() {
		return itemRepository.findAll();
	}
}
