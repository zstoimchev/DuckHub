package duck.dragonhack.duckhubapi.services.Impl;


import duck.dragonhack.duckhubapi.DTOs.ChallengeResponse;
import duck.dragonhack.duckhubapi.models.Challenge;
import duck.dragonhack.duckhubapi.repositories.ChallengeRepository;
import duck.dragonhack.duckhubapi.services.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChallengeServiceImpl implements ChallengeService {
    private final ChallengeRepository challengeRepository;


    @Autowired
    public ChallengeServiceImpl(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    @Override
    public List<ChallengeResponse> getAllChallenges() {
        List<Challenge> challenges = challengeRepository.findAll();
        return challenges.stream().map(ChallengeResponse::fromChallenge).collect(Collectors.toList());
    }

    @Override
    public ChallengeResponse getChallengeById(long id) {
        Challenge challenge = challengeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Challenge not found!"));
        return ChallengeResponse.fromChallenge(challenge);
    }

    @Override
    public List<ChallengeResponse> getChallengesByDifficulty(String difficulty) {
        List<Challenge> challenges = challengeRepository.findByDifficulty(difficulty);
        return challenges.stream().map(ChallengeResponse::fromChallenge).collect(Collectors.toList());
    }


}
