package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

    @CrossOrigin
    @Controller
    @RequestMapping(path="/feed")
    public class FeedController {

        @Autowired
        private ItemRepository itemRepository;


//        @GetMapping(path="/getFeedByQuery")
//        public ResponseEntity<?> getFeedByQuery() {
//
//        }

}
