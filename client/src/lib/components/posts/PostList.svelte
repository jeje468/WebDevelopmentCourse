<script>
    import { usePostState } from "$lib/states/postState.svelte.js";

    let {communityId} = $props();
    let postState = usePostState();
</script>

<ul>
    {#each postState.posts[communityId] as post}
        <li>
            <a href={`/communities/${communityId}/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </a>
            <p>{post.content}</p>
            <button onclick={() => postState.removePost(communityId, post)}>Remove</button>
        </li>
    {/each}
</ul>