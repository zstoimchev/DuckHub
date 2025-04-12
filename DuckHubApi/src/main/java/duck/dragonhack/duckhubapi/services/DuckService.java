package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;

import java.util.List;

public interface DuckService {
    List<DuckResponse> getAllDucks();

    DuckResponse getDuckById(long id);

    DuckResponse addDuck(long id, DuckRequest duckRequest);

    List<DuckResponse> getDucksByUserId(long id);

}
