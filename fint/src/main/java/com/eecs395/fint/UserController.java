package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@Controller    // This means that this class is a Controller
@RequestMapping(path="/user") // This means URL's start with /demo (after Application path)
public class UserController {

    @Autowired // This means to get the bean called userRepository
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") int id) {
        Optional<User> user = userRepository.findById(id);
        return ResponseEntity.of(user);
    }

    @PostMapping("/create")
    public ResponseEntity<?> newUser(
            @RequestParam String username,
            @RequestParam String name,
            @RequestParam String password) {
        User u = new User();
        u.setName(name);
        u.setUsername(username);
        u.setPassword(password);
        userRepository.save(u);
        return ResponseEntity.ok("New User Created");
    }
}
