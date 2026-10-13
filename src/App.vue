<script setup>
import { motion } from 'motion-v'
import fotoSaid from './assets/foto-said.png'

// ===== DATA =====
const navLinks = [
  { label: '/tentang', href: '#tentang' },
  { label: '/keahlian', href: '#keahlian' },
  { label: '/arah', href: '#arah' },
  { label: '/kontak', href: '#kontak' },
]

// Grid bernomor di PALING ATAS seperti 01-17 klien blunar
const gridTop = [
  'PHP', 'Laravel', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript',
  'MySQL', 'SQL Server', 'Nginx', 'Linux', 'Git', 'GitHub',
  'HTML5', 'CSS3', 'Composer', 'npm',
]

// Marquee seperti "My clients recently raised: Succinct $55M..."
const marqueeItems = [
  'Laravel 13', 'Vue 3', 'TypeScript', 'Next.js', 'MySQL', 'Nginx',
]

// A-D seperti /about blunar
const fokus = [
  { huruf: 'A', teks: 'Pengembangan Web' },
  { huruf: 'B', teks: 'Aplikasi Laravel & Vue' },
  { huruf: 'C', teks: 'Desain Responsif' },
  { huruf: 'D', teks: 'Server & Deploy' },
]

// Domain seperti Web3/AI/AR-VR di blunar
const domains = ['Web', 'Laravel', 'Vue.js', 'Backend & API']

// Weapons of choice
const weapons = [
  { label: 'Backend', value: 'PHP · Laravel · Next.js' },
  { label: 'Frontend', value: 'Vue.js · TypeScript · HTML5/CSS3' },
  { label: 'Database', value: 'MySQL · SQL Server' },
  { label: 'Infrastruktur', value: 'Nginx · Linux Ubuntu · Git · GitHub' },
]

// Kata raksasa abu muda seperti /new_project blunar:
// transform / redefine / emerge / invent / evolve
const kataBesar = ['transform', 'membangun', 'berkarya', 'belajar', 'berkembang']

