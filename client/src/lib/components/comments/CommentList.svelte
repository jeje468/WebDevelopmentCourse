<script>
    import { useCommentState } from "$lib/states/commentState.svelte.js";
    import { useAuthState } from "$lib/states/authState.svelte.js";

    let {communityId, postId} = $props();
    let commentState = useCommentState();
    let authState = useAuthState();
</script>

<ul>
    {#each commentState.comments[postId] as comment}
        <li>
            <p>{comment.content}</p>
            {#if authState.user?.id === comment.created_by}
                <button onclick={() => commentState.removeComment(communityId, postId, comment)}>Remove</button>
            {/if}
        </li>
    {/each}
</ul>