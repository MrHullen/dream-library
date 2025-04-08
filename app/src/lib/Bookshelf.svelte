<script>
  import Book from './Book.svelte'
  import Shelf from './Shelf.svelte'

  export let shelf
</script>

<section style="width: {shelf.books ? shelf.books.length * 220 : 220}px;">
  <article>
    {#if shelf.books}
      {#each shelf.books as book}
        <Book {book} />
      {/each}
    {:else if !shelf.books}
      <Book book={shelf} />
    {:else}
      <p>No books found</p>
    {/if}
  </article>
  
  <Shelf />
</section>

<style>
  article {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: bottom;
  }
</style>
