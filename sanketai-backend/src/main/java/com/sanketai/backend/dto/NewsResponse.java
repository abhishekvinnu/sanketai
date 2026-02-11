package com.sanketai.backend.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
@Builder
public class NewsResponse {

    private String verdict;
    private double confidence;

    private List<String> actions;

    private Map<String,String> reportingLinks;

    private String legalAwareness;
}
