package com.sanketai.backend.controller;

import com.sanketai.backend.dto.NewsRequest;
import com.sanketai.backend.dto.NewsResponse;
import com.sanketai.backend.service.DetectionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class DetectionController {

    private final DetectionService service;

    public DetectionController(DetectionService service){
        this.service = service;
    }

    @PostMapping("/verify-news")
    public NewsResponse verify(@RequestBody NewsRequest req){

        if(req.getText().length()<40)
            throw new RuntimeException("Text too short");

        return service.detect(req.getText());
    }
}
