<script>
    import {useCommunityState} from "$lib/states/communityState.svelte";
    import { useAuthState } from "$lib/states/authState.svelte.js";

    let communityState = useCommunityState();
    let authState = useAuthState();

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
            {#if authState.user?.id === community.created_by}
                <button onclick={() => removeCommunity(community)}>Remove</button>
            {/if}
        </li>
    {/each}
</ul>