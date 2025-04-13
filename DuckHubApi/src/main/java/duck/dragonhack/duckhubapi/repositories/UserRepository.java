package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
}
