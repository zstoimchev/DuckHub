package duck.dragonhack.duckhubapi.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
public class DuckResponse {
    private Long id;
    private String name;
    private String photo;
    private int level;
    private Long userId;

    public DuckResponse(Long id, String name, String photo, int level, Long userId) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.level = level;
        this.userId = userId;
    }
}
