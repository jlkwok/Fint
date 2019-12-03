package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Calendar;
import java.util.List;
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
    public ResponseEntity<?> fint(@RequestBody Transaction transaction) {
        transaction.setStartDate(StringDateConverter.calendarToString(Calendar.getInstance()));
        transaction.setIsReturned(false);
        
        if(StringDateConverter.stringToCalendar(transaction.getEndDate()).compareTo(Calendar.getInstance()) < 0){
            return new ResponseEntity<>("End date before begin date", HttpStatus.BAD_REQUEST);
    	}
        
        Optional<Item> itemOp = itemRepository.findById(transaction.getItemId());
        if (itemOp.isPresent()) {
        	Item item = itemOp.get();
        	if(!item.getIsAvailable()) {
                return new ResponseEntity<>("Item not currently available", HttpStatus.BAD_REQUEST);
        	}
        	
            transaction.setTPrice(item.getPrice() * transaction.getLength());
            transactionRepository.save(transaction);
            item.setIsAvailable(false);
            item.setFintCount(item.getFintCount() + 1);
            itemRepository.save(item);
            return ResponseEntity.ok("Item Finted");
        } else {
            return new ResponseEntity<>("Item Not Found", HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/tPrice")
    public @ResponseBody double getTPrice(@RequestParam double price, @RequestParam String endDate) {
    	Transaction transaction = new Transaction();
        transaction.setStartDate(StringDateConverter.calendarToString(Calendar.getInstance()));
        transaction.setEndDate(endDate);
        transaction.setTPrice(price * transaction.getLength());
        return transaction.getTPrice();
    }
    
    @GetMapping("/getTransaction")
    public @ResponseBody Transaction getTransaction(@RequestParam Integer itemId){
    	return transactionRepository.getCurrentItemTransaction(itemId);
    }
    
    @GetMapping("/getCurrentFints")
    public @ResponseBody List<Transaction> getCurrentFints(Integer finteeId){
    	return transactionRepository.findTransactionsByFinteeId(finteeId);
    }
    
    @GetMapping("/getCurrentOutFints")
    public @ResponseBody List<Transaction> getCurrentOutFints(Integer finterId){
    	return transactionRepository.findTransactionsByFinterId(finterId);
    }
    
    @GetMapping("/getPastFints")
    public @ResponseBody List<Transaction> getPastFints(Integer finteeId){
    	return transactionRepository.findPastTransactionsByFinteeId(finteeId);
    }
    
    @GetMapping("/getPastOutFints")
    public @ResponseBody List<Transaction> getPastOutFints(Integer finterId){
    	return transactionRepository.findPastTransactionsByFinterId(finterId);
    }
    
    @GetMapping("/getAllFints")
    public @ResponseBody List<Transaction> getAllFints(Integer finteeId){
    	return transactionRepository.findAllTransactionsByFinteeId(finteeId);
    }
    
    @GetMapping("/getAllOutFints")
    public @ResponseBody List<Transaction> getAllOutFints(Integer finterId){
    	return transactionRepository.findAllTransactionsByFinterId(finterId);
    }

 
    @PostMapping("/return")
    public ResponseEntity<?> returnTransaction(@RequestBody Integer tId) {
    	Transaction t = transactionRepository.findTransactionsByTransactionId(tId);
    	Item i = itemRepository.findById(t.getItemId()).get();
    	if(t.getIsReturned() == false) {
        	i.setIsAvailable(true);
        	t.setIsReturned(true);
        	transactionRepository.save(t);
        	itemRepository.save(i);
    		return ResponseEntity.ok("Item Returned");
    	} else {	
    		return new ResponseEntity<>("Item has already been returned", HttpStatus.NOT_FOUND);
    	}
    }
    
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Transaction> getAllTransactions() {
		return transactionRepository.findAll();
	}

}
