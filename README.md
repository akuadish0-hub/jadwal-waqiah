# Jadwal Jaga Waqi'ah — PP Nurusy Syuhada' Kedungrejo

Aplikasi web satu file (`index.html`) untuk jadwal piket jaga waqi'ah mulai **03.00 dini hari**. Cuma tiga halaman: pengingat, jadwal 7 hari yang bergulir, dan tukar piket. Jadwal berjalan terus mengikuti kalender.

Tampilannya bertema keislaman: logo pondok di samping kiri nama pondok dan judul (sejajar dengan keduanya), latar bermotif bintang delapan, aksen hijau zamrud dan emas, bingkai lengkung seperti mihrab pada kartu pengingat, lafaz basmalah di atas halaman, serta tanggal Hijriah di Beranda.

## Jadwal sholat

Di bagian atas setiap halaman ada jadwal sholat: **Subuh, Dhuha, Dzuhur, Ashar, Maghrib, Isya**. Waktu sholat berikutnya disorot, lengkap dengan hitung mundur, dan diperbarui tiap menit.

- Secara bawaan memakai **lokasi pondok** dan mengacu ke jadwal **Kemenag Lumajang** (Kedungrejo, Rowokangkung), sehingga jadwal langsung tampil tanpa izin apa pun.
- **Dhuha** dihitung ±25 menit setelah matahari terbit (mengikuti jadwal Kemenag), ditambah ihtiyati 2 menit seperti waktu lainnya.
- Tekan **Gunakan lokasi saya** untuk mengikuti lokasi GPS perangkat. Izin lokasi diminta sekali oleh browser; setelah diizinkan, lokasi tersimpan dan diperbarui otomatis saat halaman dibuka kembali.
- Bila izin lokasi ditolak, jadwal tetap memakai lokasi pondok atau lokasi terakhir yang tersimpan.
- Perhitungan memakai **metode Kemenag** (Subuh 20°, Isya 18°) ditambah ihtiyati 2 menit, dihitung langsung di perangkat tanpa internet.
- Jam mengikuti zona waktu perangkat, jadi pastikan tanggal, jam, dan zona waktu perangkat sudah benar.

## Petugas

Gus Fazlur · Gus Adis · Ning Maris · Ning Amel · Ning Ninid · Ustadzah Ima

Enam orang, satu petugas per hari. Giliran berputar terus: Gus Fazlur → Gus Adis → Ning Maris → Ning Amel → Ning Ninid → Ustadzah Ima → Gus Fazlur, dan seterusnya mengikuti kalender tanpa perlu membuat jadwal baru. Daftar nama bisa diubah lewat ikon gerigi.

## Cara pakai

1. Buka `index.html` (klik dua kali — langsung jalan, tanpa internet/instalasi).
2. Jadwal berjalan otomatis dari **hari ini** untuk 7 hari ke depan, lalu bergulir sendiri setiap hari. Rotasi tidak pernah berhenti.
3. Pengaturan (nama pondok, daftar petugas, tanggal mulai rotasi, jam) hanya bisa dibuka admin. Klik **ikon gerigi**, lalu masukkan kata sandi admin **2405**. Ikon admin (perisai) di kanan atas juga tersedia kapan saja.

## Tiga halaman

### Beranda
Kartu besar berisi **siapa yang piket berikutnya**, lengkap dengan tanggal Masehi, tanggal Hijriah, dan jam. Labelnya menyesuaikan waktu:

- **"Besok — jaga waqi'ah"** sehari sebelum piket.
- **"Malam ini — jaga waqi'ah"** bila piket tinggal ≤ 10 jam lagi.
- **"N hari lagi — jaga waqi'ah"** untuk jadwal yang masih jauh.

Di bawahnya ada baris "Berikutnya" dan "Besok". Pengingat mengikuti kalender dan diperbarui tiap menit serta saat tab dibuka kembali.

