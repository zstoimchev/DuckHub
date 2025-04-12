package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Duck;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DuckResponse {
    private Long id;
    private String name;
    private String photo;
    private int level;
    private Long userId;

    public static DuckResponse fromDuck(Duck duck) {
        return new DuckResponse(
                duck.getId(),
                duck.getName(),
                duck.getPhoto(),
                duck.getLevel(),
                duck.getUser() != null ? duck.getUser().getId() : null
        );
    }

}
