package duck.dragonhack.duckhubapi.services;

import duck.dragonhack.duckhubapi.DTOs.PostRequest;
import duck.dragonhack.duckhubapi.DTOs.PostResponse;

import java.util.List;

public interface PostService {
    PostResponse addPost(PostRequest postRequest);

    List<PostResponse> getAllPosts();
}
