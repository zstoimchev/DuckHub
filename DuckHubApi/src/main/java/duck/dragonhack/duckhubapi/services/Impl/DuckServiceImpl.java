package duck.dragonhack.duckhubapi.services.Impl;

import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.models.User;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import duck.dragonhack.duckhubapi.repositories.UserRepository;
import duck.dragonhack.duckhubapi.services.DuckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DuckServiceImpl implements DuckService {

    private final DuckRepository duckRepository;
    private final UserRepository userRepository;

    @Autowired
    public DuckServiceImpl(DuckRepository duckRepository, UserRepository userRepository) {
        this.duckRepository = duckRepository;
        this.userRepository = userRepository;
    }

    // Get all ducks:
    public List<DuckResponse> getAllDucks() {
        List<Duck> ducks = duckRepository.findAll();
        return ducks.stream().map(DuckResponse::fromDuck).collect(Collectors.toList());
    }

    // Getting a single duck:
    public DuckResponse getDuckById(long id) {
        Duck duck = duckRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Duck not found!"));
        return DuckResponse.fromDuck(duck);
    }

    // Add a duck:
    public DuckResponse addDuck(long id, DuckRequest duckRequest) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Duck duck = duckRequest.toDuck();
        duck.setUser(user);
        Duck savedDuck = duckRepository.save(duck);
        return DuckResponse.fromDuck(savedDuck);
    }

    @Override
    public List<DuckResponse> getDucksByUserId(long id) {
        List<Duck> ducks = duckRepository.findByUserId(id);
        return ducks.stream().map(DuckResponse::fromDuck).collect(Collectors.toList());
    }


}
