<template>
    <section class="about" id="about">
      <div class="reveal">
        <p class="section-label">// 01 — About</p>
        <h2 class="section-title">Who I Am</h2>
        <div class="section-divider"></div>
      </div>
      <div class="about-grid reveal">
        <div class="about-text">
          <p>
            Hi! I'm <strong>Stjepan Erdeljac</strong>, a self-taught web developer based in Vancouver.
            I fell in love with coding after building my first static page — seeing something come alive in a browser felt like magic.
          </p>
          <p>
            I'm early in my journey but I'm a fast learner who obsesses over
            <strong>clean markup, readable code,</strong> and user-friendly interfaces.
            I care about the details — the micro-interactions, the spacing, the little things users notice without knowing why.
          </p>
          <p>
            When I'm not coding, I'm probably hiking, taking photos, or deep in a rabbit hole about design history.
          </p>
        </div>
        <div>
          <p class="section-label" style="margin-bottom: 0.5rem;">// Stack</p>
          <div class="skills-grid">
            <div class="skill-chip" v-for="skill in skills" :key="skill">{{ skill }}</div>
          </div>
          <p class="section-label" style="margin-bottom: 0.5rem; margin-top: 1.5rem">// Tech Skills</p>
          <div class="skills-grid">
            <div class="skill-chip" v-for="skill in techSkills" :key="skill">{{ skill }}</div>
          </div>
          <p class="section-label" style="margin-bottom: 0.5rem; margin-top: 1.5rem">// Ai</p>
          <div class="skills-grid">
            <div class="skill-chip" v-for="skill in aiSkills" :key="skill">{{ skill }}</div>
          </div>
          <p class="section-label" style="margin-bottom: 0.5rem; margin-top: 1.5rem">// Soft Skills</p>
          <div class="skills-grid">
            <div class="skill-chip" v-for="skill in softskills" :key="skill">{{ skill }}</div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
    const skills = [
      'HTML / CSS (SASS)', 'JavaScript / Typescript', 'Vue.js', 'Git & GitHub',
      'Responsive Design', 'Figma', 'Node.js (basics)', 'REST APIs'
    ];

    const techSkills = [
      'Microsoft Excel', 'Adobe Photoshop', 'Adobe Illustrator'
    ];

    const aiSkills = [
      'Claude Code',
    ]

    const softskills = [
      'Flexibility & Adaptability', 'Communication', 'Creative Problem-Solving', 
      'Teamwork Skills', 'Time Management Skills'
    ]
        
</script>

<script lang="ts">
    export default {
        name: "COMP_NAME"
    }
</script>

<style scoped lang="scss">
  .about {
    background: $bg2;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
    max-width: 1600px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .about-text {
    font-size: 0.92rem;
    line-height: 1.9;
    color: $muted;
    font-weight: 300;

    p + p {
      margin-top: 1.2rem;
    }

    strong {
      color: $text;
      font-weight: 400;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
  }

  .skill-chip {
    padding: 0.6rem 1rem;
    background: $surface;
    border: 1px solid $border;
    border-radius: 4px;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: $muted;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: border-color 0.2s, color 0.2s;

    &:hover {
      border-color: rgba($accent, 0.3);
      color: $text;
    }

    &::before {
      content: '';
      width: 5px;
      height: 5px;
      background: $accent2;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
</style>