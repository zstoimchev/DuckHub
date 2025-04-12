package duck.dragonhack.duckhubapi.repositories;

import duck.dragonhack.duckhubapi.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
