package com.eecs395.fint;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

    @RequestMapping("/hello")
    public Field hello(
            @RequestParam(value="hello", defaultValue = "world") String s) {
        return new Field("world");
    }
}
