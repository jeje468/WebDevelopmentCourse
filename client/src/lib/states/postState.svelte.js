import { browser } from "$app/environment";
import * as postsApi from "$lib/apis/postsApi";

let postState = $state({});

const initCommunityPosts = async (communityId) => {
    if (!browser) {
        return;
    }
    postState[communityId] = await postsApi.readPosts(communityId);
}

const initCommunityPost = async (communityId, postId) => {
    if (!browser) {
        return;
    }
    const post = await postsApi.readPost(communityId, postId);
    if (post && !postState[communityId]?.find((p) => p.id === post.id)) {
        if (!postState[communityId]) {
            postState[communityId] = [];
        }
        postState[communityId].push(post);
    }
}

const usePostState = () => {
    return {
        get posts(){
            return postState;
        },
        addPost: async (communityId, post) => {
            const newPost = await postsApi.createPost(communityId, post);
            const posts = postState[communityId] || [];
            posts.push(newPost);
            postState[communityId] = posts;
        },
        removePost: async (communityId, post) => {
            const removed = await postsApi.deletePost(communityId, post.id);
            if (postState[communityId]) {
                postState[communityId] = postState[communityId].filter(p => p.id !== removed.id);
            }
        },
    };

};

export { initCommunityPosts, initCommunityPost, usePostState };