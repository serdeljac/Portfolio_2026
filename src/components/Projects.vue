<template>
    <section id="projects">
      <div class="reveal">
        <p class="section-label">// 02 — Projects</p>
        <h2 class="section-title">Things I've Built</h2>
        <div class="section-divider"></div>
      </div>
      <div class="projects-grid reveal">
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
    </section>
</template>

<script lang="ts" setup>
    const projects = [
        {
          title: 'FFXIV Radar',
          desc: 'A guide into the world of Eorzea where the client gamer can find and track when and where nodes appear with the upmost convenience.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          links: {
            live: '#',
            github: 'https://github.com/serdeljac/FFXIVRadarv2',
            vercel: 'https://vercel.com/serdeljac/ffxiv-radarv2'
          },
        }
      ];
</script>

<script lang="ts">
    export default {
        name: "Projects"
    }
</script>

<style scoped lang="scss">

</style>