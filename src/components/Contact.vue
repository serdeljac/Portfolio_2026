<template>
    <section class="contact" id="contact">
      <div class="reveal">
        <p class="section-label">// 03 — Contact</p>
        <h2 class="section-title">Let's Talk</h2>
        <div class="section-divider"></div>
      </div>
      <div class="contact-inner reveal">
        <p class="contact-desc">
          Follow me for daily updates on my progress. 
        </p>
        <div class="contact-links">

          <a href="https://x.com/serdeljac" class="contact-item">
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

          <a href="https://www.linkedin.com/in/serdeljac/" class="contact-item">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">LinkedIn</div>
              <div class="contact-item-value">linkedin.com/in/stjepanerdeljac</div>
            </div>
          </a>

        </div>






        <p class="contact-desc">
          I'm actively looking for opportunities — freelance projects, internships, or junior roles.
          If you think we'd work well together, I'd love to hear from you.
        </p>
        <div class="contact-links">

          <a href="mailto:hi@stjepanerdeljac.com" class="contact-item">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 8l10 7 10-7"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">Email</div>
              <div class="contact-item-value">hi@stjepanerdeljac.com</div>
            </div>
          </a>

          <a href="https://https://github.com/serdeljac" class="contact-item">
            <div class="contact-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <div>
              <div class="contact-item-label">GitHub</div>
              <div class="contact-item-value">github.com/stjepanerdeljac</div>
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

    &-inner {
      max-width: 900px;
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
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

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

  .contact-item-label {
    @include uppercase-label(0.7rem, 0.1em);
    color: $muted;
  }

  .contact-item-value {
    font-size: 0.88rem;
    color: $text;
  }
</style>