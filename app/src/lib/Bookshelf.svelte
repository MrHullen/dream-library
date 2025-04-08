<script>
  import Book from './Book.svelte'
  import Shelf from './Shelf.svelte'

  export let books;
</script>

<section style="width: {books.length * 220}px;">
  <article>
    {#each books as book}
      <Book {book} />
    {/each}
  </article>
  
  <Shelf size={books.length} />
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
