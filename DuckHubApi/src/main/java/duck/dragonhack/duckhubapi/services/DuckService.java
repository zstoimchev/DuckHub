package duck.dragonhack.duckhubapi.services;


import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.models.User;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import duck.dragonhack.duckhubapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DuckService {

    private final DuckRepository duckRepository;
    private final UserRepository userRepository;

    @Autowired
    public DuckService(DuckRepository duckRepository, UserRepository userRepository) {
        this.duckRepository = duckRepository;
        this.userRepository = userRepository;
    }


    // Add a duck:
    public DuckResponse addDuck(long id, DuckRequest duckRequest){
       User user = userRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Duck duck = RequestToDuck(duckRequest);
        duck.setUser(user);
        Duck savedDuck = duckRepository.save(duck);

        DuckResponse duckResponse = DuckToResponse(savedDuck);
        duckResponse.setId(user.getId());
        return duckResponse;
    }

    public Duck RequestToDuck(DuckRequest duckRequest) {
        Duck duck = new Duck();
        duck.setName(duckRequest.getName());
        duck.setPhoto(duckRequest.getPhoto());
        duck.setLevel(0);
        return duck;
    }

    public DuckResponse DuckToResponse(Duck duck) {
        DuckResponse duckResponse = new DuckResponse();
        duckResponse.setId(duck.getId());
        duckResponse.setName(duck.getName());
        duckResponse.setPhoto(duck.getPhoto());
        duckResponse.setLevel(duck.getLevel());
        return duckResponse;
    }


}
