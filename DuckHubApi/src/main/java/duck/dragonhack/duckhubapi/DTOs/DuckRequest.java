package duck.dragonhack.duckhubapi.DTOs;


import duck.dragonhack.duckhubapi.models.Duck;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DuckRequest {
    private String name;
    private String photo;
    private int level;
    private Long userId;


    public Duck toDuck() {
        Duck duck = new Duck();
        duck.setName(this.name);
        duck.setPhoto(this.photo);
        duck.setLevel(this.level);
        return duck;
    }
}