<template>
  <div>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

    <NavigationComp />


    <section class="hero" id="hero">
      <div class="hero-bg">
        <!-- <div class="hero-grid parallax-layer" :style="{ transform: `translateY(${scroll * 0.15}px)` }"></div>
        <div class="hero-orb orb1 parallax-layer" :style="{ transform: `translate(${mouse.x * 0.025}px, ${mouse.y * 0.025}px)` }"></div>
        <div class="hero-orb orb2 parallax-layer" :style="{ transform: `translate(${-mouse.x * 0.015}px, ${-mouse.y * 0.015}px)` }"></div> -->
      </div>

      <div class="hero-content">
        <div class="hero-tag">Available for projects</div>
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


      <AboutComp />
    <ProjectsComp />
    <ContactComp />
    <FooterComp />


  </div>
</template>


<script lang="ts">
  import NavigationComp from './components/Navigation.vue'
  import AboutComp from './components/About.vue'
  import ProjectsComp from './components/Projects.vue'
  import ContactComp from './components/Contact.vue'
  import FooterComp from './components/Footer.vue'

  import { ref } from 'vue';

  export default {
    name: 'Root Component',
    components: {NavigationComp, AboutComp, ProjectsComp, ContactComp, FooterComp},
    data() {
      return {
        scroll: '' as any,
        mouse: '' as any,
        raf: '' as any
      }
    },
  mounted() {
      const scroll = ref(0);
      const mouse = ref({ x: 0, y: 0 });
      let scrollHandler, mouseMoveHandler;

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
  },
  unmounted() {
      document.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('scroll', scrollHandler);
        cancelAnimationFrame(raf);
  }
}
</script>