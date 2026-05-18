<template>
    <section class="hero" id="hero">
      <div class="hero-bg">
        <div class="hero-grid parallax-layer" :style="{ transform: `translateY(${scroll * 0.15}px)` }"></div>
        <div class="hero-orb orb1 parallax-layer" :style="{ transform: `translate(${mouse.x * 0.025}px, ${mouse.y * 0.025}px)` }"></div>
        <div class="hero-orb orb2 parallax-layer" :style="{ transform: `translate(${-mouse.x * 0.015}px, ${-mouse.y * 0.015}px)` }"></div>
      </div>

      <div class="hero-content">
        <div class="hero-tag">Available for projects
          <br />
          Accepting in-house, hybrid, and remote roles.
        </div>
        <h1 class="hero-name">
          <div class="line1">Stjepan</div>
          <div class="line2">Erdeljac</div>
        </h1>
        <p class="hero-subtitle">
          Junior web developer crafting clean interfaces and thoughtful digital experiences.
          Learning every day — one commit at a time.
        </p>
        <div class="hero-ctas">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-ghost">Get in Touch</a>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
</template>


<script lang="ts">
    export default {
        name: "Hero Banner",
        props: ['scroll', 'mouse']
    }
</script>

<style scoped lang="scss">

</style>