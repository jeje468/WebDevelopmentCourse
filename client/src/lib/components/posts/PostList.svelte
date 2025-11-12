<script>
    import { usePostState } from "$lib/states/postState.svelte.js";
    import { useAuthState } from "$lib/states/authState.svelte.js";

    let {communityId} = $props();
    let postState = usePostState();
    let authState = useAuthState();
</script>

<ul>
    {#each postState.posts[communityId] as post}
        <li>
            <a href={`/communities/${communityId}/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </a>
            <p>{post.content}</p>
            {#if authState.user?.id === post.created_by}
                <button onclick={() => postState.removePost(communityId, post)}>Remove</button>
            {/if}
        </li>
    {/each}
</ul>