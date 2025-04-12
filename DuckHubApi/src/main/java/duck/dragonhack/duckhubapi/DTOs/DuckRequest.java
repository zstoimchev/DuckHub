package duck.dragonhack.duckhubapi.DTOs;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DuckRequest {
    private String name;
    private String photo;
    private int level;
    private Long userId;
}