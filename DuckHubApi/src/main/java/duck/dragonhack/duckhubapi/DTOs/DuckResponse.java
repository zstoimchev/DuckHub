package duck.dragonhack.duckhubapi.DTOs;

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
}
