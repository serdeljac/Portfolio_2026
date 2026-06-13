<template>
    <nav>
      <a class="nav-logo" href="#"><span>//</span> stjepan.dev</a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Navigation Bar"
        
    }
</script>

<style scoped lang="scss">
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.5rem $gutter;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(12px);
    background: rgba($bg, 0.6);
    border-bottom: 1px solid $border;

    @include mobile {
      padding: 1.2rem $gutter-mobile;
    }
  }

  .nav-logo {
    font-family: $font-display;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    color: $text;
    text-decoration: none;

    span {
      color: $accent;
    }
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;

    @include mobile {
      display: none;
    }

    a {
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: $muted;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $accent;
      }
    }
  }
</style>