<script>
  import { useAuthState } from "$lib/states/authState.svelte.js";
  const auth = useAuthState();
</script>

{#if auth.user}
  <a href="/communities">Go to communities</a>
{:else}
  <p>Welcome to the home page!</p>
{/if}