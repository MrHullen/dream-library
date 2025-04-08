<script>
  import Bookshelf from "$lib/Bookshelf.svelte";

  export let data;
</script>

<main>
  {#each data.library as collection}
    <Bookshelf books={collection.books} />
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: top;
    gap: 100px;
    max-height: 100vh;
  }
</style>