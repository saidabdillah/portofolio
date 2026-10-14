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
  { group: 'Bahasa Pemrograman', items: ['PHP', 'JavaScript', 'TypeScript'] },
  { group: 'Framework & Library', items: ['Laravel', 'Next.js', 'Vue.js', 'React'] },
  { group: 'Database SQL', items: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server'] },
  { group: 'Database NoSQL', items: ['MongoDB'] },
]

// highlight di bawah foto
const highlights = [
  { top: '11', label: 'Teknologi<br />dikuasai' },
  { icon: 'globe', label: 'Web' },
  { icon: 'spark', label: 'Pengembang<br />Full-Stack' },
]

// marquee ticker: nama + detail seperti "Succinct $55M Series A" di blunar
const marqueeItems = [
  { name: 'Laravel', detail: 'Framework Backend' },
  { name: 'Vue.js', detail: 'Framework Frontend' },
  { name: 'TypeScript', detail: 'Bahasa Pemrograman' },
  { name: 'Next.js', detail: 'Framework Full-Stack' },
  { name: 'MySQL', detail: 'Database SQL' },
  { name: 'PostgreSQL', detail: 'Database SQL' },
  { name: 'MongoDB', detail: 'Database NoSQL' },
]

const kontakItems = [
  { label: 'Email', value: 'msaidabdillah18@gmail.com', href: 'mailto:msaidabdillah18@gmail.com', external: false },
  { label: 'WhatsApp', value: '+62 857-5264-6247', href: 'https://wa.me/6285752646247', external: true },
]

// state pill: lingkaran oranye bergeser kiri ↔ kanan.
// Kiri  = teks "Geser panah ke kanan untuk lihat email"
// Kanan = alamat email muncul (teks jadi link mailto)
import { ref, computed } from 'vue'
const emailRevealed = ref(false)

const pillText = computed(() =>
  emailRevealed.value ? 'msaidabdillah18@gmail.com' : 'Geser panah ke kanan untuk lihat email'
)

function revealEmail() {
  // klik: geser kanan (reveal) ↔ kiri (teks awal)
  emailRevealed.value = !emailRevealed.value
}

const sosmed = [
  { label: 'Instagram', handle: '@sxidlent', href: 'https://www.instagram.com/sxidlent/' },
  { label: 'WhatsApp', handle: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
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
          <span class="badge-dot nav-badge">Terbuka untuk kerja</span>
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

        <!-- highlights kanan: template seragam horizontal (lead fixed-width + label) -->
        <motion.div
          class="hero-highlights"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.7 }"
        >
          <div v-for="h in highlights" :key="h.label" class="hl">
            <span class="hl-lead">
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
            </span>
            <span class="hl-label" v-html="h.label" />
          </div>
        </motion.div>
      </div>

      <!-- marquee ticker: "My clients recently raised" ala blunar -->
      <motion.p
        class="marquee-title"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.6, delay: 0.85 }"
      >
        ✳ Tech stack yang saya kuasai:
      </motion.p>
      <motion.div
        class="marquee"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.8, delay: 0.9 }"
      >
        <div class="marquee-track">
          <template v-for="n in 3" :key="n">
            <span v-for="item in marqueeItems" :key="item + n" class="marquee-item display">
              {{ item.name }} <span class="marquee-accent">{{ item.detail }}</span>
              <span class="marquee-sep">·</span>
            </span>
          </template>
        </div>
      </motion.div>
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

    <!-- ===== /KONTAK: ala blunar — pill reveal email + badge berputar ===== -->
    <section id="kontak" class="section kontak-hero">
      <div class="container">
        <div class="kontak-top">
          <motion.div
            :initial="{ opacity: 0, y: 14 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.6 }"
            :transition="{ duration: 0.5 }"
          >
            <span class="route-label">/new_project</span>
            <h2 class="kontak-heading display">Mari wujudkan<br />sesuatu yang istimewa</h2>
          </motion.div>
          <motion.span
            class="badge-dot"
            :initial="{ opacity: 0, scale: 0.9 }"
            :whileInView="{ opacity: 1, scale: 1 }"
            :inViewOptions="{ once: true }"
            :transition="{ duration: 0.4 }"
          >
            Terbuka untuk kerja
          </motion.span>
        </div>

        <!-- pill raksasa: drag panah kiri-kanan untuk ganti teks -->
        <motion.button
          type="button"
          class="kontak-pill"
          :class="{ revealed: emailRevealed }"
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :whileInView="{ opacity: 1, y: 0, scale: 1 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.15 }"
          @click="revealEmail"
        >
          <span
            class="kontak-pill-btn"
            :class="{ revealed: emailRevealed }"
            aria-hidden="true"
          >
            <span class="kontak-pill-arrow">→</span>
          </span>
          <span class="kontak-pill-text display">
            {{ pillText }}
          </span>
        </motion.button>

        <!-- kanal lain: WA & Instagram -->
        <div class="kontak-links">
          <motion.a
            v-for="(s, i) in sosmed"
            :key="s.label"
            :href="s.href"
            class="kontak-link"
            target="_blank"
            rel="noopener noreferrer"
            :initial="{ opacity: 0, y: 16 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.45, delay: 0.25 + i * 0.08 }"
            :whileHover="{ y: -3 }"
          >
            <span class="kontak-link-label">{{ s.label }}</span>
            <span class="kontak-link-value display">{{ s.handle }}</span>
            <span class="kontak-link-arrow">↗</span>
          </motion.a>
        </div>
      </div>

      <!-- badge teks melingkar berputar -->
      <motion.div
        class="rotating-badge"
        :initial="{ opacity: 0, scale: 0.6 }"
        :whileInView="{ opacity: 1, scale: 1 }"
        :inViewOptions="{ once: true }"
        :transition="{ type: 'spring', stiffness: 120, damping: 14, delay: 0.4 }"
      >
        <svg viewBox="0 0 120 120" class="badge-svg">
          <defs>
            <path id="circlePath" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
          </defs>
          <text class="badge-text">
            <textPath href="#circlePath">
              SIAP KERJA · MARI WUJUDKAN YANG BARU · SIAP KERJA · MARI WUJUDKAN YANG BARU ·
            </textPath>
          </text>
        </svg>
        <span class="badge-center display">↗</span>
      </motion.div>
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
  overflow: hidden;
  padding: 56px 0 40px;
}

