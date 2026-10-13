<script setup>
import { motion } from 'motion-v'

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Kontak', href: '#kontak' },
]

const techGroups = [
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['PHP', 'Laravel', 'Next.js'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'TypeScript'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    items: ['MySQL', 'SQL Server'],
  },
  {
    title: 'Tools & Lainnya',
    icon: '🧰',
    items: ['Git', 'GitHub', 'Composer', 'npm', 'Nginx', 'Linux Ubuntu', 'Windows'],
  },
]

const kontakItems = [
  {
    label: 'Email',
    value: 'msaidabdillah18@gmail.com',
    href: 'mailto:msaidabdillah18@gmail.com',
    icon: '✉️',
  },
  {
    label: 'WhatsApp',
    value: '0857-5264-6247',
    href: 'https://wa.me/6285752646247',
    icon: '💬',
  },
]
</script>

<template>
  <div class="page">
    <!-- ===== NAVBAR ===== -->
    <motion.header
      class="navbar"
      :initial="{ y: -60, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
    >
      <div class="container navbar-inner">
        <a href="#" class="logo font-display">Said<span class="text-gradient">.</span>dev</a>
        <nav class="nav-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </nav>
      </div>
    </motion.header>

    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="container hero-inner">
        <motion.p
          class="hero-badge"
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          ✦ Tersedia untuk proyek baru
        </motion.p>

        <motion.h1
          class="hero-title font-display"
          :initial="{ opacity: 0, y: 28 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          Halo, saya <span class="text-gradient">Said Abdillah</span><br />
          Web Developer
        </motion.h1>

        <motion.p
          class="hero-sub"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.35 }"
        >
          Membangun website & aplikasi web yang modern, responsif, dan fungsional —
          dari Laravel di backend hingga Vue.js di frontend.
        </motion.p>

        <motion.div
          class="hero-actions"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.5 }"
        >
          <a href="#kontak" class="btn btn-primary">Hubungi Saya</a>
          <a href="#tentang" class="btn btn-ghost">Tentang Saya ↓</a>
        </motion.div>

        <motion.div
          class="hero-marquee"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.7 }"
        >
          <div class="marquee-track">
            <span v-for="n in 2" :key="n" class="marquee-group font-display">
              Laravel · Vue.js · TypeScript · Next.js · MySQL · Nginx · Linux ·
            </span>
          </div>
        </motion.div>
      </div>
    </section>

    <!-- ===== TENTANG ===== -->
    <section id="tentang" class="section">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 32 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="section-label">Tentang Saya</span>
          <h2 class="section-title">Membangun solusi digital<br />yang <span class="text-gradient">benar-benar terpakai</span></h2>
          <p class="section-text">
            Saya adalah Web Developer yang berfokus pada pengembangan website dan aplikasi web
            yang modern, responsif, dan fungsional. Saya tertarik pada teknologi Laravel, Vue.js,
            dan pengembangan solusi digital yang mampu menjawab kebutuhan nyata. Dengan semangat
            belajar dan eksplorasi teknologi, saya terus mengembangkan kemampuan untuk menciptakan
            produk digital yang efektif, berkualitas, dan memberikan pengalaman pengguna yang baik.
          </p>
        </motion.div>
      </div>
    </section>

    <!-- ===== TECH STACK ===== -->
    <section id="tech" class="section section-alt">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 32 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="section-label">Tech Stack</span>
          <h2 class="section-title">Perangkat yang saya <span class="text-gradient">kuasai</span></h2>
        </motion.div>

        <div class="tech-grid">
          <motion.div
            v-for="(group, i) in techGroups"
            :key="group.title"
            class="card tech-card"
            :initial="{ opacity: 0, y: 40 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.55, delay: i * 0.12 }"
          >
            <div class="tech-icon">{{ group.icon }}</div>
            <h3>{{ group.title }}</h3>
            <div class="tech-tags">
              <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <!-- ===== KONTAK ===== -->
    <section id="kontak" class="section">
      <div class="container">
        <motion.div
          :initial="{ opacity: 0, y: 32 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :inViewOptions="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.6 }"
          class="kontak-head"
        >
          <span class="section-label">Kontak</span>
          <h2 class="section-title">Mari <span class="text-gradient">bekerja sama</span></h2>
          <p class="section-text">
            Punya proyek, ide, atau sekadar ingin berdiskusi soal teknologi?
            Jangan ragu untuk menghubungi saya lewat salah satu kanal di bawah.
          </p>
        </motion.div>

        <div class="kontak-grid">
          <motion.a
            v-for="(item, i) in kontakItems"
            :key="item.label"
            :href="item.href"
            class="card kontak-card"
            :initial="{ opacity: 0, y: 40 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :inViewOptions="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.55, delay: i * 0.12 }"
          >
            <span class="kontak-icon">{{ item.icon }}</span>
            <div>
              <div class="kontak-label">{{ item.label }}</div>
              <div class="kontak-value">{{ item.value }}</div>
            </div>
            <span class="kontak-arrow">→</span>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(5, 6, 10, 0.75);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
}

.nav-links {
  display: flex;
  gap: 26px;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 64px;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  pointer-events: none;
}

.hero-glow-1 {
  width: 480px;
  height: 480px;
  background: #33418f;
  top: -120px;
  right: -80px;
}

.hero-glow-2 {
  width: 380px;
  height: 380px;
  background: #3d2a6e;
  bottom: -100px;
  left: -100px;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  padding: 7px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 22px;
}

.hero-title {
  font-size: clamp(2.4rem, 6.5vw, 4.4rem);
  line-height: 1.08;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-sub {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 560px;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 72px;
}

/* marquee */
.hero-marquee {
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 14px 0;
  white-space: nowrap;
}

.marquee-track {
  display: inline-flex;
  animation: marquee 24s linear infinite;
}

.marquee-group {
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  color: var(--muted);
  padding-right: 10px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ===== SECTIONS ===== */
.section-alt {
  background: var(--bg-soft);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ===== TECH ===== */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 36px;
}

.tech-icon {
  font-size: 1.7rem;
  margin-bottom: 12px;
}

.tech-card h3 {
  font-size: 1.08rem;
  margin-bottom: 14px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 5px 13px;
  border-radius: 999px;
  background: rgba(108, 140, 255, 0.1);
  border: 1px solid rgba(108, 140, 255, 0.22);
  color: #b9c7ff;
  font-size: 0.82rem;
  font-weight: 500;
}

/* ===== KONTAK ===== */
.kontak-head {
  margin-bottom: 36px;
}

.kontak-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.kontak-card {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: var(--text);
}

.kontak-card:hover {
  transform: translateY(-3px);
}

.kontak-icon {
  font-size: 1.6rem;
}

.kontak-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

.kontak-value {
  font-weight: 600;
}

.kontak-arrow {
  margin-left: auto;
  color: var(--muted);
  transition: transform 0.2s ease, color 0.2s ease;
}

.kontak-card:hover .kontak-arrow {
  transform: translateX(4px);
  color: var(--accent);
}

/* ===== FOOTER ===== */
.footer {
  border-top: 1px solid var(--border);
  padding: 26px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--muted);
  font-size: 0.88rem;
}

.footer-links {
  display: flex;
  gap: 18px;
}

.footer-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--text);
}

@media (max-width: 640px) {
  .nav-links {
    gap: 16px;
  }
  .nav-links a {
    font-size: 0.85rem;
  }
}
</style>
