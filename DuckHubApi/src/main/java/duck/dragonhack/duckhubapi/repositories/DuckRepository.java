package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.Duck;
import org.springframework.data.jpa.repository.JpaRepository;



public interface DuckRepository extends JpaRepository<Duck, Long> {}