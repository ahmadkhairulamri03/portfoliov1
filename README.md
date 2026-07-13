# Clean & Scalable Portfolio Frontend Refactoring

Proyek ini adalah hasil refaktorisasi dari single-file export Google Stitch (`indeks.html`) menjadi proyek frontend yang bersih, modular, scalable, dan production-ready tanpa mengubah tampilan visual UI asli (100% pixel-perfect).

---

## 🚀 Fitur Utama & Optimasi
- **Zero Frameworks / Libraries:** Hanya menggunakan HTML5, CSS3, dan Vanilla JavaScript (ES6). Tidak ada Tailwind, Bootstrap, atau jQuery.
- **Metodologi BEM (Block Element Modifier):** Seluruh styling menggunakan kelas CSS biasa dengan format penamaan BEM yang konsisten (misal: `.hero`, `.hero__title`, `.hero__badge`).
- **Pemisahan Modul CSS & JS:**
  - CSS dipisahkan menjadi `variables.css` (design tokens), `style.css` (layout utama & komponen BEM), dan `responsive.css` (media queries terisolasi).
  - JS dipisahkan menjadi `navbar.js` (efek navigasi & drawer mobile), `tabs.js` (tab switcher portofolio & karir), dan `main.js` (lazy loading & form handling).
- **Aset Lokal:** Semua gambar diunduh secara lokal di folder `assets/images/` untuk mempercepat pemuatan halaman dan mendukung luring (offline development).
- **Font Awesome 6 Integration:** Material Symbols Google digantikan secara akurat dengan Font Awesome 6.
- **Native Lazy Loading:** Atribut `loading="lazy"` disematkan pada seluruh gambar di bawah lipatan halaman (below-the-fold) dengan JS IntersectionObserver fallback.
- **Form Validation:** Input formulir kontak divalidasi langsung menggunakan vanilla JS sebelum disubmit.

---

## 📁 Struktur Folder
```text
portfolio/
├── index.html          # File HTML5 semantik utama yang bersih
├── indeks.html         # File referensi asli dari Google Stitch (Single Source of Truth)
├── assets/
│   ├── css/
│   │   ├── variables.css   # Definisi CSS variables (warna, font size, spacing)
│   │   ├── style.css       # Struktur CSS BEM dasar & komponen utama
│   │   └── responsive.css  # Media queries terpisah untuk responsive layout
│   ├── js/
│   │   ├── navbar.js       # Logika scrolling navbar, menu active highlight, & hamburger drawer
│   │   ├── tabs.js         # Logika tab switching proyek/skill/sertifikat & timeline kerja/pendidikan
│   │   └── main.js         # Logika form kontak, inisialisasi, & lazy loading fallback
│   ├── images/             # Gambar lokal terkompresi
│   ├── icons/              # Ikon lokal tambahan
│   └── fonts/              # Custom fonts lokal
└── README.md
```

---

## 🛠️ Cara Menjalankan Proyek
Karena proyek ini berbasis vanilla frontend, Anda dapat membukanya dengan salah satu cara berikut:
1. **Direct Open:** Klik dua kali file `index.html` langsung dari file manager Anda untuk membukanya di browser.
2. **VS Code Live Server:** Jika Anda menggunakan VS Code, klik kanan pada `index.html` dan pilih **Open with Live Server**.
3. **Python HTTP Server:** Jalankan perintah berikut di terminal pada root folder:
   ```bash
   python -m http.server 8000
   ```
   Lalu buka [http://localhost:8000](http://localhost:8000) di browser Anda.

---

## 📂 Metodologi Kelas BEM
Berikut adalah beberapa modul komponen utama BEM yang diimplementasikan:
- `.navbar` (Header utama, scroll shadow, mobile menu button)
- `.hero` (Penyambung headline utama, tombol aksi, floating badge, & portrait wrapper)
- `.about` (Profil ringkas, pencapaian durasi tahun, sub-kompetensi, & info tabel bio)
- `.portfolio` (Wadah tab & grid untuk `.project-card`, `.skill-card`, dan `.certificate-card`)
- `.timeline` (Alur kerja/pendidikan dengan item timeline bulat teratur)
- `.contact` (Wadah formulir kontak dan tautan sosial)
- `.footer` (Tautan cepat dan status indikator online)
