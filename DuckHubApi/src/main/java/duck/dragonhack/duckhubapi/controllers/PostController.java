package duck.dragonhack.duckhubapi.controllers;

import duck.dragonhack.duckhubapi.DTOs.PostRequest;
import duck.dragonhack.duckhubapi.DTOs.PostResponse;
import duck.dragonhack.duckhubapi.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/add")
    public PostResponse addPost(@RequestBody PostRequest postRequest) {
        return postService.addPost(postRequest);
    }
}
