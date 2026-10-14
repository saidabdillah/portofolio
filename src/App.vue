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

const sosmed = [
  { label: 'Instagram', handle: '@sxidlent', href: 'https://www.instagram.com/sxidlent/' },
  { label: 'WhatsApp', handle: '+62 857-5264-6247', href: 'https://wa.me/6285752646247' },
]

// ===== slider pill kontak =====
// Lingkaran oranye bisa digeser kiri-kanan.
// Di kanan  → tampil email + link kirim
// Di kiri   → teks ajakan
import { ref, computed } from 'vue'

const emailRevealed = ref(false)
const isDragging = ref(false)
const atRight = ref(false)
const btnLeft = ref('10px')

const BTN = 62      // diameter lingkaran
const PAD = 8       // jarak tepi dalam pill
let pillRect = null

function pillDown(e) {
  e.currentTarget.setPointerCapture?.(e.pointerId)
  // ukur pill (parent), bukan tombol — tombol yang bergerak
  pillRect = e.currentTarget.parentElement.getBoundingClientRect()
  isDragging.value = true
  moveBtnTo(e.clientX)
}

function pillMove(e) {
  if (!isDragging.value || !pillRect) return
  moveBtnTo(e.clientX)
}

function pillUp(e) {
  if (!isDragging.value) return
  isDragging.value = false
  // snap: kanan jika lingkaran berada di paruh kanan pill
  atRight.value = e.clientX - pillRect.left > pillRect.width / 2
  emailRevealed.value = atRight.value
  btnLeft.value = atRight.value
    ? `calc(100% - ${BTN + PAD}px)`
    : `${PAD}px`
  pillRect = null
}

function moveBtnTo(clientX) {
  const x = clientX - pillRect.left - BTN / 2
  const min = PAD
  const max = pillRect.width - BTN - PAD
  const clamped = Math.min(max, Math.max(min, x))
  atRight.value = clamped > max / 2
  btnLeft.value = `${clamped}px`
}
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
          <span class="badge-dot nav-badge">Siap menerima proyek</span>
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
          :style="{ x: bgTextX }"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.2 + i * 0.15 }"
        >
          {{ word }}
        </motion.span>
      </div>

      <div class="container hero-inner">
        <!-- kolom kiri: foto cutout di dalam kapsul -->
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

        <!-- kolom kanan: bio -->
        <div class="hero-right">
          <motion.p
            class="hero-bio"
            :initial="{ opacity: 0, y: 18 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            <svg class="spark" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <line x1="20" y1="5" x2="20" y2="35" />
              <line x1="5" y1="20" x2="35" y2="20" />
              <line x1="9.5" y1="9.5" x2="30.5" y2="30.5" />
              <line x1="30.5" y1="9.5" x2="9.5" y2="30.5" />
              <circle cx="20" cy="20" r="5.5" />
            </svg>
            Saya web developer yang membangun aplikasi web modern — antarmuka
            interaktif, sistem backend, hingga pengelolaan database.
          </motion.p>
        </div>
      </div>

      <!-- baris bawah hero: highlight di atas, judul tech stack di bawahnya -->
      <div class="container hero-bottom">
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

        <motion.p
          class="marquee-title"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.85 }"
        >
          <svg class="spark" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <line x1="20" y1="5" x2="20" y2="35" />
            <line x1="5" y1="20" x2="35" y2="20" />
            <line x1="9.5" y1="9.5" x2="30.5" y2="30.5" />
            <line x1="30.5" y1="9.5" x2="9.5" y2="30.5" />
            <circle cx="20" cy="20" r="5.5" />
          </svg>
          Tech stack yang saya kuasai:
        </motion.p>
      </div>

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
          Muhammad Said Abdillah — Web Developer
        </motion.h2>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.12 }"
        >
          Saya adalah Web Developer yang berfokus pada pengembangan aplikasi web modern,
          mulai dari merancang antarmuka yang interaktif dan responsif, membangun sistem
          backend yang terstruktur, hingga mengelola database relasional maupun
          non-relasional.
        </motion.p>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          Saya memiliki ketertarikan pada pengembangan perangkat lunak yang tidak hanya
          berfungsi dengan baik, tetapi juga dirancang dengan memperhatikan efisiensi,
          skalabilitas, dan pengalaman pengguna. Dengan terus mengeksplorasi teknologi
          dan pendekatan baru, saya berupaya menciptakan solusi digital yang relevan,
          efektif, dan mampu menjawab kebutuhan nyata.
        </motion.p>

        <motion.p
          class="section-text"
          :initial="{ opacity: 0, y: 18 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.28 }"
        >
          Bagi saya, setiap proyek merupakan kesempatan untuk mengembangkan kemampuan,
          memperluas wawasan teknis, dan menghasilkan karya yang memberikan nilai nyata.
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
            Siap menerima proyek
          </motion.span>
        </div>

        <!-- pill slider: geser TOMBOL (bukan seluruh pill) agar teks email tetap bisa diklik -->
        <motion.div
          class="kontak-pill"
          :class="{ revealed: emailRevealed }"
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :whileInView="{ opacity: 1, y: 0, scale: 1 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6, delay: 0.15 }"
        >
          <span
            class="kontak-pill-btn"
            :class="{ dragging: isDragging, atRight: atRight }"
            :style="{ left: btnLeft }"
            @pointerdown="pillDown"
            @pointermove="pillMove"
            @pointerup="pillUp"
            @pointercancel="pillUp"
          >
            <span class="kontak-pill-arrow" :class="{ flip: atRight }">→</span>
          </span>
          <span class="kontak-pill-copy">
            <template v-if="atRight">
              <a href="mailto:msaidabdillah18@gmail.com" class="kontak-pill-title display">msaidabdillah18@gmail.com</a>
              <span class="kontak-pill-sub">Klik untuk kirim email</span>
            </template>
            <template v-else>
              <span class="kontak-pill-title display">Hubungi saya</span>
              <span class="kontak-pill-sub">Geser panah ke kanan untuk melihat email</span>
            </template>
          </span>
        </motion.div>

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
              SIAP KERJA · MARI WUJUDKAN YANG BARU ·
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* dempet: tiga kata menempel satu sama lain, dinaikkan agar
     pusatnya sejajar dengan kapsul foto */
  justify-content: center;
  gap: 0;
  padding: 0 0 0 2%;
  /* digeser naik supaya tepat di tengah kapsul */
  transform: translateY(-19%);
}