### Jadwal
Daftar 7 hari ke depan: hari, tanggal, nama petugas, dan jam mulai. Baris hari ini ditandai warna hijau. Jendela 7 hari bergulir sendiri setiap pergantian hari.

### Tukar Piket
Untuk petugas yang berhalangan:

1. Pilih **petugas**. Tanggal gilirannya muncul otomatis.
2. Muncul pratinjau jadwal setelah perubahan.
3. Klik **Ajukan ke admin**. Permintaan tersimpan sebagai "Menunggu admin".

**Cara geser:** giliran petugas yang berhalangan dicabut, lalu ditaruh di **giliran paling akhir**. Semua petugas di antaranya maju satu giliran. Tanggal yang sudah lebih awal tidak ikut berubah, dan rotasi tetap berjalan seperti biasa setelahnya.

**Persetujuan admin:**

1. Klik **ikon admin (perisai)** di kanan atas (atau tautan **Masuk admin** pada kartu pengajuan).
2. Masukkan kata sandi **2405**.
3. Klik **Setujui perubahan** (jadwal diperbarui) atau **Tolak** (jadwal tetap).
4. Klik **ikon admin** lagi untuk menutup akses. Mode admin hanya berlaku sampai halaman dimuat ulang.

Setelah **Setujui** atau **Tolak**, muncul kotak konfirmasi di bawah kartu pengajuan (hijau = jadwal diperbarui, kuning = jadwal tidak berubah) dan notifikasi singkat di bawah layar. Kartu pengajuan langsung hilang.

Selama masih ada pengajuan yang menunggu, pengajuan baru belum bisa dibuat.

## Admin

- Ikon admin (perisai) selalu ada di kanan atas, tanpa tulisan. Setelah masuk, ikon berubah warna hijau dengan titik emas; tekan sekali lagi untuk keluar.
- **Pengaturan hanya untuk admin.** Bila pengunjung biasa menekan ikon gerigi, dialog kata sandi muncul lebih dulu; pengaturan terbuka otomatis setelah sandi benar.
- Kata sandi: **2405**.

## Tema keislaman & mode terang/gelap

- Palet hijau zamrud–emas dengan latar motif geometris bintang delapan yang samar.
- Logo PP Nurusy Syuhada' Kedungrejo tampil di samping kiri, sejajar di tengah dengan dua baris teks (nama pondok dan judul), dengan bingkai krem–emas, dan otomatis dipakai sebagai ikon tab (favicon).
- Lafaz basmalah di bagian atas dan doa penutup di bawah halaman.
- Kartu pengingat berbentuk lengkung mihrab dengan bingkai emas ganda.
- Tanggal Hijriah (kalender Umm al-Qura) otomatis mengikuti tanggal piket; tampil di Beranda.
- Tombol bulan/matahari di kanan atas untuk berganti mode terang/gelap. Pilihan tersimpan otomatis; saat pertama dibuka, mode mengikuti pengaturan perangkat.

## Catatan

- Data (jadwal + pengajuan) disimpan di browser lewat `localStorage`, jadi tetap ada setelah ditutup. Ganti browser/perangkat → perlu isi ulang.
- Logo sudah ditanam langsung di dalam `index.html`, jadi tetap tampil meski file HTML dipindah sendiri. Berkas `logo-nsy.png` disertakan sebagai gambar sumber.
- Bila file dibuka di beberapa tab sekaligus, perubahan di satu tab langsung mengikuti tab lain tanpa saling mengembalikan data lama.
- Tanggal mulai rotasi menentukan siapa yang piket pada hari pertama. Menyimpan pengaturan akan **memulai ulang rotasi** dari tanggal itu dan **membatalkan** pengajuan tukar piket yang sedang menunggu.
- Pengingat hanya tampil saat halaman dibuka; tidak ada notifikasi/alarm otomatis.
- Kata sandi admin tertulis di dalam file (`ADMIN_PASS`). Ini hanya pembatas sederhana, bukan keamanan sungguhan.
