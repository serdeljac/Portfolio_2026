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
            <a :href="project.live" class="project-link">
              Live
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M2 10L10 2M5 2h5v5"/>
              </svg>
            </a>
            <a :href="project.github" class="project-link">
              GitHub
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
          desc: 'A clean weather app using the OpenWeatherMap API. Shows hourly forecasts, humidity, and wind speed with animated weather icons.',
          tags: ['Vue.js', 'API', 'CSS Grid'],
          live: '#', github: '#'
        },
        {
          title: 'Task Manager',
          desc: 'A minimal to-do app with local storage persistence, drag-and-drop reordering, and priority labels. My first full CRUD app.',
          tags: ['JavaScript', 'LocalStorage', 'CSS'],
          live: '#', github: '#'
        },
        {
          title: 'Portfolio v1',
          desc: 'My first portfolio — a simple static site that got me my first freelance inquiry. Nothing fancy, but it was a huge milestone.',
          tags: ['HTML', 'CSS', 'Static'],
          live: '#', github: '#'
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