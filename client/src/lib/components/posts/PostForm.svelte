<script>
  import { usePostState } from "$lib/states/postState.svelte.js";
  let postState = usePostState();
  let { communityId } = $props();

  const addPost = (e) => {
    e.preventDefault();

    const post = Object.fromEntries(new FormData(e.target));
    postState.addPost(communityId, post);
    e.target.reset();
  };
</script>

<form onsubmit={addPost}>
  <label>
    Post title
    <input
      id="title"
      name="title"
      type="text"
      placeholder="Post title"
    />
  </label>
  <br />
  <label>
    Content
    <textarea
      id="content"
      name="content"
      placeholder="Post content"
    ></textarea>
  </label>
  <br />
  <input type="submit" value="Add post" />
</form>