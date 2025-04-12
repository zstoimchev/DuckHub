package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.Duck;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DuckRepository extends JpaRepository<Duck, Long> {
    List<Duck> findByUserId(long id);
}