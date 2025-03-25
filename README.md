# FD Printing - Landing Page Undangan Digital

![Preview](https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)

Landing page responsif untuk perusahaan penyedia jasa pembuatan undangan digital dengan berbagai template menarik dan fitur pemesanan langsung via WhatsApp.

## Fitur Utama

✅ **Desain Modern** dengan warna dominan putih dan aksen kuning, biru muda, pink  
✅ **Responsif** - Tampilan optimal di desktop, tablet, dan smartphone  
✅ **Gallery Template** - Menampilkan berbagai pilihan template undangan  
✅ **Pemesanan via WhatsApp** - Tombol pesan langsung dengan kode template  
✅ **Animasi Halus** - Efek scroll dan hover yang menarik  
✅ **Form Kontak** - Integrasi dengan WhatsApp untuk konsultasi  
✅ **SEO Friendly** - Struktur HTML semantik dan meta tag  

## Teknologi yang Digunakan

- **Bootstrap 5** - Framework CSS untuk layout responsif
- **Font Awesome** - Ikon modern
- **Google Fonts (Poppins)** - Tipografi yang elegan
- **CSS3** - Animasi dan styling lanjutan
- **JavaScript** - Interaktivitas dan fungsi pemesanan

## Cara Menggunakan

1. Clone repository ini atau download sebagai ZIP
   ```bash
   git clone https://github.com/aleaengineer/FDPrinting-landingpage.git
   ```

2. Buka file `index.html` di browser

3. Untuk deploy ke hosting:
   - Upload seluruh file ke server web Anda
   - Ganti nomor WhatsApp di script JavaScript dengan nomor bisnis Anda
   ```javascript
   // Ganti nomor ini
   const whatsappUrl = `https://wa.me/6281573236181?text=${encodeURIComponent(whatsappMessage)}`;
   ```

4. Ganti gambar placeholder dengan gambar template undangan Anda yang asli

## Struktur File

```
FD Printing-landing/
├── index.html          # File utama landing page
├── README.md           # Dokumentasi ini
└── assets/             # Folder untuk aset tambahan
    ├── css/            # File CSS custom (jika ada)
    ├── js/             # File JavaScript custom (jika ada)
    └── images/         # Gambar template dan aset visual
```

## Customisasi

1. **Warna**: Ubah variabel CSS di bagian `:root`
   ```css
   :root {
       --primary-yellow: #FFD700;
       --primary-blue: #87CEEB;
       --primary-pink: #FFB6C1;
       --dark-blue: #4682B4;
   }
   ```

2. **Konten**: Sesuaikan teks, gambar, dan informasi perusahaan di file HTML

3. **Template**: Tambahkan lebih banyak template dengan menyalin struktur card yang ada

## Kontribusi

Pull request dipersilakan. Untuk perubahan besar, harap buka issue terlebih dahulu untuk didiskusikan.

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)

---

**FD Printing** © 2025 - [Contoh Demo](https://aleaengineer.github.io/FDPrinting-landingpage) | [Kontak Kami](#contact)
