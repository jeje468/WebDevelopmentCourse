<script>
    import { usePostState } from "$lib/states/postState.svelte.js";
    import {useCommunityState} from "$lib/states/communityState.svelte.js";

    let{ communityId, postId } = $props();

    let postState = usePostState();
    let communityState = useCommunityState();

    let community = $derived(communityState.communities.find(c => c.id === communityId));
    let post = $derived(postState.posts[communityId]?.find(p => p.id === postId));

</script>

{#if community && post}
  <h1>{post.title}</h1>

  <p>{post.content}</p>
{:else}
  <p>Loading...</p>
{/if}