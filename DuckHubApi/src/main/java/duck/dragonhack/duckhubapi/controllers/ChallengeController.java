package duck.dragonhack.duckhubapi.controllers;


import duck.dragonhack.duckhubapi.DTOs.ChallengeResponse;
import duck.dragonhack.duckhubapi.services.ChallengeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    // GET api/challenges/all: Get all challenges
    @GetMapping("/all")
    public List<ChallengeResponse> getAllChallenges() {
        return challengeService.getAllChallenges();
    }

    // GET api/challenges/{id}: Get a single challenge by ID
    @GetMapping("/{id}")
    public ChallengeResponse getChallengeById(@PathVariable long id) {
        return challengeService.getChallengeById(id);
    }

    // GET api/challenges/difficulty/{difficulty}: Get challenges by difficulty
    @GetMapping("/difficulty/{difficulty}")
    public List<ChallengeResponse> getChallengesByDifficulty(@PathVariable String difficulty) {
        return challengeService.getChallengesByDifficulty(difficulty);
    }

}
