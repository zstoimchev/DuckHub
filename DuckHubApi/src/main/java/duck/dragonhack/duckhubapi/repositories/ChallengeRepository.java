package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    List<Challenge> findByDifficulty(String difficulty);
}
