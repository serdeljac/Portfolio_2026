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
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 $gutter;
    position: relative;
    overflow: hidden;

    @include mobile {
      padding: 0 $gutter-mobile;
    }
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba($accent, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba($accent, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }

  .orb1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba($accent2, 0.15) 0%, transparent 70%);
    top: -100px;
    right: -100px;
  }

  .orb2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba($accent, 0.1) 0%, transparent 70%);
    bottom: -50px;
    left: 10%;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    @include uppercase-label(0.75rem, 0.12em);
    color: $accent;
    margin-bottom: 2rem;
    padding: 0.35rem 0.9rem;
    border: 1px solid rgba($accent, 0.25);
    border-radius: 2rem;
    background: rgba($accent, 0.05);

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background: $accent;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .hero-name {
    font-family: $font-display;
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;

    .line2 {
      color: $accent;
    }
  }

  .hero-subtitle {
    font-size: 1rem;
    color: $muted;
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 3rem;
    font-weight: 300;
  }

  .hero-ctas {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    @include button-base;
    background: $accent;
    color: #060a09;
    font-weight: 400;
    border: none;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba($accent, 0.2);
    }
  }

  .btn-ghost {
    @include button-base;
    background: transparent;
    color: $text;
    border: 1px solid $border;
    transition: border-color 0.2s, color 0.2s;

    &:hover {
      border-color: $accent2;
      color: $accent2;
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    @include uppercase-label(0.65rem, 0.12em);
    color: $muted;
  }

  .scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, $accent, transparent);
    animation: scrollLine 1.5s ease-in-out infinite;
  }

  @keyframes scrollLine {
    0% { transform: scaleY(0); transform-origin: top; opacity: 1; }
    50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
    100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
  }
</style>