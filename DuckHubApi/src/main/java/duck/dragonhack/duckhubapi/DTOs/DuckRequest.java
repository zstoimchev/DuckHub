package duck.dragonhack.duckhubapi.DTOs;

import duck.dragonhack.duckhubapi.models.Duck;



public class DuckRequest {
    private String name;
    private String photo;

    public DuckRequest() {
    }

    public DuckRequest(String name, String photo) {
        this.name = name;
        this.photo = photo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Duck toDuck() {
        Duck duck = new Duck();
        duck.setName(this.name);
        duck.setPhoto(this.photo);
        duck.setLevel(1);
        return duck;
    }
}
