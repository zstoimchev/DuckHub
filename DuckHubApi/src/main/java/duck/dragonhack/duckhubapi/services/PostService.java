package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.PostRequest;
import duck.dragonhack.duckhubapi.DTOs.PostResponse;

public interface PostService {
    PostResponse addPost(PostRequest postRequest);
}