/* teks raksasa layer belakang — absolute, tidak memengaruhi layout */
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
  font-size: clamp(5rem, 20vw, 18rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.9;
  color: rgb(247, 247, 249);
  white-space: nowrap;
  user-select: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: min(1100px, 92%);
  margin: 0 auto;
  /* GRID: bio kiri, foto tengah, highlights kanan — 3 kolom sejajar */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 32px;
  align-items: center;
}

/* bio kiri */
.hero-bio {
  max-width: 300px;
  font-size: clamp(0.92rem, 1.8vw, 1rem);
  line-height: 1.55;
  color: var(--ink);
}

.bio-mark {
  color: #f59e0b;
  margin-right: 6px;
}

/* foto oval kapsul di tengah */
.hero-photo-oval {
  width: min(360px, 60vw);
  aspect-ratio: 3 / 4;
  border-radius: 999px;
  background: linear-gradient(160deg, #fbd3e6 0%, #fde8dd 55%, #fdf6ee 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(251, 190, 216, 0.4);
  justify-self: center;
}

.hero-photo {
  width: 88%;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.13));
}

/* highlights kanan — semua item satu template horizontal */
.hero-highlights {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: end;
}

.hl {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* slot elemen depan (angka/ikon) lebar tetap agar kolom teks sejajar */
.hl-lead {
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
}

.hl-top {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.03em;
}

.hl-icon {
  width: 34px;
  height: 34px;
  color: var(--ink);
}

.hl-label {
  font-size: 0.85rem;
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

/* ===== KONTAK HERO (ala blunar) ===== */
.kontak-hero {
  position: relative;
  padding: 110px 0 90px;
}

.kontak-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.kontak-heading {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.08;
  max-width: 700px;
  margin-top: -8px;
}

/* pill raksasa reveal email — slider */
.kontak-pill {
  position: relative;
  display: flex;
  align-items: center;
  width: min(720px, 100%);
  margin: 48px 0 0;
  padding: 14px 18px 14px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  cursor: pointer;
  touch-action: none;
  user-select: none;
  text-align: left;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.kontak-pill:hover {
  border-color: var(--ink);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.07);
}

.kontak-pill.revealed {
  border-color: var(--ink);
}

/* lingkaran oranye yang digeser — absolute, kiri ↔ kanan via transisi left */
.kontak-pill-btn {
  position: absolute;
  left: 10px;
  top: 50%;
  width: 62px;
  height: 62px;
  margin-top: -31px;
  border-radius: 50%;
  background: #f59e0b;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  cursor: grab;
  /* animasi geser kiri ↔ kanan */
  transition: left 0.4s cubic-bezier(0.34, 1.3, 0.64, 1);
}

.kontak-pill.revealed .kontak-pill-btn {
  left: calc(100% - 72px);
  cursor: pointer;
}

.kontak-pill-text {
  margin-left: 76px;
  font-size: clamp(1rem, 2.6vw, 1.5rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--gray);
  transition: color 0.25s ease;
}

.kontak-pill.revealed .kontak-pill-text {
  color: var(--ink);
}

/* kanal lain di bawah pill */
.kontak-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.kontak-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 22px;
  border: 1px solid var(--line);
  border-radius: 999px;
  text-decoration: none;
  color: var(--ink);
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.kontak-link:hover {
  border-color: var(--ink);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.kontak-link-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gray);
}

.kontak-link-value {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.kontak-link-arrow {
  color: var(--gray);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
}

.kontak-link:hover .kontak-link-arrow {
  transform: translate(2px, -2px);
  color: var(--ink);
}

/* badge teks melingkar berputar */
.rotating-badge {
  position: absolute;
  right: 6%;
  bottom: 90px;
  width: 120px;
  height: 120px;
}

.badge-svg {
  width: 100%;
  height: 100%;
  animation: spin 16s linear infinite;
}

.badge-text {
  font-size: 10px;
  letter-spacing: 0.22em;
  fill: var(--ink);
  font-weight: 500;
}

.badge-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ===== MARQUEE TICKER ===== */
.marquee-title {
  color: var(--gray);
  font-size: 0.9rem;
  padding: 0 3%;
  margin: 44px 0 8px;
  position: relative;
  z-index: 1;
}

.marquee {
  overflow: hidden;
  background: var(--soft);
  padding: 14px 0;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  /* fade halus di kedua tepi */
  mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
}

.marquee-track {
  display: inline-flex;
  animation: marquee 24s linear infinite;
}

.marquee-item {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.marquee-accent {
  color: var(--gray);
  font-weight: 400;
}

.marquee-sep {
  color: var(--gray);
  padding: 0 14px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
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
@media (max-width: 980px) {
  /* tablet & mobile: hero jadi satu kolom, urutan bio → foto → highlights */
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
    justify-items: center;
    text-align: center;
  }

  .hero-bio {
    max-width: 480px;
  }

  .hero-photo-oval {
    width: min(320px, 72vw);
  }

  .hero-highlights {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .rotating-badge {
    display: none;
  }
}

@media (max-width: 820px) {
  .hero {
    padding: 32px 0 40px;
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

  .kontak-pill-text {
    font-size: 0.95rem;
  }
}
</style>
