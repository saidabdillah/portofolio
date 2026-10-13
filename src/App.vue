<script setup>
import { motion } from 'motion-v'
import fotoSaid from './assets/foto-said.png'

// ===== DATA =====
const navLinks = [
  { label: '/tentang', href: '#tentang' },
  { label: '/keahlian', href: '#keahlian' },
  { label: '/kontak', href: '#kontak' },
]

// Grid tech bernomor seperti grid klien 01-17 di blunar
const keahlian = [
  'PHP', 'Laravel', 'Next.js', 'HTML5 & CSS3',
  'JavaScript', 'Vue.js', 'TypeScript', 'MySQL',
  'SQL Server', 'Git & GitHub', 'Composer & npm', 'Nginx',
  'Linux Ubuntu', 'Windows',
]

// Daftar A-D seperti /about di blunar
const fokus = [
  { huruf: 'A', teks: 'Pengembangan Web' },
  { huruf: 'B', teks: 'Aplikasi Web Laravel & Vue' },
  { huruf: 'C', teks: 'Desain Responsif' },
  { huruf: 'D', teks: 'Pemeliharaan Server' },
]

const kontakItems = [
  { label: 'Email', value: 'msaidabdillah18@gmail.com', href: 'mailto:msaidabdillah18@gmail.com' },
  { label: 'WhatsApp', value: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
]

// Marquee items seperti "My clients recently raised"
const marqueeItems = [
  'Laravel', 'Vue.js', 'TypeScript', 'Next.js',
  'MySQL', 'Nginx', 'Linux', 'PHP',
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
      <div class="container">
        <motion.p
          class="hero-kicker"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.6 }"
        >
          Web Developer — Indonesia
        </motion.p>

        <div class="hero-name-row">
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
            :initial="{ opacity: 0, scale: 0.5, rotate: -8 }"
            :animate="{ opacity: 1, scale: 1, rotate: 0 }"
            :transition="{ type: 'spring', stiffness: 260, damping: 18, delay: 0.45 }"
          />

          <motion.span
            class="badge-dot hero-badge"
            :initial="{ opacity: 0, y: 14 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.7 }"
          >
            Terbuka untuk peluang
          </motion.span>
        </div>

        <motion.p
          class="hero-desc"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.55 }"
        >
          Saya membangun website &amp; aplikasi web yang modern, responsif, dan
          fungsional — dari backend Laravel hingga frontend Vue.js, satu
          prototype demi satu produk nyata.
        </motion.p>
      </div>

      <!-- marquee berjalan seperti "My clients recently raised" -->
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

    <!-- ===== TENTANG ===== -->
    <section id="tentang" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 14 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /tentang
        </motion.span>

        <motion.h2
          class="big-statement display"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.7 }"
        >
          Saya membangun produk digital yang modern, responsif, dan benar-benar
          menjawab kebutuhan.
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 20 }"
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

        <!-- daftar A-D seperti blunar -->
        <div class="fokus-list">
          <motion.div
            v-for="(item, i) in fokus"
            :key="item.huruf"
            class="fokus-row"
            :initial="{ opacity: 0, y: 18 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.5 }"
            :transition="{ duration: 0.45, delay: i * 0.08 }"
          >
            <span class="fokus-huruf display">{{ item.huruf }}</span>
            <span class="fokus-teks display">{{ item.teks }}</span>
          </motion.div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== KEAHLIAN ===== -->
    <section id="keahlian" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 14 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /keahlian
        </motion.span>

        <motion.h2
          class="big-statement display"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.7 }"
        >
          Tech stack yang saya gunakan.
        </motion.h2>

        <div class="skill-grid">
          <motion.div
            v-for="(skill, i) in keahlian"
            :key="skill"
            class="skill-cell"
            :initial="{ opacity: 0, scale: 0.92 }"
            :whileInView="{ opacity: 1, scale: 1 }"
            :inViewOptions="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.4, delay: Math.min(i * 0.04, 0.45) }"
          >
            <span class="skill-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="skill-name display">{{ skill }}</span>
          </motion.div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- ===== KONTAK ===== -->
    <section id="kontak" class="section">
      <div class="container">
        <motion.span
          class="route-label"
          :initial="{ opacity: 0, y: 14 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.6 }"
          :transition="{ duration: 0.5 }"
        >
          /kontak
        </motion.span>

        <motion.h2
          class="big-statement display"
          :initial="{ opacity: 0, y: 30 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.7 }"
        >
          Mari bekerja sama.
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 20 }"
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
            :whileHover="{ x: 8 }"
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
  padding: 100px 0 0;
}

.hero-kicker {
  color: var(--gray);
  font-size: 0.95rem;
  margin-bottom: 20px;
}

/* nama raksasa + avatar mengambang, persis pola blunar */
.hero-name-row {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.hero-name {
  font-size: clamp(3.4rem, 11vw, 9.5rem);
  line-height: 0.98;
  font-weight: 700;
  letter-spacing: -0.045em;
}

/* foto transparan bulat kecil, melayang di samping nama */
.hero-avatar {
  width: clamp(84px, 11vw, 130px);
  height: auto;
  border-radius: 999px;
  margin-top: -20px;
}

.hero-badge {
  position: absolute;
  right: 0;
  top: 8px;
}

.hero-desc {
  color: var(--gray);
  max-width: 560px;
  font-size: 1.05rem;
  margin: 34px 0 60px;
}

/* marquee */
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 18px 0;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  animation: marquee 22s linear infinite;
}

.marquee-item {
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.marquee-sep {
  color: var(--gray);
  padding: 0 14px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
}

/* ===== SECTIONS ===== */
.section {
  padding: 96px 0;
}

.big-statement {
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
  line-height: 1.14;
  font-weight: 650;
  max-width: 920px;
  margin-bottom: 24px;
}

.section-text {
  color: var(--gray);
  max-width: 620px;
  font-size: 1.03rem;
}

/* ===== DAFTAR A-D ===== */
.fokus-list {
  margin-top: 56px;
  border-top: 1px solid var(--line);
}

.fokus-row {
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 22px 6px;
  border-bottom: 1px solid var(--line);
  transition: background 0.2s ease;
}

.fokus-row:hover {
  background: var(--soft);
}

.fokus-huruf {
  width: 44px;
  height: 44px;
  border: 1px solid var(--ink);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
}

.fokus-teks {
  font-size: clamp(1.2rem, 3vw, 1.9rem);
  font-weight: 600;
}

/* ===== GRID KEAHLIAN ===== */
.skill-grid {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.skill-cell {
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 26px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  min-height: 130px;
  transition: background 0.2s ease;
}

.skill-cell:hover {
  background: var(--soft);
}

.skill-number {
  color: var(--gray);
  font-size: 0.78rem;
  font-weight: 500;
}

.skill-name {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  font-weight: 600;
  margin-top: auto;
}

.skill-arrow {
  margin-left: auto;
  color: var(--gray);
  transition: transform 0.2s ease, color 0.2s ease;
}

/* ===== KONTAK ===== */
.kontak-list {
  margin-top: 44px;
  border-top: 1px solid var(--line);
}

.kontak-row {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 26px 6px;
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
  .hero {
    padding-top: 64px;
  }

  .hero-badge {
    position: static;
    margin-top: 18px;
  }

  .hero-name-row {
    gap: 16px;
  }

  .hero-desc {
    margin: 28px 0 44px;
  }

  .section {
    padding: 64px 0;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 0.82rem;
  }

  .fokus-huruf {
    width: 36px;
    height: 36px;
  }
}
</style>
