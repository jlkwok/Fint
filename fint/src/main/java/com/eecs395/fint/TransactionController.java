package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Optional;

@CrossOrigin
@Controller    // This means that this class is a Controller
@RequestMapping(path="/transaction") // This means URL's start with /demo (after Application path)
public class TransactionController {

    @Autowired // This means to get the bean called userRepository
    private TransactionRepository transactionRepository;

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/fint")
    public ResponseEntity<?> fint(@RequestParam int itemId, @RequestParam int finteeId, @RequestParam String startDate, @RequestParam String endDate) {
        Transaction t = new Transaction();
        t.setItemId(itemId);
        t.setFinteeId(finteeId);
        t.setStartDate(StringDateConverter.stringToCalendar(startDate));
		t.setEndDate(StringDateConverter.stringToCalendar(endDate));
        t.setIsReturned(false);
        Optional<Item> item = itemRepository.findById(itemId);
        if (item.isPresent()) {
            t.setTPrice(item.get().getPrice() * t.getLength());
            transactionRepository.save(t);
            return ResponseEntity.ok("Item Finted");
        } else {
            return new ResponseEntity<>("Item Not Found", HttpStatus.NOT_FOUND);
        }
    }
    
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Transaction> getAllTransactions() {
		return transactionRepository.findAll();
	}    
}
