package com.sanketai.backend.service;

import com.sanketai.backend.client.HuggingFaceClient;
import com.sanketai.backend.dto.NewsResponse;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Map;

@Service
public class DetectionService {

    private final HuggingFaceClient hf;

    public DetectionService(HuggingFaceClient hf) {
        this.hf = hf;
    }

    public NewsResponse detect(String text) {

        String result = hf.analyze(text);

        String label = "unclear";
        double confidence = 0;

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(result);

            JsonNode first = root.get(0);

            JsonNode labelsNode = first.get("labels");
            JsonNode scoresNode = first.get("scores");

            String topLabel = labelsNode.get(0).asText();
            double topScore = scoresNode.get(0).asDouble();

            label = topLabel;
            confidence = Math.round(topScore * 100.0);

        } catch (Exception e) {
            e.printStackTrace();
        }


        String verdict;
        String lowerLabel = label.toLowerCase();

        if (lowerLabel.contains("fabricated")) {
            verdict = "fake";
        }
        else if (lowerLabel.contains("misleading")) {
            verdict = "misleading";
        }
        else if (lowerLabel.contains("factually accurate")) {
            verdict = "real";
        }
        else {
            verdict = "uncertain";
        }



        return NewsResponse.builder()
                .verdict(verdict)
                .confidence(confidence)
                .actions(List.of(
                        "Avoid forwarding unverified content",
                        "Cross-check with trusted news sources",
                        "Report if it causes public panic"
                ))
                .reportingLinks(Map.of(
                        "cybercrime", "https://cybercrime.gov.in",
                        "pib", "https://factcheck.pib.gov.in"
                ))
                .legalAwareness("Spreading misleading information may attract provisions under BNS and IT laws. This is awareness only.")
                .build();
    }


}
