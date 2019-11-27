package com.eecs395.fint;

import com.google.common.collect.Lists;
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

    @Autowired
    private ItemReviewRepository itemReviewRepository;

    @GetMapping(path = "/getFeedByQuery")
    public ResponseEntity<?> getFeedByQuery(
            @RequestParam String query) {
        String[] queryWords = query.split("\\s+");
        Set<Item> itemResults = new HashSet<Item>();
        for (String word : queryWords) {
            itemResults.addAll(itemRepository.query(word));
        }
        return ResponseEntity.ok(itemResults);
    }

    @GetMapping(path = "/getFeedByQuerySorted")
    public ResponseEntity<?> getFeedByQuerySorted(
            @RequestParam(required=false) String query,
            @RequestParam Boolean isAscending,
            @RequestParam String metric) {
        List<Item> itemResults = new ArrayList<Item>();
        if (query != null) {
            String[] queryWords = query.split("\\s+");
            for (String word : queryWords) {
                itemResults.addAll(itemRepository.query(word));
            }
        } else {
            itemResults = Lists.newArrayList(itemRepository.findAll());
        }
        switch (metric.toLowerCase()) {
            case "price":
                itemResults.sort(Comparator.comparingDouble(Item::getPrice));
                break;
            case "rating":
                itemResults.sort((o1, o2) -> {
                    Double rating1 = itemReviewRepository.getItemRating(o1.getItemId());
                    Double rating2 = itemReviewRepository.getItemRating(o2.getItemId());
                    if (rating1 == null) rating1 = 0.0;
                    if (rating2 == null) rating2 = 0.0;
                    return rating1.compareTo(rating2);
                });
                break;
            case "recent":
                itemResults.sort((o1, o2) -> (StringDateConverter.stringToCalendar(o1.getPostDate()).compareTo(StringDateConverter.stringToCalendar(o2.getPostDate()))));
                break;
        }
        if (!isAscending) {
            Collections.reverse(itemResults);
        }
        return ResponseEntity.ok(itemResults);
    }

}
