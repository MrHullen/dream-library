<script>
  import Bookshelf from "$lib/Bookshelf.svelte";

  export let data;
</script>

<main>
  {#each data.library as shelf}
    <Bookshelf {shelf} />
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 100px;
    max-height: 100vh;
  }
</style>