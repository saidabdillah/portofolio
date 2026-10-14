<script setup>
import { motion } from 'motion-v'
import { useScroll, useTransform } from 'motion-v'
import fotoSaid from './assets/foto-said.png'

const { scrollY } = useScroll()
const bgTextX = useTransform(scrollY, [0, 1200], [0, -160])
const photoY = useTransform(scrollY, [0, 800], [0, 50])

// ===== DATA =====
const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Kontak', href: '#kontak' },
]

// teks raksasa di belakang foto
const bgWords = ['DEVELOPER', 'CREATOR', 'BUILDER']

// Tech Stack terstruktur
const techStack = [
  { group: 'Programming Languages', items: ['PHP', 'JavaScript', 'TypeScript'] },
  { group: 'Frameworks & Libraries', items: ['Laravel', 'Next.js', 'Vue.js', 'React'] },
  { group: 'SQL Databases', items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server'] },
  { group: 'NoSQL Databases', items: ['MongoDB'] },
]

// highlight di bawah foto
const highlights = [
  { top: '11', label: 'Teknologi<br />dikuasai' },
  { icon: 'globe', label: 'Web &<br />Mobile-Ready' },
  { icon: 'spark', label: 'Full-Stack<br />Developer' },
]

const kontakItems = [
  { label: 'Email', value: 'msaidabdillah18@gmail.com', href: 'mailto:msaidabdillah18@gmail.com' },
  { label: 'WhatsApp', value: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
]

const sosmed = [
  { label: 'Instagram', handle: '@sxidlent', href: 'https://www.instagram.com/sxidlent/' },
  { label: 'WhatsApp', handle: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
  { label: 'Email', handle: 'msaidabdillah18@gmail.com', href: 'mailto:msaidabdillah18@gmail.com' },
]
</script>

<template>
  <div class="page">
    <!-- ===== NAVBAR ===== -->
    <motion.header
      class="navbar"
      :initial="{ y: -40, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
    >
      <div class="container navbar-inner">
        <div class="nav-brand">
          <span class="nav-name">Said Abdillah</span>
          <span class="nav-tagline">Web Developer</span>
        </div>
        <nav class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
          <span class="badge-dot nav-badge">Available for work</span>
        </nav>
      </div>
    </motion.header>

    <!-- ===== HERO: teks raksasa di belakang + foto oval di tengah ===== -->
    <section class="hero">
      <!-- teks raksasa layer belakang, parallax saat scroll -->
      <div class="hero-bgtext" aria-hidden="true">
        <motion.span
          v-for="(word, i) in bgWords"
          :key="word"
          class="bg-word display"
          :style="{ x: bgTextX, top: `${16 + i * 30}%` }"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.2 + i * 0.15 }"
        >
          {{ word }}
        </motion.span>
      </div>

      <div class="container hero-inner">
        <!-- bio kiri atas -->
        <motion.p
          class="hero-bio"
          :initial="{ opacity: 0, y: 18 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          <span class="bio-mark">✳</span>
          Saya web developer yang membangun aplikasi web modern — antarmuka
          interaktif, sistem backend, hingga pengelolaan database.
        </motion.p>

        <!-- foto oval kapsul, pusat halaman -->
        <motion.div
          class="hero-photo-oval"
          :style="{ y: photoY }"
          :initial="{ opacity: 0, y: 50, scale: 0.95 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ type: 'spring', stiffness: 160, damping: 20, delay: 0.3 }"
        >
          <motion.img
            :src="fotoSaid"
            alt="Foto Said Abdillah"
            class="hero-photo"
            :initial="{ opacity: 0, scale: 1.15, y: 30 }"
            :animate="{ opacity: 1, scale: 1, y: 0 }"
            :transition="{ type: 'spring', stiffness: 130, damping: 18, delay: 0.55 }"
          />
        </motion.div>

        <!-- highlights kanan bawah -->
        <motion.div
          class="hero-highlights"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.7 }"
        >
          <div v-for="h in highlights" :key="h.label" class="hl">
            <span v-if="h.top" class="hl-top display">{{ h.top }}</span>
            <svg v-else-if="h.icon === 'globe'" class="hl-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4">
              <circle cx="20" cy="20" r="13" />
              <ellipse cx="20" cy="20" rx="6" ry="13" />
              <line x1="7" y1="20" x2="33" y2="20" />
            </svg>
            <svg v-else class="hl-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4">
              <line x1="20" y1="6" x2="20" y2="34" />
              <line x1="6" y1="20" x2="34" y2="20" />
              <line x1="10" y1="10" x2="30" y2="30" />
              <line x1="30" y1="10" x2="10" y2="30" />
              <circle cx="20" cy="20" r="5" />
            </svg>
            <span class="hl-label" v-html="h.label" />
          </div>
        </motion.div>
      </div>
    </section>

    <!-- ===== /TENTANG ===== -->
    <section id="tentang" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /tentang
        </motion.span>

        <motion.h2
          class="about-statement display"
          :initial="{ opacity: 0, y: 26 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.65 }"
        >
          Setiap proyek adalah kesempatan untuk meningkatkan kemampuan
          dan menciptakan solusi digital yang bermanfaat.
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.12 }"
        >
          Saya adalah seorang Web Developer yang berfokus pada pengembangan aplikasi
          web modern, mulai dari membangun antarmuka yang interaktif hingga mengembangkan
          sistem backend dan mengelola database. Saya juga memiliki ketertarikan pada
          pengelolaan database relasional maupun non-relasional. Saya senang mempelajari
          teknologi baru, memecahkan masalah, dan mengeksplorasi pendekatan yang lebih
          efektif dalam pengembangan perangkat lunak.
        </motion.p>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== /TECH STACK ===== -->
    <section id="tech" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /tech-stack
        </motion.span>

        <motion.h2
          class="about-statement display"
          :initial="{ opacity: 0, y: 26 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.65 }"
        >
          Teknologi yang saya gunakan.
        </motion.h2>

        <div class="tech-groups">
          <motion.div
            v-for="(group, gi) in techStack"
            :key="group.group"
            class="tech-group"
            :initial="{ opacity: 0, y: 24 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.55, delay: gi * 0.08 }"
          >
            <div class="tech-group-head">
              <span class="tech-group-num display">{{ String(gi + 1).padStart(2, '0') }}</span>
              <span class="tech-group-title display">{{ group.group }}</span>
            </div>
            <div class="tech-items">
              <span v-for="item in group.items" :key="item" class="tech-item display">
                {{ item }}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== /KONTAK ===== -->
    <section id="kontak" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /kontak
        </motion.span>

        <motion.h2
          class="about-statement display"
          :initial="{ opacity: 0, y: 26 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.65 }"
        >
          Mari bekerja sama.
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          Punya proyek, ide, atau sekadar ingin berdiskusi soal teknologi?
          Hubungi saya lewat kanal di bawah.
        </motion.p>

        <div class="kontak-list">
          <motion.a
            v-for="(item, i) in kontakItems"
            :key="item.label"
            :href="item.href"
            class="kontak-row"
            :initial="{ opacity: 0, y: 16 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.45, delay: i * 0.1 }"
            :whileHover="{ x: 10 }"
          >
            <span class="kontak-label">{{ item.label }}</span>
            <span class="kontak-value display">{{ item.value }}</span>
            <span class="kontak-arrow">→</span>
          </motion.a>
        </div>

        <!-- sosial media -->
        <motion.div
          class="sosmed"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <p class="sosmed-title">Temukan saya di:</p>
          <div class="sosmed-row">
            <motion.a
              v-for="(s, i) in sosmed"
              :key="s.label"
              :href="s.href"
              class="sosmed-pill"
              :initial="{ opacity: 0, scale: 0.92 }"
              :whileInView="{ opacity: 1, scale: 1 }"
              :inViewOptions="{ once: true }"
              :transition="{ duration: 0.4, delay: 0.25 + i * 0.08 }"
              :whileHover="{ y: -3 }"
            >
              <span class="sosmed-label">{{ s.label }}</span>
              <span class="sosmed-handle">{{ s.handle }}</span>
              <span class="sosmed-arrow">↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="footer">
      <div class="container footer-inner">
        <span>© {{ new Date().getFullYear() }} Said Abdillah</span>
        <span class="footer-links">
          <a href="https://www.instagram.com/sxidlent/">Instagram</a>
          <a href="https://wa.me/6285752646247">WhatsApp</a>
          <a href="mailto:msaidabdillah18@gmail.com">Email</a>
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
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.nav-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav-tagline {
  font-size: 12px;
  color: var(--gray);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  color: var(--gray);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-badge {
  font-size: 11px;
  padding: 6px 14px;
}

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: calc(100vh - 60px);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 40px 0;
}