.bg-word {
  display: block;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-size: clamp(4rem, 17vw, 15rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.82;
  color: rgb(243, 243, 246);
  white-space: nowrap;
  user-select: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: min(1100px, 92%);
  margin: 0 auto;
  /* 3 kolom: ruang kiri | foto TENGAH | bio kanan */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 48px;
  align-items: start;
}

/* kolom kanan: bio */
.hero-right {
  grid-column: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

/* bio kanan atas */
.hero-bio {
  max-width: 320px;
  font-size: clamp(0.92rem, 1.8vw, 1rem);
  line-height: 1.55;
  color: var(--ink);
}

/* ikon spark hitam (pengganti karakter ✳) */
.spark {
  width: 15px;
  height: 15px;
  color: var(--ink);
  vertical-align: -2px;
  margin-right: 7px;
  flex-shrink: 0;
}

/* foto oval kapsul di TENGAH */
.hero-photo-oval {
  grid-column: 2;
  width: min(340px, 34vw);
  max-height: 52vh;
  aspect-ratio: 3 / 4;
  border-radius: 999px;
  background: linear-gradient(165deg, #9fc2ef 0%, #bcd6f2 55%, #e3effc 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(96, 138, 200, 0.35);
  /* dinaikkan ke atas */
  margin-top: -52px;
}

.hero-photo {
  width: 92%;
  height: auto;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.18));
}

/* ===== baris bawah hero: highlight di atas, judul tech stack di bawahnya ===== */
.hero-bottom {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  margin-top: 26px;
  position: relative;
  z-index: 1;
  /* lebar penuh layar supaya highlight benar-benar mentok kanan */
  width: 100%;
  max-width: none;
  padding-left: 3%;
  padding-right: 3%;
}

/* judul tech stack rata kiri, di bawah highlight */
.marquee-title {
  align-self: flex-start;
}

/* highlights — baris horizontal, mentok KANAN */
.hero-highlights {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 56px;
  align-self: flex-end;
  flex-wrap: wrap;
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
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
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

/* pill slider: lingkaran oranye digeser lewat pointer, snap kiri/kanan */
.kontak-pill {
  position: relative;
  display: flex;
  align-items: center;
  width: min(720px, 100%);
  margin: 48px 0 0;
  padding: 14px 24px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
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

/* lingkaran oranye — posisi left dikontrol JS */
.kontak-pill-btn {
  position: absolute;
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
  touch-action: none;
  user-select: none;
  /* snap halus saat dilepas */
  transition: left 0.3s cubic-bezier(0.34, 1.3, 0.64, 1), transform 0.25s ease;
}

/* saat digenggam: ikuti pointer tanpa transisi */
.kontak-pill-btn.dragging {
  cursor: grabbing;
  transition: none;
}

.kontak-pill-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

/* saat digeser ke kanan, panah menghadap ke kiri (siap kembali) */
.kontak-pill-arrow.flip {
  transform: rotate(180deg);
}

.kontak-pill-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* beri ruang agar tidak tertutup lingkaran yang digeser */
  padding-left: 56px;
  width: 100%;
}

.kontak-pill-title {
  font-size: clamp(1rem, 2.6vw, 1.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-decoration: none;
}

.kontak-pill-sub {
  font-size: clamp(0.82rem, 1.8vw, 0.92rem);
  color: var(--gray);
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
  font-size: 8.5px;
  letter-spacing: 0.14em;
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
  display: inline-flex;
  align-items: center;
  color: var(--gray);
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;
}

.marquee {
  overflow: hidden;
  background: var(--soft);
  padding: 14px 0;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  margin-top: 28px;
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
  /* tablet & mobile: hero satu kolom — bio → foto → highlights, semua center.
     .hero-right dibuka (display: contents) agar bio & highlight jadi item
     grid tersendiri, sehingga bisa disisipkan foto di antaranya. */
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
    justify-items: center;
    text-align: center;
  }

  .hero-right {
    display: contents;
  }

  /* watermark: dempet, dipusatkan vertikal, di paling kiri */
  .hero-bgtext {
    align-items: flex-start;
    justify-content: center;
    gap: 0;
    padding: 0 0 0 8px;
    transform: translateY(-10%);
  }

  .bg-word {
    font-size: clamp(2.6rem, 11vw, 4.5rem);
    line-height: 0.82;
  }

  .hero-bio {
    order: 1;
    max-width: 480px;
    text-align: center;
  }

  /* kapsul tetap dipakai (gradien + shadow), foto di TENGAH */
  .hero-photo-oval {
    grid-column: auto;
    order: 2;
    width: min(300px, 68vw);
    max-height: none;
    margin: 0 auto;
  }

  .hero-photo {
    width: 92%;
  }

  /* baris bawah: tumpuk vertikal, judul rata kiri, highlight penuh lebar */
  .hero-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    margin-top: 30px;
  }

  .marquee-title {
    justify-content: flex-start;
    order: 4;
  }

  .hero-highlights {
    order: 3;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
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
