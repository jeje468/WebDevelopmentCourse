<script>
  import { useCommentState } from "$lib/states/commentState.svelte.js";
  let commentState = useCommentState();
  let { communityId, postId } = $props();

  const addComment = (e) => {
    e.preventDefault();

    const comment = Object.fromEntries(new FormData(e.target));
    commentState.addComment(communityId, postId, comment);
    e.target.reset();
  };
</script>

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