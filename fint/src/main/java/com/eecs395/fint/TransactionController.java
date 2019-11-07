package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> fint(
            @RequestParam int itemId,
            @RequestParam int finteeId,
            @RequestParam int length) {
        Transaction t = new Transaction();
        t.setItemId(itemId);
        t.setFinteeId(finteeId);
        t.setLength(length);
        t.setIsReturned(false);
        Optional<Item> item = itemRepository.findById(itemId);
        if (item.isPresent()) {
            t.setTPrice(item.get().getPrice() * length);
            return ResponseEntity.ok("Item Finted");
        } else {
            return new ResponseEntity<>("Item Not Found", HttpStatus.NOT_FOUND);
        }
    }
}
