<script>
    import { usePostState } from "$lib/states/postState.svelte.js";
    import {useCommunityState} from "$lib/states/communityState.svelte.js";

    let { communityId, postId } = $props();

    let postIdInt = $derived(parseInt(postId));
    let communityIdInt = $derived(parseInt(communityId));
    console.log("Post.svelte - communityId:", communityIdInt, "postId:", postIdInt);

    let postState = usePostState();

    let post = $derived(postState.posts[communityIdInt]?.find(p => p.id === postIdInt));

</script>

{#if post}
  <h1>{post.title}</h1>

  <p>{post.content}</p>
{:else}
  <p>Loading...</p>
{/if}