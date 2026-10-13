<script setup>
import { motion } from 'motion-v'
import fotoSaid from './assets/foto-said.jpg'

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Kontak', href: '#kontak' },
]

// Daftar keahlian bernomor, mengikuti pola daftar klien 01-17 di blunar
const keahlian = [
  'PHP',
  'Laravel',
  'Next.js',
  'HTML5 & CSS3',
  'JavaScript',
  'Vue.js',
  'TypeScript',
  'MySQL',
  'SQL Server',
  'Git & GitHub',
  'Composer & npm',
  'Nginx',
  'Linux Ubuntu',
  'Windows',
]

const kontakItems = [
  {
    label: 'Email',
    value: 'msaidabdillah18@gmail.com',
    href: 'mailto:msaidabdillah18@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+62 857-5264-6247',
    href: 'https://wa.me/6285752646247',
  },
]
</script>

<template>
  <div class="page">
    <!-- ===== NAVBAR ===== -->
    <motion.header
      class="navbar"
      :initial="{ y: -50, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
    >
      <div class="container navbar-inner">
        <a href="#" class="logo display">Said Abdillah</a>
        <nav class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>
    </motion.header>

    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-left">
          <motion.span
            class="badge-dot"
            :initial="{ opacity: 0, y: 12 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            Terbuka untuk peluang
          </motion.span>

          <motion.h1
            class="hero-name display"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.1 }"
          >
            Said<br />Abdillah
          </motion.h1>

          <motion.p
            class="hero-tagline display"
            :initial="{ opacity: 0, y: 24 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.25 }"
          >
            Web · Laravel · Vue.js
          </motion.p>

          <motion.p
            class="hero-desc"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.4 }"
          >
            Web developer yang membangun website &amp; aplikasi web modern,
            responsif, dan fungsional — dari backend Laravel hingga frontend Vue.
          </motion.p>

          <motion.div
            class="hero-actions"
            :initial="{ opacity: 0, y: 16 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.55 }"
          >
            <a href="mailto:msaidabdillah18@gmail.com" class="btn-dark">Hubungi Saya</a>
            <a href="https://wa.me/6285752646247" class="btn-line">WhatsApp</a>
          </motion.div>
        </div>

        <motion.div
          class="hero-photo-wrap"
          :initial="{ opacity: 0, scale: 0.94 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.8, delay: 0.3 }"
        >
          <img :src="fotoSaid" alt="Foto Said Abdillah" class="hero-photo" />
        </motion.div>
      </div>
    </section>

    <!-- ===== TENTANG ===== -->
    <section id="tentang" class="section">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="route-label">/tentang</span>
          <h2 class="big-statement display">
            Saya membangun produk digital yang modern, responsif,
            dan benar-benar menjawab kebutuhan.
          </h2>
          <p class="section-text">
            Saya tertarik pada teknologi Laravel, Vue.js, dan pengembangan solusi digital.
            Dengan semangat belajar dan eksplorasi teknologi, saya terus mengembangkan
            kemampuan untuk menciptakan produk digital yang efektif, berkualitas,
            dan memberikan pengalaman pengguna yang baik.
          </p>
        </motion.div>

        <!-- statistik besar seperti blunar -->
        <motion.div
          class="stats"
          :initial="{ opacity: 0, y: 24 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.15 }"
        >
          <div class="stat">
            <span class="stat-number display">14+</span>
            <span class="stat-label">Teknologi<br />dikuasai</span>
          </div>
          <div class="stat">
            <span class="stat-number display">Full-Stack</span>
            <span class="stat-label">Backend &amp;<br />Frontend</span>
          </div>
          <div class="stat">
            <span class="stat-number display">100%</span>
            <span class="stat-label">Semangat<br />belajar</span>
          </div>
        </motion.div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== KEAHLIAN ===== -->
    <section id="keahlian" class="section">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="route-label">/keahlian</span>
          <h2 class="big-statement display">Tech stack yang saya gunakan.</h2>
        </motion.div>

        <div class="skill-list">
          <motion.div
            v-for="(skill, i) in keahlian"
            :key="skill"
            class="skill-row"
            :initial="{ opacity: 0, y: 16 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }"
          >
            <span class="skill-number display">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="skill-name display">{{ skill }}</span>
            <span class="skill-arrow">→</span>
          </motion.div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== KONTAK ===== -->
    <section id="kontak" class="section">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="route-label">/kontak</span>
          <h2 class="big-statement display">Mari bekerja sama.</h2>
          <p class="section-text">
            Punya proyek, ide, atau sekadar ingin berdiskusi soal teknologi?
            Hubungi saya lewat kanal di bawah.
          </p>
        </motion.div>

        <div class="kontak-list">
          <motion.a
            v-for="(item, i) in kontakItems"
            :key="item.label"
            :href="item.href"
            class="kontak-row"
            :initial="{ opacity: 0, y: 16 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.4, delay: i * 0.1 }"
          >
            <span class="kontak-label">{{ item.label }}</span>
            <span class="kontak-value display">{{ item.value }}</span>
            <span class="skill-arrow">→</span>
          </motion.a>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
      <div class="container footer-inner">
        <span>© {{ new Date().getFullYear() }} Said Abdillah</span>
        <span class="footer-links">
          <a href="mailto:msaidabdillah18@gmail.com">Email</a>
          <a href="https://wa.me/6285752646247">WhatsApp</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