/* teks raksasa layer belakang */
.hero-bgtext {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-word {
  position: absolute;
  left: -2%;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(6rem, 22vw, 20rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.9;
  color: rgb(243, 243, 243);
  white-space: nowrap;
  user-select: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: min(1100px, 92%);
  margin: 0 auto;
}

/* bio kiri atas */
.hero-bio {
  max-width: 420px;
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  line-height: 1.55;
  color: var(--ink);
}

.bio-mark {
  color: #f59e0b;
  margin-right: 6px;
}

/* foto oval kapsul */
.hero-photo-oval {
  width: min(400px, 78vw);
  margin: 36px auto 0;
  aspect-ratio: 3 / 4;
  border-radius: 999px;
  background: linear-gradient(160deg, #fbd3e6 0%, #fde8dd 55%, #fdf6ee 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(251, 190, 216, 0.4);
}

.hero-photo {
  width: 88%;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.13));
}

/* highlights kanan bawah */
.hero-highlights {
  display: flex;
  justify-content: flex-end;
  gap: 44px;
  margin-top: 36px;
  flex-wrap: wrap;
}

.hl-top {
  display: block;
  font-size: clamp(2rem, 5vw, 2.6rem);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
}

.hl-icon {
  width: clamp(32px, 5vw, 40px);
  height: auto;
  color: var(--ink);
}

.hl-label {
  display: inline-block;
  margin-top: 8px;
  font-size: clamp(0.78rem, 1.7vw, 0.86rem);
  line-height: 1.35;
}

/* ===== SECTIONS ===== */
.section {
  padding: 96px 0;
}

.about-statement {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  line-height: 1.16;
  font-weight: 500;
  letter-spacing: -0.035em;
  max-width: 900px;
  margin-bottom: 22px;
}

.section-text {
  color: var(--gray);
  max-width: 640px;
  font-size: 0.98rem;
}

/* ===== TECH STACK ===== */
.tech-groups {
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.tech-group {
  padding: 30px 6px;
  border-bottom: 1px solid var(--line);
  transition: background 0.2s ease;
}

.tech-group:hover {
  background: var(--soft);
}

.tech-group-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 18px;
}

.tech-group-num {
  color: var(--gray);
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-group-title {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  letter-spacing: -0.025em;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 42px;
}

.tech-item {
  padding: 9px 20px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 500;
  background: #fff;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.tech-item:hover {
  border-color: var(--ink);
  background: var(--soft);
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
  transition: background 0.2s ease;
}

.kontak-row:hover {
  background: var(--soft);
}

.kontak-label {
  color: var(--gray);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  min-width: 90px;
}

.kontak-value {
  font-size: clamp(1.02rem, 2.3vw, 1.45rem);
  font-weight: 500;
  letter-spacing: -0.02em;
}

.kontak-arrow {
  margin-left: auto;
  color: var(--gray);
  transition: transform 0.2s ease, color 0.2s ease;
}

.kontak-row:hover .kontak-arrow {
  transform: translateX(4px);
  color: var(--ink);
}

/* ===== SOSMED ===== */
.sosmed {
  margin-top: 52px;
}

.sosmed-title {
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.sosmed-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.sosmed-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 22px;
  border: 1px solid var(--line);
  border-radius: 999px;
  text-decoration: none;
  color: var(--ink);
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.sosmed-pill:hover {
  border-color: var(--ink);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.sosmed-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gray);
}

.sosmed-handle {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.sosmed-arrow {
  color: var(--gray);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.sosmed-pill:hover .sosmed-arrow {
  transform: translate(2px, -2px);
  color: var(--ink);
}

/* ===== FOOTER ===== */
.footer {
  border-top: 1px solid var(--line);
  padding: 22px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--gray);
  font-size: 12px;
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
  .hero {
    min-height: auto;
    padding: 32px 0 48px;
  }

  .hero-highlights {
    justify-content: flex-start;
    gap: 32px;
  }

  .tech-items {
    padding-left: 0;
  }

  .section {
    padding: 64px 0;
  }
}

@media (max-width: 640px) {
  .nav-tagline {
    display: none;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    display: none;
  }

  .nav-badge {
    display: inline-flex;
  }
}
</style>
