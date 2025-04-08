<div class="shelf">
  <div class="bracket" style="left: 10%"></div>
  <div class="bracket" style="left: 45%"></div>
  <div class="bracket" style="left: 80%"></div>
</div>

<style>
  :root {
    --shelf-colour: #C68642;
    --bracket-colour: #8D5D2A;
    --shadow-colour: rgba(0, 0, 0, 0.2);
  }

  .shelf {
    position: relative;
    height: 40px;
    background-color: var(--shelf-colour);
  }

  .bracket {
    position: absolute;
    bottom: -29px;
    width: 30px;
    height: 30px;
    background-color: var(--bracket-colour);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  }

  .shelf::after {
    content: '';
    position: absolute;
    bottom: -200%;
    left: 0;
    width: 100%;
    height: 300%;
    background-color: var(--shadow-colour);
    z-index: -1;
    transform: skew(30deg);
    transform-origin: top left;
  }
</style> 