const kontakItems = [
  { label: 'Email', value: 'msaidabdillah18@gmail.com', href: 'mailto:msaidabdillah18@gmail.com' },
  { label: 'WhatsApp', value: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
]
</script>

<template>
  <div class="page">
    <!-- ===== NAVBAR: nama kecil + tagline, persis blunar ===== -->
    <motion.header
      class="navbar"
      :initial="{ y: -40, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
    >
      <div class="container navbar-inner">
        <div class="nav-brand">
          <span class="nav-name">Said Abdillah</span>
          <span class="nav-tagline">Web x Laravel x Vue</span>
        </div>
        <nav class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>
    </motion.header>

    <!-- ===== TOP: grid bernomor 01-16 DI PALING ATAS seperti blunar ===== -->
    <section class="topgrid">
      <div class="container topgrid-inner">
        <div class="topgrid-count display">16</div>
        <div class="topgrid-cells">
          <motion.div
            v-for="(item, i) in gridTop"
            :key="item"
            class="topgrid-cell"
            :initial="{ opacity: 0, y: 10 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true }"
            :transition="{ duration: 0.35, delay: Math.min(i * 0.03, 0.6) }"
          >
            <span class="topgrid-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="topgrid-name">{{ item }}</span>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- ===== HERO: nama besar + avatar + badge + deskripsi + stats ===== -->
    <section class="hero">
      <div class="container">
        <div class="hero-row">
          <motion.h1
            class="hero-name display"
            :initial="{ opacity: 0, y: 40 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.1, ease: 'easeOut' }"
          >
            Said Abdillah
          </motion.h1>

          <motion.img
            :src="fotoSaid"
            alt="Foto Said Abdillah"
            class="hero-avatar"
            :initial="{ opacity: 0, scale: 0.4, rotate: -10 }"
            :animate="{ opacity: 1, scale: 1, rotate: 0 }"
            :transition="{ type: 'spring', stiffness: 240, damping: 16, delay: 0.4 }"
          />
        </div>

        <motion.div
          class="hero-below"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.5 }"
        >
          <span class="badge-dot">Available for work</span>

          <p class="hero-desc">
            Web developer yang membangun website &amp; aplikasi web modern,
            responsif, dan fungsional — dari backend Laravel hingga frontend Vue.js,
            satu prototype demi satu produk nyata.
          </p>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number display">16</span>
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
          </div>
        </motion.div>
      </div>

      <!-- marquee -->
      <motion.div
        class="marquee"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.8, delay: 0.8 }"
      >
        <div class="marquee-track">
          <template v-for="n in 3" :key="n">
            <span v-for="item in marqueeItems" :key="item + n" class="marquee-item display">
              {{ item }} <span class="marquee-sep">·</span>
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
          Saya membangun produk digital yang modern, responsif, dan benar-benar
          menjawab kebutuhan.
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.12 }"
        >
          Saya tertarik pada teknologi Laravel, Vue.js, dan pengembangan solusi
          digital yang mampu menjawab kebutuhan nyata. Dengan semangat belajar dan
          eksplorasi teknologi, saya terus mengembangkan kemampuan untuk menciptakan
          produk digital yang efektif, berkualitas, dan memberikan pengalaman
          pengguna yang baik.
        </motion.p>

        <!-- domain chips seperti Web3 / AI / AR-VR -->
        <div class="domains">
          <motion.span
            v-for="(d, i) in domains"
            :key="d"
            class="domain-chip display"
            :initial="{ opacity: 0, scale: 0.9 }"
            :whileInView="{ opacity: 1, scale: 1 }"
            :inViewOptions="{ once: true }"
            :transition="{ duration: 0.4, delay: i * 0.07 }"
          >
            {{ d }}
          </motion.span>
        </div>

        <!-- daftar A-D seperti blunar -->
        <div class="fokus-list">
          <motion.div
            v-for="(item, i) in fokus"
            :key="item.huruf"
            class="fokus-row"
            :initial="{ opacity: 0, y: 16 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.45, delay: i * 0.08 }"
          >
            <span class="fokus-huruf display">{{ item.huruf }}</span>
            <span class="fokus-teks display">{{ item.teks }}</span>
          </motion.div>
        </div>

        <!-- weapons of choice -->
        <motion.div
          class="weapons"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.3 }"
          :transition="{ duration: 0.6 }"
        >
          <p class="weapons-title">Tech stack pilihan:</p>
          <div class="weapons-grid">
            <div v-for="w in weapons" :key="w.label" class="weapon">
              <span class="weapon-label">{{ w.label }}</span>
              <span class="weapon-value display">{{ w.value }}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== /KEAHLIAN ===== -->
    <section id="keahlian" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /keahlian
        </motion.span>

        <motion.h2
          class="about-statement display"
          :initial="{ opacity: 0, y: 26 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.65 }"
        >
          Tech stack yang saya gunakan setiap hari.
        </motion.h2>

        <div class="skill-grid">
          <motion.div
            v-for="(item, i) in gridTop"
            :key="'s' + item"
            class="skill-cell"
            :initial="{ opacity: 0, scale: 0.94 }"
            :whileInView="{ opacity: 1, scale: 1 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.38, delay: Math.min(i * 0.035, 0.5) }"
          >
            <span class="skill-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="skill-name display">{{ item }}</span>
          </motion.div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== /ARAH: kata raksasa abu muda seperti /new_project blunar ===== -->
    <section id="arah" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 12 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /arah
        </motion.span>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :inViewOptions="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          Arah yang sedang saya jalani — setiap kata adalah tujuan, bukan sekadar hiasan:
        </motion.p>

        <div class="kata-besar">
          <motion.h3
            v-for="(kata, i) in kataBesar"
            :key="kata"
            class="kata display"
            :initial="{ opacity: 0, y: 60 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }"
          >
            {{ kata }}
          </motion.h3>
        </div>
      </div>
    </section>

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

/* ===== TOP GRID (di paling atas, seperti blunar) ===== */
.topgrid {
  padding: 48px 0 36px;
  border-bottom: 1px solid var(--line);
}

.topgrid-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 36px;
  align-items: start;
}

