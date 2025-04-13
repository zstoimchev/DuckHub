package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.ChallengeResponse;

import java.util.List;

public interface ChallengeService {

    List<ChallengeResponse> getAllChallenges();

    ChallengeResponse getChallengeById(long id);

    List<ChallengeResponse> getChallengesByDifficulty(String difficulty);
}
