package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@Controller    // This means that this class is a Controller
@RequestMapping(path="/cart") // This means URL's start with /demo (after Application path)
public class CartItemController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private CartItemRepository cartRepository;
	
	@Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
	private ItemRepository itemRepository;

	@GetMapping("getCart/{finteeId}") // Map ONLY POST Requests
	public @ResponseBody List<CartItem>  getCart(@PathVariable("finteeId") int finteeId) {
		return cartRepository.findCartById(finteeId);
	}
	
	@GetMapping("getCartItems/{finteeId}") // Map ONLY POST Requests
	public @ResponseBody List<Item>  getCartItems(@PathVariable("finteeId") int finteeId) {
		return cartRepository.findCartItemsById(finteeId);
	}

	@GetMapping("/all")
    public ResponseEntity<?> getAllItems() {
	    return ResponseEntity.ok(cartRepository.findAll());
    }
	
	@PostMapping("/add")
	public ResponseEntity<?> addToCart(@RequestBody CartItem item) {
        Optional<Item> itemOp = itemRepository.findById(item.getId().getItemId());
        if(itemOp.isPresent()) {    		
    		Transaction t = new Transaction();
    		t.setItemId(itemOp.get().getItemId());
            t.setStartDate(StringDateConverter.calendarToString(Calendar.getInstance()));
    		t.setEndDate(item.getEndDate());
            t.setIsReturned(false);
            t.setTPrice(itemOp.get().getPrice() * t.getLength());
            item.setPrice(t.getTPrice());
            
    		cartRepository.save(item);
    		return ResponseEntity.ok("Item added to cart");
        }
        else {
            return new ResponseEntity<>("Item Not Found", HttpStatus.NOT_FOUND);
        }	
	}
	
	@PostMapping("/remove")
	public ResponseEntity<?> removeFromCart(@RequestParam Integer itemId, @RequestParam int finteeId){
		cartRepository.deleteById(new CartId(itemId, finteeId));
		return ResponseEntity.ok("Item removed from cart");
	}
	
	@GetMapping("/price/{finteeId}")
	public @ResponseBody double getPrice(@PathVariable("finteeId") int finteeId) {
		List<CartItem> itemIdList = cartRepository.findCartById(finteeId);
		double totalPrice = 0;
		for (CartItem item : itemIdList) {
			totalPrice += item.getPrice();
		}
		return totalPrice;
	}
}
