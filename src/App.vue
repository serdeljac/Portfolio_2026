<template>
  <div>
    <div id="cursor-dot"></div>
    <div id="cursor-ring"></div>

    <NavigationComp />
    <main>
      <HeroComp :scroll="scroll" :mouse="mouse" />
      <AboutComp />
      <ProjectsComp />
      <ContactComp />
    </main>
    <FooterComp />

  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const scroll = ref(0);
  const mouse = ref({ x: 0, y: 0 });
  let scrollHandler: any, mouseMoveHandler: any;
  let revealObserver: IntersectionObserver | undefined;

  onMounted(() => {
          // Cursor
          const dot: any = document.getElementById('cursor-dot');
          const ring: any = document.getElementById('cursor-ring');
          let ringX = 0, ringY = 0, dotX = 0, dotY = 0, raf: any;
          let cx = 0, cy = 0, cursorShown = false;

          mouseMoveHandler = (e: any) => {
            cx = e.clientX; cy = e.clientY;
            // The cursor stays hidden until a mouse actually moves, so it
            // doesn't sit in the top-left corner on touch screens and crawlers.
            if (!cursorShown) {
              cursorShown = true;
              dotX = ringX = cx; dotY = ringY = cy;
              dot.classList.add('active');
              ring.classList.add('active');
            }
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

          // Scroll-based parallax
          scrollHandler = () => {
            scroll.value = window.scrollY;
          };
          window.addEventListener('scroll', scrollHandler, { passive: true });
          scrollHandler();

          // Reveal sections as they come into view. Unlike a scroll listener, an
          // IntersectionObserver also fires when the viewport grows without any
          // scrolling, which is how Google renders the page.
          revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver?.unobserve(entry.target);
              }
            });
          // A fixed margin, not a percentage: in a very tall viewport a percentage
          // would cut off the bottom of the page and never reveal the last section.
          }, { rootMargin: '0px 0px -80px 0px' });
          document.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));

          onUnmounted(() => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('scroll', scrollHandler);
            revealObserver?.disconnect();
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
  // Hidden until the first mouse move adds .active; never shown on touch screens.
  #cursor-dot,
  #cursor-ring {
    opacity: 0;

    &.active {
      opacity: 1;
    }

    @media (hover: none), (pointer: coarse) {
      display: none;
    }
  }

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