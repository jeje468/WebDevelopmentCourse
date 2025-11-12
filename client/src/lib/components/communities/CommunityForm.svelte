<script>
  import { useCommunityState } from "$lib/states/communityState.svelte.js";
  import { useAuthState } from "$lib/states/authState.svelte.js";

  let communityState = useCommunityState();
  let authState = useAuthState();

  const addCommunity = (e) => {
    e.preventDefault();

    const community = Object.fromEntries(new FormData(e.target));
    communityState.addCommunity(community);
    e.target.reset();
  };
</script>

{#if authState.user}
  <form onsubmit={addCommunity}>
    <label>
      Name
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Community name"
      />
    </label>
    <br />
    <label>
      Description
      <textarea
        id="description"
        name="description"
        placeholder="Community description"
      ></textarea>
    </label>
    <br />
    <input type="submit" value="Add community" />
  </form>
{/if}