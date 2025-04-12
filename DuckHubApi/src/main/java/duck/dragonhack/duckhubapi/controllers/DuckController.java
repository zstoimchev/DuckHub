package duck.dragonhack.duckhubapi.controllers;


import duck.dragonhack.duckhubapi.services.DuckService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ducks")
public class DuckController{


    private final DuckService duckService;

    public DuckController(DuckService duckService){
        this.duckService = duckService;
    }
}