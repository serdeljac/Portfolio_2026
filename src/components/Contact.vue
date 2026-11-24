<template>
    <section class="contact" id="contact">

      <div class="contact-top">
        <div class="reveal">
          <p class="section-label">// 03 — Contact</p>
          <h2 class="section-title">Let's Talk</h2>
        </div>

        <div class="contact-focus reveal">
          <div class="contact-focus-col">
            <p class="contact-focus-label">Direct Contact</p>
            <a href="mailto:hi@stjepanerdeljac.com" class="contact-item contact-item--primary">
              <div class="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 8l10 7 10-7"/>
                </svg>
              </div>
              <div class="contact-item-text">
                <div class="contact-item-label">Email me</div>
                <div class="contact-item-value">hi@stjepanerdeljac.com</div>
              </div>
              <svg class="contact-item-arrow" viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>

          <div class="contact-focus-col">
            <p class="contact-focus-label">Repositories</p>
            <a href="https://github.com/serdeljac" class="contact-item contact-item--outline" target="_blank">
              <div class="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div class="contact-item-text">
                <div class="contact-item-label">GitHub</div>
                <div class="contact-item-value">github.com/<wbr>serdeljac</div>
              </div>
              <svg class="contact-item-arrow" viewBox="0 0 12 12" fill="none" stroke-width="1.5" aria-hidden="true">
                <path d="M2 10L10 2M5 2h5v5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="contact-sociallinks reveal">
        <p class="contact-desc">
          Follow me for daily updates on my progress.
        </p>

        <div class="contact-links">
          <a href="https://x.com/serdeljac" class="contact-item" target="_blank">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="var(--accent)" style="stroke: none;">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">X</div>
              <div class="contact-item-value">x.com/serdeljac</div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/serdeljac/" class="contact-item" target="_blank">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">LinkedIn</div>
              <div class="contact-item-value">linkedin.com/in/serdeljac</div>
            </div>
          </a>

          <a href="https://www.facebook.com/Stjepan.Erdeljac" class="contact-item" target="_blank">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">Facebook</div>
              <div class="contact-item-value">facebook.com/Stjepan.Erdeljac</div>
            </div>
          </a>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="scss">
  .contact {
    background: $bg2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // ── Top row: section heading left, featured contact cards right ──
  .contact-top {
    width: 100%;
    max-width: 1312px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    .section-title {
      margin-bottom: 0;
    }

    @include mobile {
      flex-direction: column;
      align-items: stretch;
    }
  }

  // Two equal columns, so both featured cards are always the same size.
  .contact-focus {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 384px));
    gap: 2.1rem;

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
      grid-auto-rows: 1fr; // stacked cards stay the same height even if one wraps
      gap: 1.5rem;
    }
  }

  .contact-focus-col {
    display: flex;
    flex-direction: column;
    min-width: 0;

    .contact-item {
      flex: 1;
      width: 100%;
      min-width: 0;
      margin-bottom: 0;
    }
  }

  .contact-focus-label {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7;
    text-transform: uppercase;
    color: $text;
    margin-bottom: 0.5rem;
  }

  // ── Social row ──
  .contact-sociallinks {
    margin-top: 7rem;
    max-width: 100%;

    @include mobile {
      margin-top: 4rem;
      width: 100%;
    }
  }

  .contact-desc {
    font-size: 0.9rem;
    color: $muted;
    line-height: 1.8;
    font-weight: 300;
    margin: 1.5rem;
    text-align: center;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 10px;

    @include mobile {
      flex-direction: column;
    }
  }

  // ── Contact card ──
  .contact-item {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    min-width: 300px;
    background: $surface;
    border: 1px solid $border;
    border-radius: 6px;
    text-decoration: none;
    transition: border-color 0.2s, transform 0.2s;

    &:hover {
      border-color: rgba($accent, 0.25);
      transform: translateX(4px);
    }

    @include mobile {
      min-width: 0;
      margin-bottom: 0;
    }

    // Featured: solid accent card (Email) — styled like the hero's primary CTA,
    // with a soft glow at rest and a lift + stronger glow on hover.
    &--primary {
      background: $accent;
      border-color: $accent;
      box-shadow: 0 10px 30px -12px rgba($accent, 0.55);
      transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;

      .contact-item-label,
      .contact-item-value,
      .contact-item-arrow {
        color: #060a09;
      }

      .contact-item-label {
        font-weight: 500;
      }

      &:hover {
        border-color: $accent;
        filter: brightness(1.05);
        transform: translateY(-2px);
        box-shadow: 0 14px 34px -10px rgba($accent, 0.7);

        .contact-item-arrow {
          transform: translateX(4px);
        }
      }
    }

    // Featured: outlined accent card (GitHub) — same size, quieter.
    &--outline {
      border-color: rgba($accent, 0.6);
      transition: transform 0.2s, border-color 0.2s, background 0.2s;

      .contact-item-label {
        color: $text;
      }

      .contact-item-arrow {
        color: $subtle;
      }

      &:hover {
        border-color: $accent;
        background: rgba($accent, 0.04);
        transform: translateY(-2px);

        .contact-item-arrow {
          color: $accent;
          transform: translate(2px, -2px);
        }
      }
    }

    &--primary,
    &--outline {
      &:focus-visible {
        outline: 2px solid $accent2;
        outline-offset: 3px;
      }
    }

    &--primary .contact-item-icon,
    &--outline .contact-item-icon {
      background: $green;

      svg {
        stroke: #fff;
      }
    }
  }

  .contact-item-icon {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: rgba($accent, 0.08);
    @include flex-center;
    flex-shrink: 0;

    svg {
      width: 16px;
      height: 16px;
      stroke: $accent;
    }
  }

  .contact-item-text {
    flex: 1;
    min-width: 0;
  }

  .contact-item-arrow {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    stroke: currentColor;
    transition: transform 0.2s, color 0.2s;
  }

  .contact-item-label {
    @include uppercase-label(0.7rem, 0.1em);
    color: $muted;
  }

  .contact-item-value {
    font-size: 0.88rem;
    color: $text;
  }
</style>
