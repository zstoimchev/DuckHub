package duck.dragonhack.duckhubapi.controllers;


import duck.dragonhack.duckhubapi.DTOs.DuckRequest;
import duck.dragonhack.duckhubapi.DTOs.DuckResponse;
import duck.dragonhack.duckhubapi.services.Impl.DuckServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ducks")
public class DuckController {
    private final DuckServiceImpl duckService;

    public DuckController(DuckServiceImpl duckService) {
        this.duckService = duckService;
    }

    // GET api/ducks/all: Get all ducks
    @GetMapping("/all")
    public List<DuckResponse> getAllDucks() {
        return duckService.getAllDucks();
    }

    // GET api/ducks/{id}: Get a single duck
    @GetMapping("/{id}")
    public DuckResponse getDuckById(long id) {
        return duckService.getDuckById(id);
    }

    // POST api/ducks/add/{id}: Add a duck
    @PostMapping("/add/{id}")
    public ResponseEntity<DuckResponse> addDuck(long id, @RequestBody DuckRequest duckRequest) {
        DuckResponse duckResponse = duckService.addDuck(id, duckRequest);
        return new ResponseEntity<>(duckResponse, HttpStatus.CREATED);
    }

    // GET api/ducks/user/{id}: Get all ducks by user id
    @GetMapping("/user/{id}")
    public List<DuckResponse> getDucksByUserId(long id) {
        return duckService.getDucksByUserId(id);
    }

}