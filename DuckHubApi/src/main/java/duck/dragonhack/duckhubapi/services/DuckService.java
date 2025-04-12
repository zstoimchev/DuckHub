package duck.dragonhack.duckhubapi.services;


import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.models.User;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DuckService {

    private final DuckRepository duckRepository;
    private final UserRepository userRepository;

    @Autowired
    public DuckService(DuckRepository duckRepository){
        this.duckRepository = duckRepository;
        this.userRepository = userRepository;
    }


    // Add a duck:
    public DuckResponse addDuck(DuckRequest duckRequest){
        User user = userRepository.findById(duckRequest.getUserId());

        Duck duck = new Duck();
        duck.setName(duckRequest.getName());
        duck.setPhoto(duckRequest.getPhoto());
        duck.setLevel(duckRequest.getLevel());
        duck.setUser(user);

        Duck savedDuck = duckRepository.save(duck);

        return new DuckResponse(savedDuck.getId(), savedDuck.getName(), savedDuck.getPhoto(), savedDuck.getLevel(), savedDuck.getUser().getId());
    }
}
