<script>
  import { useCommunityState } from "$lib/states/communityState.svelte.js";

  let communityState = useCommunityState();

  const addCommunity = (e) => {
    e.preventDefault();

    const community = Object.fromEntries(new FormData(e.target));
    communityState.addCommunity(community);
    e.target.reset();
  };
</script>

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