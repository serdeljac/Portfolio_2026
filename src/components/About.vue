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

</style>