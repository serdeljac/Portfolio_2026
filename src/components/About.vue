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

        <div class="toolkit">
          <div class="toolkit-head">
            <p class="section-label">// Toolkit</p>
            <p class="toolkit-legend">
              <span class="toolkit-legend-swatch" aria-hidden="true"></span>
              Core stack — what I use daily
            </p>
          </div>

          <div class="toolkit-row" v-for="(group, i) in skillGroups" :key="group.title">
            <h3 class="toolkit-label">
              <span class="toolkit-num">{{ String(i + 1).padStart(2, '0') }}</span>
              {{ group.title }}
            </h3>
            <p v-if="group.asText" class="toolkit-text">{{ group.items.join(' · ') }}</p>
            <ul v-else class="toolkit-chips">
              <li
                v-for="skill in group.items"
                :key="skill"
                class="skill-chip"
                :class="{ 'skill-chip--core': coreSkills.includes(skill) }"
              >{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>
  import { skillGroups, coreSkills } from '../lib/library.ts'
</script>

<script lang="ts">
    export default {
        name: "About"
    }
</script>

<style scoped lang="scss">
  .about {
    background: $bg2;
  }

  .about-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: flex-start;
    max-width: 1312px;

    @include mobile {
      gap: 3rem;
    }
  }

  .about-text {
    flex: 1 1 360px;
    min-width: 0;
    font-size: 0.94rem;
    line-height: 1.9;
    color: $subtle;
    font-weight: 300;

    p + p {
      margin-top: 1.2rem;
    }

    strong {
      color: $text;
      font-weight: 400;
    }
  }

  // ── Toolkit: one row per group, label left + chips right ──
  .toolkit {
    flex: 1.25 1 520px;
    min-width: 0;

    @include mobile {
      flex-basis: 100%;
    }
  }

  .toolkit-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(#fff, 0.08);

    .section-label {
      margin-bottom: 0;
    }
  }

  .toolkit-legend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: $subtle;
  }

  .toolkit-legend-swatch {
    width: 8px;
    height: 8px;
    border-radius: 2px;
    border: 1px solid $accent;
    background: rgba($accent, 0.07);
  }

  .toolkit-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid rgba(#fff, 0.08);
  }

  .toolkit-label {
    flex: 0 0 150px;
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    padding-top: 6px;
    @include uppercase-label(0.7rem, 0.15em);
    font-weight: 400;
    color: $text;

    @include mobile {
      flex-basis: 100%;
      padding-top: 0;
    }
  }

  .toolkit-num {
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    color: $accent;
    opacity: 0.7;
  }

  .toolkit-chips {
    flex: 1 1 280px;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }

  .toolkit-text {
    flex: 1 1 280px;
    min-width: 0;
    padding-top: 4px;
    font-size: 0.82rem;
    line-height: 1.9;
    font-weight: 300;
    color: $subtle;
  }

  .skill-chip {
    padding: 6px 12px;
    background: $bg3;
    border: 1px solid rgba(#fff, 0.09);
    border-radius: 4px;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: $subtle;
    white-space: nowrap;
    transition: border-color 0.2s, color 0.2s;

    &:hover {
      border-color: rgba($accent, 0.3);
      color: $text;
    }

    &--core {
      border-color: $accent;
      background: rgba($accent, 0.07);
      color: $accent;

      &:hover {
        color: $accent;
      }
    }
  }
</style>