.topgrid-count {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1;
}

.topgrid-cells {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.topgrid-cell {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  transition: background 0.2s ease;
}

.topgrid-cell:nth-child(4n) {
  border-right: none;
}

.topgrid-cell:hover {
  background: var(--soft);
}

.topgrid-num {
  font-size: 10px;
  color: var(--gray);
  font-weight: 500;
}

.topgrid-name {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

/* ===== HERO ===== */
.hero {
  padding: 80px 0 0;
}

.hero-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-name {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(3.6rem, 12vw, 10rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.05em;
}

/* foto transparan bulat sempurna, wajah fokus di atas */
.hero-avatar {
  width: clamp(76px, 10vw, 120px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
  margin-top: 14px;
}

.hero-below {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
}

.hero-desc {
  color: var(--ink);
  max-width: 520px;
  font-size: 1.05rem;
  line-height: 1.55;
}

.hero-stats {
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.stat-number {
  display: block;
  font-size: 40px;
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.stat-label {
  color: var(--gray);
  font-size: 12px;
  margin-top: 6px;
  display: inline-block;
  line-height: 1.4;
}

/* marquee */
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--line);
  margin-top: 56px;
  padding: 16px 0;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  animation: marquee 20s linear infinite;
}

.marquee-item {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.marquee-sep {
  color: var(--gray);
  padding: 0 12px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
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
  max-width: 600px;
  font-size: 0.98rem;
}

/* ===== DOMAIN CHIPS ===== */
.domains {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.domain-chip {
  padding: 8px 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.domain-chip:hover {
  border-color: var(--ink);
  background: var(--soft);
}

/* ===== DAFTAR A-D ===== */
.fokus-list {
  margin-top: 52px;
  border-top: 1px solid var(--line);
}

.fokus-row {
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 20px 6px;
  border-bottom: 1px solid var(--line);
  transition: background 0.2s ease;
}

.fokus-row:hover {
  background: var(--soft);
}

.fokus-huruf {
  width: 42px;
  height: 42px;
  border: 1px solid var(--ink);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.fokus-teks {
  font-size: clamp(1.15rem, 2.8vw, 1.75rem);
  font-weight: 500;
  letter-spacing: -0.025em;
}

/* ===== WEAPONS OF CHOICE ===== */
.weapons {
  margin-top: 56px;
}

.weapons-title {
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.weapons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
}

.weapon {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.2s ease;
}

.weapon:hover {
  border-color: var(--ink);
}

.weapon-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gray);
}

.weapon-value {
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: -0.015em;
}

/* ===== GRID KEAHLIAN ===== */
.skill-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.skill-cell {
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 22px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 120px;
  transition: background 0.2s ease;
}

.skill-cell:hover {
  background: var(--soft);
}

.skill-number {
  color: var(--gray);
  font-size: 11px;
  font-weight: 500;
}

.skill-name {
  font-size: clamp(0.98rem, 1.7vw, 1.2rem);
  font-weight: 500;
  margin-top: auto;
  letter-spacing: -0.02em;
}

.skill-arrow {
  margin-left: auto;
  color: var(--gray);
  transition: transform 0.2s ease, color 0.2s ease;
}

/* ===== KATA BESAR (mirip /new_project blunar) ===== */
.kata-besar {
  margin-top: 30px;
}

.kata {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(3.4rem, 13vw, 11rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1.02;
  color: rgb(243, 243, 243);
  transition: color 0.3s ease;
  cursor: default;
}

.kata:hover {
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

.kontak-row:hover .skill-arrow {
  transform: translateX(4px);
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
  .topgrid-inner {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .topgrid-cells {
    grid-template-columns: repeat(2, 1fr);
  }

  .topgrid-cell:nth-child(2n) {
    border-right: none;
  }

  .hero {
    padding-top: 52px;
  }

  .hero-stats {
    gap: 32px;
  }

  .section {
    padding: 64px 0;
  }

  .fokus-huruf {
    width: 36px;
    height: 36px;
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
    font-size: 11px;
  }

  .hero-avatar {
    width: 64px;
  }
}
</style>
