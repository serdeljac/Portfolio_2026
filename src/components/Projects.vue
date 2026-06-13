<template>
    <section id="projects">
      <div class="reveal">
        <p class="section-label">// 02 — Projects</p>
        <h2 class="section-title">Things I've Built</h2>
        <div class="section-divider"></div>
      </div>
      <div class="projects-carousel reveal">

        <button
          class="carousel-btn carousel-btn--prev"
          :disabled="!canScrollPrev"
          @click="scrollByCard(-1)"
          aria-label="Previous projects"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div class="carousel-track" ref="track" @scroll="updateScrollState">
          <div class="project-card" v-for="(project, i) in projects" :key="i">
            <div class="project-num">0{{ i + 1 }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="link" class="project-link" v-for="(link, name) in project.links" :key="name" target="_blank">
                {{ name }}
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M2 10L10 2M5 2h5v5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <button
          class="carousel-btn carousel-btn--next"
          :disabled="!canScrollNext"
          @click="scrollByCard(1)"
          aria-label="Next projects"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div class="carousel-scrollbar" aria-hidden="true">
        <div class="carousel-scrollbar__thumb" :style="thumbStyle"></div>
      </div>
    </section>
</template>

<script lang="ts" setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue';

    const track = ref<HTMLElement | null>(null);
    const canScrollPrev = ref(false);
    const canScrollNext = ref(true);

    // Scrollbar indicator state.
    const thumbRatio = ref(1);      // visible portion of the track (0–1) -> thumb width
    const scrollProgress = ref(0);  // how far through the scroll we are (0–1) -> thumb position

    const thumbStyle = computed(() => ({
      width: `${thumbRatio.value * 100}%`,
      left: `${scrollProgress.value * (1 - thumbRatio.value) * 100}%`,
    }));

    // Scroll one card-width (incl. gap) in the given direction.
    function scrollByCard(direction: number) {
      const el = track.value;
      if (!el) return;
      const card = el.querySelector<HTMLElement>('.project-card');
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = card ? card.offsetWidth + gap : el.clientWidth;
      el.scrollBy({ left: step * direction, behavior: 'smooth' });
    }

    // Keep the prev/next buttons and the scrollbar in sync with scroll position.
    function updateScrollState() {
      const el = track.value;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      canScrollPrev.value = el.scrollLeft > 1;
      canScrollNext.value = el.scrollLeft < maxScroll - 1;
      thumbRatio.value = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1;
      scrollProgress.value = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    }

    onMounted(() => {
      updateScrollState();
      // Track dimensions change with the viewport (mobile <-> desktop, card sizes).
      window.addEventListener('resize', updateScrollState);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScrollState);
    });

    const projects = [
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: 'https://ffxivradar.space/',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        },
      ];
</script>

<script lang="ts">
    export default {
        name: "Projects"
    }
</script>

<style scoped lang="scss">

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  @keyframes textMove {
    0% {transform: translate(0px, 40px)}
    50% {transform: translate(6px, 40px)}
    0% {transform: translate(0px, 40px)}
  }

  .projects-carousel {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 1100px;
  }

  .carousel-track {
    flex: 1;
    min-width: 0; // allow the scroll container to shrink below its content width
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 0.25rem;
    padding: 0.5rem 0.25rem;
    // Hide scrollbar — navigation is via the buttons / swipe.
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @include mobile {
      gap: 1rem;
    }
  }

  .carousel-scrollbar {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 3px;
    margin-top: 2rem;
    border-radius: 2rem;
    background: $border;
    overflow: hidden;

    &__thumb {
      position: absolute;
      top: 0;
      bottom: 0;
      min-width: 24px; // stay visible even when there are many cards
      border-radius: inherit;
      background: linear-gradient(90deg, $accent, $accent2);
      transition: left 0.15s ease, width 0.15s ease;
    }
  }

  .carousel-btn {
    @include flex-center;
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: $surface;
    border: 1px solid $border;
    color: $text;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, opacity 0.2s, background 0.2s;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover:not(:disabled) {
      border-color: rgba($accent, 0.4);
      color: $accent;
      background: rgba($accent, 0.06);
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }

    &--next:disabled::after {
      display: none;
    }

    @include mobile {
      display: none;
    }

    // &--next::after, &--prev::after {
    //   display: block;
    //   position: absolute;
    //   width: 100px;
    //   font-size: 0.8rem;
    //   transform: translate(0px, 40px);
    //   color: $accent;
    //   animation: textMove 1s linear infinite;
    // }

    // &--prev::after {
    //   content: 'More';
    // }

    // &--next::after {
    //   content: 'More ➤';
    // }
  }

  .project-card {
    flex: 0 0 340px;
    scroll-snap-align: start;
    background: $bg2;
    border: 1px solid $border;
    border-radius: 8px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;

    @include mobile {
      flex-basis: 85%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, $accent, $accent2);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      border-color: rgba($accent, 0.2);
      transform: translateY(-4px);

      &::before {
        transform: scaleX(1);
      }
    }
  }

  .project-num {
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    color: $accent;
    margin-bottom: 1.2rem;
    opacity: 0.6;
  }

  .project-title {
    font-family: $font-display;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  .project-desc {
    font-size: 0.82rem;
    line-height: 1.75;
    color: $muted;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.65rem;
    border: 1px solid $border;
    border-radius: 2rem;
    color: $muted;
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .project-link {
    @include uppercase-label(0.75rem, 0.08em);
    color: $accent2;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.2s;

    &:hover {
      color: $accent;
    }

    svg {
      width: 12px;
      height: 12px;
    }
  }
</style>