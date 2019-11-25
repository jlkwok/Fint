package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Optional;

@CrossOrigin
@Controller    // This means that this class is a Controller
@RequestMapping(path="/item") // This means URL's start with /demo (after Application path)
public class ItemController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private ItemRepository itemRepository;

	@GetMapping("/{id}") // Map ONLY POST Requests
	public ResponseEntity<Item>  getItem(@PathVariable("id") int id) {
		Optional<Item> item = itemRepository.findById(id);
		return ResponseEntity.of(item);
	}

	@GetMapping("/all")
    public ResponseEntity<?> getAllItems() {
	    return ResponseEntity.ok(itemRepository.findAll());
    }

	/*@PostMapping(path="/post")
	public ResponseEntity<?> postItem(
			@RequestParam String name,
			@RequestParam double price,
			@RequestParam String picture,
			@RequestParam String location,
			@RequestParam int finterId) {
		Item item = new Item();
		item.setName(name);
		item.setPrice(price);
		item.setPicture(picture);
		item.setFintCount(0);
		item.setIsAvailable(true);
		item.setLocation(location);
		item.setFinterId(finterId);
		itemRepository.save(item);
		return ResponseEntity.ok("New Item Created");
	}*/
	
	@PostMapping("/post")
    public ResponseEntity<?> postItem(@RequestBody Item item) {
		item.setPostDate(StringDateConverter.calendarToString(Calendar.getInstance()));
		itemRepository.save(item);
		return ResponseEntity.ok("New Item Created");
    }

	@GetMapping("/getUserItems")
	public ResponseEntity<?> getUserItems(
			@RequestParam int finterId) {
		return ResponseEntity.ok(itemRepository.findItemsByFinterId(finterId));

	}

	@PostMapping(path="/setItemPrice")
	public ResponseEntity<?> setItemPrice(
			@RequestParam int id,
			@RequestParam double price) {
		Item updatedItem = itemRepository.findById(id).get();
		if (updatedItem != null) {
			updatedItem.setPrice(price);
			itemRepository.save(updatedItem);
			return ResponseEntity.ok("Item Price Updated");
		} else {
			return new ResponseEntity<>("Item Not Found",HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(path="/setItemName")
	public ResponseEntity<?> setItemName(
			@RequestParam int id,
			@RequestParam String name) {
		Item updatedItem = itemRepository.findById(id).get();
		if (updatedItem != null) {
			updatedItem.setName(name);
			itemRepository.save(updatedItem);
			return ResponseEntity.ok("Item Name Updated");
		} else {
			return new ResponseEntity<>("Item Not Found",HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(path="/setItemPicture")
	public ResponseEntity<?> setItemPicture(
			@RequestParam int id,
			@RequestParam String picture) {
		Item updatedItem = itemRepository.findById(id).get();
		if (updatedItem != null) {
			updatedItem.setPicture(picture);
			itemRepository.save(updatedItem);
			return ResponseEntity.ok("Item Picture Updated");
		} else {
			return new ResponseEntity<>("Item Not Found",HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(path="/setItemLocation")
	public ResponseEntity<?> setItemLocation(
			@RequestParam int id,
			@RequestParam String location) {
		Item updatedItem = itemRepository.findById(id).get();
		if (updatedItem != null) {
			updatedItem.setLocation(location);
			itemRepository.save(updatedItem);
			return ResponseEntity.ok("Item location Updated");
		} else {
			return new ResponseEntity<>("Item Not Found",HttpStatus.NOT_FOUND);
		}
	}
}
