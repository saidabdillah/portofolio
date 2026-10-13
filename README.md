# Portofolio — Said Abdillah

Web portofolio pribadi, dibangun dengan **Vue 3 + Vite + Motion (Framer Motion untuk Vue)**.

## Fitur

- Desain dark modern dengan animasi scroll (motion-v)
- Section: Hero, Tentang Saya, Tech Stack, Kontak
- Kontak: email & WhatsApp
- Siap deploy ke GitHub Pages (workflow sudah termasuk)

## Jalankan lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Deploy ke GitHub Pages

1. Push repo ini ke GitHub (branch `main`).
2. Buka **Settings → Pages** di repo GitHub.
3. Pada **Source**, pilih **GitHub Actions**.
4. Setiap push ke `main` akan otomatis build & deploy.
