package com.eecs395.fint;

import io.swagger.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/getUser")
    public ResponseEntity<User> getUser(
            @RequestParam int id) {
        Optional<User> user = userRepository.findById(id);
        return ResponseEntity.of(user);
    }

    @GetMapping("/verifyUser")
    public ResponseEntity<User> verifyUser(
            @RequestParam String username,
            @RequestParam String password) {
        Optional<User> user = userRepository.verifyUser(username, password);
        return ResponseEntity.of(user);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    /*@PostMapping("/create")
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
    }*/
    @PostMapping("/create")
    public ResponseEntity<?>  newUser(@RequestBody User user) {
      userRepository.save(user);
      return ResponseEntity.ok("New User Created");
    }

    public static class IntString {
        private Integer i;
        private String s;

        public Integer getI() {
            return i;
        }

        public String getS() {
            return s;
        }
    }

    @PostMapping("/setUserName")
    public ResponseEntity<?> setUserName(
            @RequestBody IntString idName) {
        Optional<User> optionalUser = userRepository.findById(idName.getI());
        if (optionalUser.isPresent()) {
            User updatedUser = optionalUser.get();
            updatedUser.setName(idName.getS());
            userRepository.save(updatedUser);
            return ResponseEntity.ok("User Name Updated");
        } else {
            return new ResponseEntity<>("User Not Found",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/setUserLocation")
    public ResponseEntity<?> setUserLocation(
            @RequestBody IntString idLocation) {
        Optional<User> optionalUser = userRepository.findById(idLocation.getI());
        if (optionalUser.isPresent()) {
            User updatedUser = optionalUser.get();
            updatedUser.setLocation(idLocation.getS());
            userRepository.save(updatedUser);
            return ResponseEntity.ok("User Location Updated");
        } else {
            return new ResponseEntity<>("User Not Found",HttpStatus.NOT_FOUND);
        }
    }
}
