package com.sanketai.backend.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class HuggingFaceClient {

    @Value("${huggingface.api.url}")
    private String apiUrl;

    @Value("${huggingface.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String analyze(String text) {

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));

        Map<String, Object> payload = new HashMap<>();
        payload.put("inputs", text);

        Map<String, Object> params = new HashMap<>();
        params.put("candidate_labels", List.of("fake", "misleading", "real"));

        payload.put("parameters", params);

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(payload, headers);

        ResponseEntity<String> response =
                restTemplate.postForEntity(apiUrl, request, String.class);

        return response.getBody();
    }

}
