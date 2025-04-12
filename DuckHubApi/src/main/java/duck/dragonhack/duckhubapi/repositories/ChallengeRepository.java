package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
}
