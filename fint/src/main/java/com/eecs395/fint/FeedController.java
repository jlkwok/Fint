package com.eecs395.fint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@CrossOrigin
    @Controller
    @RequestMapping(path="/feed")
    public class FeedController {

        @Autowired
        private ItemRepository itemRepository;


        @GetMapping(path="/getFeedByQuery")
        public ResponseEntity<?> getFeedByQuery(
                @RequestParam String query) {
            String[] queryWords = query.split("\\s+");
            Set<Item> itemResults = new HashSet<Item>();
            for (String word : queryWords) {
                itemResults.addAll(itemRepository.query(word));
            }
            return ResponseEntity.ok(itemResults);
        }

//        @GetMapping(path="/getFeedByQuerySorted")
//        public ResponseEntity<?> getFeedByQuerySorted(
//                @RequestParam String query,
//                @RequestParam Boolean isAscending,
//                @RequestParam String metric) {
//            String[] queryWords = query.split("\\s+");
//            List<Item> itemResults = query.split
//        )

}
