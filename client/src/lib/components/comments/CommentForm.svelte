<script>
  import { useCommentState } from "$lib/states/commentState.svelte.js";
  import { useAuthState } from "$lib/states/authState.svelte.js";

  let commentState = useCommentState();
  let authState = useAuthState();
  let { communityId, postId } = $props();

  const addComment = (e) => {
    e.preventDefault();

    const comment = Object.fromEntries(new FormData(e.target));
    commentState.addComment(communityId, postId, comment);
    e.target.reset();
  };
</script>

{#if authState.user}
  <form onsubmit={addComment}>
    <label>
      Comment
      <textarea
        id="content"
        name="content"
        placeholder="Comment content"
      ></textarea>
    </label>
    <br />
    <input type="submit" value="Add comment" />
  </form>
{/if}