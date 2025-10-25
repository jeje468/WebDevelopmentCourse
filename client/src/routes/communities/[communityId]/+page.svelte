<script>
    import Community from "$lib/components/communities/Community.svelte";

    import PostForm from "$lib/components/posts/PostForm.svelte";
    import PostList from "$lib/components/posts/PostList.svelte";

    import { initCommunity } from "$lib/states/communityState.svelte.js";
    import { initCommunityPosts } from "$lib/states/postState.svelte.js";
  
  let { data } = $props();

  let communityId = parseInt(data.communityId);

  $effect(() => {
    initCommunity(communityId);
    initCommunityPosts(communityId);
  });
</script>

<Community communityId={communityId} />

<PostList communityId={communityId} />

<PostForm communityId={communityId} />