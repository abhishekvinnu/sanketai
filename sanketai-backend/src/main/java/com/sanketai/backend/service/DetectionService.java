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

    public DetectionService(HuggingFaceClient hf){
        this.hf = hf;
    }

    public NewsResponse detect(String text){

        String result = hf.analyze(text);

        String label = "unclear";
        double confidence = 0;

        try{
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(result);

            double maxScore = 0;

            for(JsonNode node : root){
                double score = node.get("score").asDouble();

                if(score > maxScore){
                    maxScore = score;
                    label = node.get("label").asText();
                    confidence = Math.round(score * 100.0);
//                    confidence = Math.round(score * 10000.0) / 100.0;
                }
            }

        }catch(Exception e){
            e.printStackTrace();
        }

        String verdict = switch(label){
            case "fake" -> "POTENTIALLY MISLEADING";
            case "misleading" -> "SUSPICIOUS";
            case "real" -> "LIKELY FACTUAL";
            default -> "UNCLEAR";
        };

        return NewsResponse.builder()
                .verdict(verdict)
                .confidence(confidence)
                .actions(List.of(
                        "Avoid forwarding unverified content",
                        "Cross-check with trusted news sources",
                        "Report if it causes public panic"
                ))
                .reportingLinks(Map.of(
                        "cybercrime","https://cybercrime.gov.in",
                        "pib","https://factcheck.pib.gov.in"
                ))
                .legalAwareness("Spreading misleading information may attract provisions under BNS and IT laws. This is awareness only.")
                .build();
    }



}
