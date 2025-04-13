package duck.dragonhack.duckhubapi.services.Impl;

import duck.dragonhack.duckhubapi.DTOs.PostRequest;
import duck.dragonhack.duckhubapi.DTOs.PostResponse;
import duck.dragonhack.duckhubapi.models.Post;
import duck.dragonhack.duckhubapi.repositories.ChallengeRepository;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import duck.dragonhack.duckhubapi.repositories.PostRepository;
import duck.dragonhack.duckhubapi.repositories.UserRepository;
import duck.dragonhack.duckhubapi.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final DuckRepository duckRepository;
    private final ChallengeRepository challengeRepository;

    @Autowired
    public PostServiceImpl(UserRepository userRepository, PostRepository postRepository, DuckRepository duckRepository, ChallengeRepository challengeRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.duckRepository = duckRepository;
        this.challengeRepository = challengeRepository;
    }

    @Override
    public PostResponse addPost(PostRequest postRequest) {
        Post post = postRequest.RequestToPost();
        post.setUser(userRepository.findById(postRequest.getUserId()).orElse(null));
        post.setDuck(duckRepository.findById(postRequest.getDuckId()).orElse(null));
        post.setChallenge(challengeRepository.findById(postRequest.getChallengeId()).orElse(null));
        post.setStatus("COMPLETED");
        postRepository.save(post);
        return PostToResponse(post);

    }

    @Override
    public List<PostResponse> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        return posts.stream()
                .map(this::PostToResponse)
                .collect(Collectors.toList());
    }

    public PostResponse PostToResponse(Post post) {
        PostResponse postResponse = new PostResponse();
        postResponse.setId(post.getId());
        postResponse.setPhoto(post.getPhoto());
        postResponse.setTimestamp(post.getTimestamp());
        postResponse.setStatus(post.getStatus());
        postResponse.setUserId(post.getUser().getId());
        postResponse.setDuckId(post.getDuck().getId());
        postResponse.setChallengeId(post.getChallenge().getId());
        return postResponse;
    }
}
