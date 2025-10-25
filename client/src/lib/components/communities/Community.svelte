<script>
    import {useCommunityState} from "$lib/states/communityState.svelte";

    let {communityId} = $props();

    let communityState = useCommunityState();

    let community = $derived(communityState.communities.find((community) => community.id === communityId));
</script>

{#if community}
  <h2>{community.name}</h2>

  <p>{community.description}</p>
{:else}
  <p>Loading...</p>
{/if}