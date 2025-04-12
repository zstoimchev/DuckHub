package duck.dragonhack.duckhubapi.controllers;


import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;
import duck.dragonhack.duckhubapi.models.Duck;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import duck.dragonhack.duckhubapi.services.DuckService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ducks")
public class DuckController {


    private final DuckService duckService;
    private final DuckRepository duckRepository;

    public DuckController(DuckService duckService, DuckRepository duckRepository) {
        this.duckService = duckService;
        this.duckRepository = duckRepository;
    }

    // Getting all the ducks.
    @GetMapping
    public List<DuckResponse> getAllDucks(){
        return duckService.getAllDucks();
    }

    @GetMapping("/{id}")
    public DuckResponse getDuckById(long id){
        return duckService.getDuckById(id);
    }

    @PostMapping("/{id}")
    public ResponseEntity<DuckResponse> addDuck(@PathVariable long id, DuckRequest duckRequest) {
        DuckResponse duckResponse = duckService.addDuck(id, duckRequest);
        return new ResponseEntity<>(duckResponse, HttpStatus.CREATED);
    };

}