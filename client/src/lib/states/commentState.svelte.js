import { browser } from "$app/environment";
import * as commentsApi from "$lib/apis/commentsApi";

let commentState = $state({});

const initPostComments = async (communityId, postId) => {
    if (!browser) return;
    commentState[postId] = await commentsApi.readComments(communityId, postId) || [];
}

const useCommentState = () => {
    return {
        get comments() {
            return commentState;
        },
        addComment: async (communityId, postId, comment) => {
            const newComment = await commentsApi.createComment(communityId, postId, comment);
            const comments = commentState[postId] || [];
            comments.push(newComment);
            commentState[postId] = comments;
        },
        removeComment: async (communityId, postId, comment) => {
            const removed = await commentsApi.deleteComment(communityId, postId, comment.id);
            if (commentState[postId]) {
                commentState[postId] = commentState[postId].filter(c => c.id !== removed.id);
            }
        },
    };
};

export { initPostComments, useCommentState };
