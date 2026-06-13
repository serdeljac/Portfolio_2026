<template>
    <footer>
        <span>// stjepan.dev</span>
        <span>Built with <span>Vue 3</span> · {{ new Date().getFullYear() }}</span>
    </footer>
</template>

<script lang="ts">
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  footer {
    padding: 2rem $gutter;
    border-top: 1px solid $border;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.72rem;
    color: $muted;
    letter-spacing: 0.05em;

    span {
      color: $accent;
    }

    @include mobile {
      padding: 2rem $gutter-mobile;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
</style>