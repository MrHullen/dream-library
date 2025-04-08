<script>
  import { urlFor } from './image';

  export let book;
</script>

<figure>
  <img src={urlFor(book.cover).width(150).url()} alt="Cover of {book.title} by {book.author}" />
</figure>

<style>
  figure, img {
    width: 150px;
    min-height: 200px;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: bottom;
    position: relative;
  }

  figure::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: -8px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
</style>