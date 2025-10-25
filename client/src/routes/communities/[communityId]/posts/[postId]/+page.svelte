<script>
    import Post from "$lib/components/posts/Post.svelte";

    import CommentList from "$lib/components/comments/CommentList.svelte";
    import CommentForm from "$lib/components/comments/CommentForm.svelte";

    import { initCommunityPost } from "$lib/states/postState.svelte.js";
    import { initPostComments } from "$lib/states/commentState.svelte.js";

    let { data } = $props();

    let postId = $derived(parseInt(data.postId));
    let communityId = $derived(parseInt(data.communityId));

    $effect(() => {
        initCommunityPost(communityId, postId);
        initPostComments(communityId, postId);
    });
</script>

<Post communityId={communityId} postId={postId} />

<CommentList communityId={communityId} postId={postId} />

<CommentForm communityId={communityId} postId={postId} />