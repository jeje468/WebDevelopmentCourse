<script>
    import {useCommunityState} from "$lib/states/communityState.svelte";

    let communityState = useCommunityState();

    const removeCommunity = (community) => {
        communityState.removeCommunity(community);
    };
</script>

<ul>
    {#each communityState.communities as community}
        <li>
            <a href={`/communities/${community.id}`}>
                <h2>{community.name}</h2>
            </a>
            <p>{community.description}</p>
            <button onclick={() => removeCommunity(community)}>Remove</button>
        </li>
    {/each}
</ul>