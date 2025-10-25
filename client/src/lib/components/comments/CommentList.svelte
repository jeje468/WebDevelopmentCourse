<script>
    import { useCommentState } from "$lib/states/commentState.svelte.js";

    let {communityId, postId} = $props();
    let commentState = useCommentState();
</script>

<ul>
    {#each commentState.comments[postId] as comment}
        <li>
            <p>{comment.content}</p>
            <button onclick={() => commentState.removeComment(communityId, postId, comment)}>Remove</button>
        </li>
    {/each}
</ul>