<script>
    import CommunityForm from "$lib/components/communities/CommunityForm.svelte";
    import CommunityList from "$lib/components/communities/CommunityList.svelte";
    import { initCommunities } from "$lib/states/communityState.svelte";

    $effect(() => {
        initCommunities();
    });
</script>

<h1>Communities</h1>

<CommunityList />

<h2>Add a community</h2>

<CommunityForm />