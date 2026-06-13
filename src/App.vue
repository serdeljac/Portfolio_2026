<template>
  <div>
    <div id="cursor-dot"></div>
    <div id="cursor-ring"></div>

    <NavigationComp />
    <HeroComp :scroll="scroll" :mouse="mouse" />
    <AboutComp />
    <ProjectsComp />
    <ContactComp />
    <FooterComp />

  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const scroll = ref(0);
  const mouse = ref({ x: 0, y: 0 });
  let scrollHandler: any, mouseMoveHandler: any;

  onMounted(() => {
          // Cursor
          const dot: any = document.getElementById('cursor-dot');
          const ring: any = document.getElementById('cursor-ring');
          let ringX = 0, ringY = 0, dotX = 0, dotY = 0, raf: any;
          let cx = 0, cy = 0;

          mouseMoveHandler = (e: any) => {
            cx = e.clientX; cy = e.clientY;
            mouse.value = { x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 };
          };

          function animateCursor() {
            dotX += (cx - dotX) * 0.9;
            dotY += (cy - dotY) * 0.9;
            ringX += (cx - ringX) * 0.12;
            ringY += (cy - ringY) * 0.12;
            dot.style.left = dotX + 'px';
            dot.style.top = dotY + 'px';
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            raf = requestAnimationFrame(animateCursor);
          }
          animateCursor();

          document.addEventListener('mousemove', mouseMoveHandler);

          const hoverEls = document.querySelectorAll('a, button, .project-card, .skill-chip');
          hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
          });

          // Scroll-based parallax + reveal
          scrollHandler = () => {
            scroll.value = window.scrollY;
            document.querySelectorAll('.reveal').forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight * 0.88) {
                el.classList.add('visible');
              }
            });
          };
          window.addEventListener('scroll', scrollHandler, { passive: true });
          scrollHandler();

          onUnmounted(() => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('scroll', scrollHandler);
            cancelAnimationFrame(raf);
          });
        });


</script>

<script lang="ts">
  import NavigationComp from './components/Navigation.vue'
  import HeroComp from './components/Hero.vue'
  import AboutComp from './components/About.vue'
  import ProjectsComp from './components/Projects.vue'
  import ContactComp from './components/Contact.vue'
  import FooterComp from './components/Footer.vue'

  export default {
    name: 'Root Component',
    components: {NavigationComp, HeroComp, AboutComp, ProjectsComp, ContactComp, FooterComp}
  }
</script>

<style scoped lang="scss">
  // ── Custom cursor (position is driven from JS in onMounted) ──
  #cursor-dot {
    width: 8px;
    height: 8px;
    background: $accent;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease, background 0.2s;
  }

  #cursor-ring {
    width: 36px;
    height: 36px;
    border: 1.5px solid $accent;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.25s, height 0.25s, background 0.25s, border-color 0.25s;

    &.hover {
      width: 60px;
      height: 60px;
      background: rgba($accent, 0.08);
      border-color: $accent2;
    }
  }
</style>