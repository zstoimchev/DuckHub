package duck.dragonhack.duckhubapi.services.Impl;

import duck.dragonhack.duckhubapi.DTOs.PostRequest;
import duck.dragonhack.duckhubapi.DTOs.PostResponse;
import duck.dragonhack.duckhubapi.models.Post;
import duck.dragonhack.duckhubapi.models.User;
import duck.dragonhack.duckhubapi.repositories.ChallengeRepository;
import duck.dragonhack.duckhubapi.repositories.DuckRepository;
import duck.dragonhack.duckhubapi.repositories.PostRepository;
import duck.dragonhack.duckhubapi.repositories.UserRepository;
import duck.dragonhack.duckhubapi.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        User user = userRepository.findById(postRequest.getUserId()).orElse(null);

        if (user != null) {
            post.setUser(user);
            user.setChallengeCount(user.getChallengeCount() + 1); // Increment challenge_count
            userRepository.save(user); // Save updated user
        }
        post.setDuck(duckRepository.findById(postRequest.getDuckId()).orElse(null));
        post.setChallenge(challengeRepository.findById(postRequest.getChallengeId()).orElse(null));
        post.setStatus("COMPLETED");
        postRepository.save(post);
        return PostToResponse(post);
    }

    public PostResponse PostToResponse(Post post) {
        PostResponse postResponse = new PostResponse();
        postResponse.setId(post.getId());
        postResponse.setPhoto(post.getPhoto());
        postResponse.setTimestamp(post.getTimestamp());
        postResponse.setStatus(post.getStatus());
        postResponse.setUser(post.getUser());
        postResponse.setDuck(post.getDuck());
        postResponse.setChallenge(post.getChallenge());
        return postResponse;
    }
}