/* ===== NAVBAR ===== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--ink);
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--gray);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--ink);
}

/* ===== HERO ===== */
.hero {
  padding: 90px 0 70px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero-name {
  font-size: clamp(3.2rem, 9vw, 7rem);
  line-height: 0.95;
  font-weight: 700;
  margin: 26px 0 18px;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
  font-weight: 500;
  color: var(--gray);
  margin-bottom: 22px;
}

.hero-desc {
  color: var(--gray);
  max-width: 480px;
  font-size: 1.02rem;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-dark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-dark:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.btn-line {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--ink);
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn-line:hover {
  transform: translateY(-2px);
  background: var(--soft);
}

/* foto */
.hero-photo-wrap {
  display: flex;
  justify-content: center;
}

.hero-photo {
  width: min(340px, 100%);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 24px;
  border: 1px solid var(--line);
}

/* ===== SECTIONS ===== */
.section {
  padding: 90px 0;
}

.big-statement {
  font-size: clamp(1.7rem, 4.2vw, 3rem);
  line-height: 1.15;
  font-weight: 600;
  max-width: 900px;
  margin-bottom: 22px;
}

.section-text {
  color: var(--gray);
  max-width: 620px;
  font-size: 1.02rem;
}

/* statistik */
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.stat {
  border-left: 1px solid var(--line);
  padding-left: 20px;
}

.stat-number {
  display: block;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
}

.stat-label {
  color: var(--gray);
  font-size: 0.9rem;
  margin-top: 6px;
  display: inline-block;
}

/* ===== DAFTAR KEAHLIAN ===== */
.skill-list {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 18px 6px;
  border-bottom: 1px solid var(--line);
  transition: background 0.2s ease, padding-left 0.2s ease;
}

.skill-row:hover {
  background: var(--soft);
  padding-left: 14px;
}

.skill-number {
  color: var(--gray);
  font-size: 0.85rem;
  font-weight: 500;
  min-width: 34px;
}

.skill-name {
  font-size: clamp(1.1rem, 2.6vw, 1.7rem);
  font-weight: 600;
}

.skill-arrow {
  margin-left: auto;
  color: var(--gray);
  transition: transform 0.2s ease, color 0.2s ease;
}

.skill-row:hover .skill-arrow {
  transform: translateX(4px);
  color: var(--ink);
}

/* ===== KONTAK ===== */
.kontak-list {
  margin-top: 40px;
  border-top: 1px solid var(--line);
}

.kontak-row {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 24px 6px;
  border-bottom: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
  transition: background 0.2s ease, padding-left 0.2s ease;
}

.kontak-row:hover {
  background: var(--soft);
  padding-left: 14px;
}

.kontak-label {
  color: var(--gray);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  min-width: 90px;
}

.kontak-value {
  font-size: clamp(1.05rem, 2.4vw, 1.5rem);
  font-weight: 600;
}

.kontak-row:hover .skill-arrow {
  transform: translateX(4px);
  color: var(--ink);
}

/* ===== FOOTER ===== */
.footer {
  border-top: 1px solid var(--line);
  padding: 24px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--gray);
  font-size: 0.88rem;
}

.footer-links {
  display: flex;
  gap: 18px;
}

.footer-links a {
  color: var(--gray);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--ink);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 820px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero-photo-wrap {
    order: -1;
  }

  .hero-photo {
    width: min(240px, 70%);
  }

  .hero {
    padding: 56px 0 48px;
    text-align: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section {
    padding: 64px 0;
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 0.82rem;
  }
}
</style>
