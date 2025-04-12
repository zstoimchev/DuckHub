package duck.dragonhack.duckhubapi.DTOs;


import duck.dragonhack.duckhubapi.models.Duck;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DuckRequest {
    private String name;
    private String photo;


    public Duck toDuck() {
        Duck duck = new Duck();
        duck.setName(this.name);
        duck.setPhoto(this.photo);
        duck.setLevel(1);
        return duck;
    }
}