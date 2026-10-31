"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Printer, Sparkles, Flame, RotateCcw } from "lucide-react";

export default function BirthdayPage() {
  const [photoSrc, setPhotoSrc] = useState("/nadia.jpg");
  const [photoError, setPhotoError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isCandleLit, setIsCandleLit] = useState(true);
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageError = () => {
    // If /nadia.jpg fails, attempt /nadia .jpg.jpeg before falling back to placeholder
    if (photoSrc === "/nadia.jpg") {
      setPhotoSrc("/nadia .jpg.jpeg");
    } else {
      setPhotoError(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBlowCandle = () => {
    setIsCandleLit(false);
    setIsWished(true);
  };

  const handleRelightCandle = () => {
    setIsCandleLit(true);
    setIsWished(false);
  };

  return (
    <div className="relative min-h-screen py-6 px-3 sm:px-6 md:py-12 flex flex-col items-center justify-center studio-backdrop selection:bg-[#00FF77] selection:text-[#0D0E10] overflow-hidden">
      {/* =========================================================================
          ATMOSPHERIC OUTER STUDIO BACKDROP ELEMENTS (Bagian Luar Kertas)
          ========================================================================= */}
      
      {/* 1. Four Corner Viewport Registration Marks (Desktop Visual Frame) */}
      <div className="no-print pointer-events-none fixed top-4 left-6 hidden xl:flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A]/80 uppercase">
        <span className="text-[#D4AF37]">✦</span>
        <span>ARCHIVE // 01.11.2026</span>
      </div>
      <div className="no-print pointer-events-none fixed top-4 right-6 hidden xl:flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A]/80 uppercase">
        <span>EDITION: CHAPTER 26</span>
        <span className="text-[#00C853]">●</span>
      </div>
      <div className="no-print pointer-events-none fixed bottom-4 left-6 hidden xl:flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A]/80 uppercase">
        <span>NADIA CINDY NOVITA SARI</span>
        <span className="text-[#A1A1AA]">•</span>
        <span>SPECIAL EDITION</span>
      </div>
      <div className="no-print pointer-events-none fixed bottom-4 right-6 hidden xl:flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A]/80 uppercase">
        <span>DEDICATED TO MBAKYU</span>
        <span className="text-[#D4AF37]">✦</span>
      </div>

      {/* 2. Left Flank Vertical Editorial Typography (Outside the card on wide screens) */}
      <aside aria-label="Anotasi Samping Kiri" className="no-print pointer-events-none fixed left-4 2xl:left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-[1px] h-20 bg-[#18191B]/20" />
        <div className="writing-mode-vertical rotate-180 font-mono text-[10px] tracking-[0.3em] uppercase text-[#4B4E58] flex items-center gap-4">
          <span className="text-[#D4AF37]">✦</span>
          <span>CHAPTER 26 • NADIA CINDY NOVITA SARI</span>
          <span className="text-[#A1A1AA]">•</span>
          <span>01 NOVEMBER 2026</span>
          <span className="text-[#00C853]">✦</span>
        </div>
        <div className="w-[1px] h-20 bg-[#18191B]/20" />
      </aside>

      {/* 3. Right Flank Vertical Editorial Typography (Outside the card on wide screens) */}
      <aside aria-label="Anotasi Samping Kanan" className="no-print pointer-events-none fixed right-4 2xl:right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-[1px] h-20 bg-[#18191B]/20" />
        <div className="writing-mode-vertical font-mono text-[10px] tracking-[0.3em] uppercase text-[#4B4E58] flex items-center gap-4">
          <span className="text-[#00C853]">✦</span>
          <span>DEDICATED TO MBAKYU • 26 YEARS AROUND THE SUN</span>
          <span className="text-[#A1A1AA]">•</span>
          <span>A SPECIAL DAY FOR NADIA</span>
          <span className="text-[#D4AF37]">✦</span>
        </div>
        <div className="w-[1px] h-20 bg-[#18191B]/20" />
      </aside>

      {/* 4. Ambient Floating Celebratory Sparkles in Outer Space */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <span className="absolute top-16 left-[8%] text-[#D4AF37] opacity-60 text-xl animate-sparkle-float select-none">✦</span>
        <span className="absolute top-24 right-[10%] text-[#00FF77] opacity-60 text-2xl animate-sparkle-float select-none" style={{ animationDelay: "1.2s" }}>✧</span>
        <span className="absolute bottom-20 left-[11%] text-[#00FF77] opacity-50 text-base animate-sparkle-float select-none" style={{ animationDelay: "2s" }}>✦</span>
        <span className="absolute bottom-28 right-[12%] text-[#D4AF37] opacity-65 text-2xl animate-sparkle-float select-none" style={{ animationDelay: "2.8s" }}>✧</span>
        <span className="absolute top-1/2 left-[3%] text-[#D4AF37] opacity-40 text-lg animate-sparkle-float select-none" style={{ animationDelay: "0.6s" }}>✦</span>
        <span className="absolute top-1/2 right-[4%] text-[#00FF77] opacity-40 text-xl animate-sparkle-float select-none" style={{ animationDelay: "1.8s" }}>✦</span>
      </div>

      {/* Floating Action Bar (Clean - Tanpa tombol pratinjau yang mengganggu) */}
      <aside aria-label="Aksi Halaman" className="no-print relative z-10 w-full max-w-5xl lg:max-w-[1040px] mb-4 md:mb-6 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#52525B] uppercase">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00FF77] animate-electric-dot" />
          <span className="font-bold text-[#18191B]">CELEBRATION EDITION</span>
          <span className="text-[#A1A1AA]">•</span>
          <span className="text-[#3F424A] font-semibold">01.11.2026</span>
          <span className="hidden sm:inline text-[#A1A1AA]">•</span>
          <span className="hidden sm:inline text-[#71717A]">CHAPTER 26 FOR NADIA</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Print / Save A4 Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#FAF8F2] bg-[#18191B] hover:bg-[#27292D] border border-transparent rounded transition-all shadow-sm active:scale-95"
            title="Cetak atau simpan sebagai file PDF A4"
          >
            <Printer className="w-3.5 h-3.5 text-[#00FF77]" />
            <span>Simpan PDF / Cetak</span>
          </button>
        </div>
      </aside>

      {/* =========================================================================
          THE MAIN A4 DIGITAL BIRTHDAY LETTER & CELEBRATION SHEET
          ========================================================================= */}
      <main
        className={`a4-sheet relative z-10 w-full max-w-5xl lg:max-w-[1040px] bg-[#FAF8F2] border border-[#18191B]/20 rounded-[2px] p-6 sm:p-10 md:p-14 lg:p-16 transition-opacity duration-700 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Technical Crop Registration Marks (A4 Heritage) */}
        <div className="crop-tl" />
        <div className="crop-tr" />
        <div className="crop-bl" />
        <div className="crop-br" />

        {/* Outer Fine Hairline Border */}
        <div className="pointer-events-none absolute inset-3 sm:inset-4 md:inset-6 border border-[#18191B]/15 rounded-[1px]" />

        {/* =====================================================================
            1. HEADER: Identitas Perayaan & Tanggal Ulang Tahun
            ===================================================================== */}
        <header className="relative pb-6 border-b border-[#18191B]/15 fade-in-entry">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono tracking-widest text-[#52525B] uppercase">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#0D0E10] tracking-widest2">
                01 NOVEMBER 2026
              </span>
              <span className="text-[#A1A1AA]">/</span>
              <span className="text-[#0D0E10] font-semibold">CHAPTER 26</span>
              <span className="text-[#A1A1AA]">/</span>
              <span className="text-[#C5A038] font-bold flex items-center gap-1">
                <span>✦</span> A SPECIAL DAY FOR NADIA
              </span>
            </div>

            <div className="flex items-center gap-2 sm:justify-end">
              <span className="px-2.5 py-0.5 bg-[#18191B] text-[#FAF8F2] rounded text-[10px] font-semibold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF77] animate-pulse" />
                OFFICIAL CELEBRATION
              </span>
            </div>
          </div>
        </header>

        {/* =====================================================================
            2. HERO SECTION: Perayaan Megah untuk Nadia (Mbakyu)
            ===================================================================== */}
        <section className="relative pt-8 sm:pt-10 pb-8 sm:pb-12 border-b border-[#18191B]/15 fade-in-delay-1">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              {/* Celebratory Ribbon */}
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#F1EEDB] border border-[#C5A038]/30 rounded-full font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-[#8C6D1F]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-bold">HAPPY 26TH BIRTHDAY CELEBRATION</span>
                <span>✦</span>
              </div>

              {/* Nama Nadia dengan Tipografi Raksasa & Elegan */}
              <h1 className="font-display font-black tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-[#0D0E10] leading-[0.86] select-none">
                NADIA
              </h1>
              <p className="mt-2 font-mono font-medium text-xs sm:text-sm tracking-widest2 text-[#3F424A] uppercase flex items-center gap-2">
                <span>CINDY NOVITA SARI</span>
                <span className="text-[#C5A038]">✦</span>
                <span className="text-[#71717A]">CHAPTER 26</span>
              </p>
            </div>

            {/* Bagian Perayaan Spesial Mbakyu (Elegan & Hangat) */}
            <div className="flex flex-col items-start lg:items-end gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#18191B] text-[#FAF8F2] rounded border border-[#18191B] shadow-sm">
                <span className="text-[#00FF77] text-xs font-serif">✦</span>
                <span className="font-display font-bold text-sm tracking-wide text-[#FAF8F2]">
                  Dedicated to Mbakyu
                </span>
                <span className="text-[#00FF77] text-xs font-serif">✦</span>
              </div>
              <div className="font-mono text-[10px] text-[#71717A] tracking-wider">
                BORN 01.11.2000 • CELEBRATING 2026
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3 & 4. COMPOSITION GRID: Visual Angka 26 & Foto + Lilin + Isi Surat
            ===================================================================== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-10 pb-8 sm:pb-10 border-b border-[#18191B]/15">
          {/* KOLOM KIRI: Visual Utama (Angka 26, Lilin Ulang Tahun, dan Foto Nadia) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 fade-in-delay-2">
            {/* Visual Angka 26 yang Menonjol & Artistik */}
            <div className="relative p-5 sm:p-6 bg-[#F3F0E6] border border-[#18191B]/20 rounded-[2px] shadow-sm overflow-hidden group">
              <div className="absolute top-2 right-3 font-mono text-[10px] tracking-widest text-[#A39E8F] uppercase flex items-center gap-1">
                <span className="text-[#C5A038]">✦</span>
                <span>CHAPTER 26</span>
              </div>

              <div className="flex items-baseline justify-between pt-2">
                <div className="font-display font-black text-7xl sm:text-8xl md:text-9xl text-[#0D0E10] tracking-tighter leading-none select-none flex items-baseline">
                  <span>26</span>
                </div>

                <div className="text-right font-mono space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0D0E10] text-[#FAF8F2] rounded text-[10px] font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF77]" />
                    YEARS OLD
                  </div>
                  <div className="text-[10px] font-semibold text-[#8C6D1F] tracking-widest uppercase">
                    GOLDEN MILESTONE
                  </div>
                  <div className="text-[9px] text-[#71717A] font-mono">
                    2000 → 2026
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#18191B]/10 flex items-center justify-between text-[10px] font-mono text-[#52525B]">
                <span className="tracking-wider">CELEBRATING 26 YEARS</span>
                <span className="text-[#00C853] font-semibold flex items-center gap-1">
                  <span>●</span> SPECIAL CELEBRATION
                </span>
              </div>
            </div>

            {/* FITUR INTERAKTIF: Digital Birthday Candle & Wish Moment */}
            <div className="relative p-4 sm:p-5 bg-[#FAF8F2] border border-[#C5A038]/35 rounded-[2px] shadow-sm flex flex-col items-center text-center">
              <div className="font-mono text-[9px] tracking-widest uppercase text-[#8C6D1F] mb-3 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>MOMEN PERAYAAN • MAKE A WISH</span>
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              </div>

              {/* Digital Candle Representation */}
              <div className="relative py-2 flex flex-col items-center justify-center">
                {isCandleLit ? (
                  <div className="relative flex flex-col items-center">
                    {/* Glowing Candle Flame */}
                    <div className="relative w-6 h-8 flex items-center justify-center animate-candle-flame">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F59E0B] via-[#FBBF24] to-[#FEF3C7] rounded-full blur-[1px] opacity-90" />
                      <div className="w-2.5 h-4 bg-white rounded-full blur-[0.5px]" />
                    </div>
                    {/* Candle Wick */}
                    <div className="w-[1.5px] h-2 bg-[#4B5563]" />
                  </div>
                ) : (
                  <div className="relative flex flex-col items-center py-1">
                    <div className="text-[#C5A038] text-sm animate-pulse">✦ ✧ ✦</div>
                    <div className="w-[1.5px] h-2 bg-[#4B5563]" />
                  </div>
                )}

                {/* Candle Body */}
                <div className="w-4 h-12 bg-gradient-to-r from-[#EDE8D8] via-[#FAF8F2] to-[#DFD9C5] border border-[#18191B]/20 rounded-t-sm shadow-sm" />
                {/* Candle Base Plate */}
                <div className="w-12 h-1.5 bg-[#C5A038]/60 rounded-full mt-0.5" />
              </div>

              {/* Interactive Wish Action */}
              <div className="mt-3 w-full">
                {isCandleLit ? (
                  <button
                    type="button"
                    onClick={handleBlowCandle}
                    className="w-full py-2 px-3 bg-[#18191B] hover:bg-[#27292D] text-[#FAF8F2] text-xs font-mono font-medium rounded transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                  >
                    <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Ketuk untuk Tiup Lilin & Buat Harapan</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="p-2.5 bg-[#E8F8EE] border border-[#00C853]/40 rounded text-xs font-mono text-[#00702E] leading-relaxed">
                      Harapan terkirim! Semoga segala doa terbaik Mbakyu di usia 26 ini dikabulkan dan bahagia selalu.
                    </div>
                    <button
                      type="button"
                      onClick={handleRelightCandle}
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#52525B] hover:text-[#0D0E10] underline underline-offset-4"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Nyalakan lilin kembali</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Area Foto Tunggal Nadia (Langsung Menampilkan Foto Asli Nadia) */}
            <figure className="relative p-3 sm:p-4 bg-[#F3F0E6] border border-[#18191B]/20 rounded-[2px] shadow-sm">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#18191B]/10 font-mono text-[9px] tracking-widest uppercase text-[#52525B]">
                <span className="font-bold flex items-center gap-1 text-[#18191B]">
                  <span className="text-[#C5A038]">✦</span> SPECIAL BIRTHDAY PORTRAIT
                </span>
                <span className="text-[#71717A]">NADIA C. N. S.</span>
              </div>

              {/* Photo Display Frame - Langsung Menampilkan Foto Asli Nadia */}
              <div className="relative aspect-[3/4] w-full bg-[#FAF8F2] border border-[#18191B]/20 overflow-hidden rounded-[1px] shadow-inner">
                {photoError ? (
                  <div className="relative w-full h-full">
                    <img
                      src="/portrait-placeholder.svg"
                      alt="Potret Perayaan Ulang Tahun Nadia Cindy Novita Sari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={photoSrc}
                      alt="Potret Nadia Cindy Novita Sari"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={handleImageError}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              {/* Caption Foto yang Hangat */}
              <div className="mt-3 pt-2 border-t border-[#18191B]/10 flex items-center justify-between font-mono text-[9px] text-[#71717A]">
                <span className="tracking-wider">01 NOVEMBER 2026</span>
                <span className="text-[#18191B] font-semibold">CELEBRATING CHAPTER 26</span>
              </div>
            </figure>
          </div>

          {/* KOLOM KANAN: Isi Surat & Ucapan Ulang Tahun */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 fade-in-delay-3">
            {/* Header Surat Ulang Tahun */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBE8DC] border border-[#18191B]/15 rounded font-mono text-[10px] text-[#3F424A] tracking-widest uppercase">
                <span className="text-[#C5A038]">✦</span>
                <span className="font-semibold">SURAT ULANG TAHUN KHUSUS UNTUK MBAKYU</span>
                <span className="text-[#C5A038]">✦</span>
              </div>

              {/* Judul Utama Surat */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#0D0E10] tracking-tight leading-snug">
                Selamat Ulang Tahun, Mbakyu.
              </h2>
            </div>

            {/* Isi Surat (Teks Asli Sesuai Permintaan) */}
            <article className="space-y-5 text-sm sm:text-base leading-relaxed text-[#27292D]">
              <p className="font-semibold text-base sm:text-lg text-[#0D0E10]">
                Untuk Nadia Cindy Novita Sari,
              </p>

              <p className="font-medium text-[#18191B]">
                Selamat bertambah usia yang ke-26.
              </p>

              <p className="text-[#374151]">
                Semoga di usia yang baru ini, selalu ada banyak hal baik yang datang dan menetap. Semoga setiap langkah yang sedang kamu usahakan menemukan jalannya, segala yang sedang diperjuangkan diberi kemudahan, dan hal-hal yang selama ini kamu harapkan perlahan menjadi kenyataan.
              </p>

              <p className="text-[#374151]">
                Tidak harus selalu berjalan sempurna. Semoga kamu tetap punya cukup alasan untuk tersenyum, cukup kuat untuk melewati hari-hari yang sulit, dan cukup tenang untuk menikmati setiap proses yang sedang dijalani.
              </p>

              <p className="text-[#374151]">
                Terima kasih sudah menjadi seseorang yang menyenangkan untuk dikenal. Semoga kehidupan selalu memperlakukanmu dengan baik.
              </p>
            </article>

            {/* Penutup Surat (Teks Asli Sesuai Permintaan) */}
            <div className="pt-6 border-t border-[#18191B]/10 space-y-3 font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              <p>Mungkin ini sederhana, tapi semoga bermakna buat kamu.</p>
              <p>Untuk hadiahnya, ini dulu. Nanti yang lain menyusul waktu ketemu, hehe.</p>
              <p className="font-semibold text-[#18191B]">
                Sekali lagi, selamat ulang tahun, Mbakyu.
              </p>
              <p className="font-semibold text-[#18191B]">
                Semoga bahagia selalu.
              </p>
            </div>

            {/* Sign-off & Stempel Perayaan Elegan */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block font-mono text-[10px] tracking-widest text-[#71717A] uppercase">
                  SALAM HANGAT
                </span>
                <span className="font-display font-bold text-xl text-[#0D0E10] tracking-tight">
                  — Dari faiz wlekk
                </span>
              </div>

              {/* Seal Kartu Perayaan Eksklusif */}
              <div className="px-4 py-2 border rounded border-[#18191B]/20 bg-[#F3F0E6] text-left font-mono shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A038] text-base">✦</span>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider uppercase text-[#0D0E10]">
                      EDISI PERAYAAN RESMI
                    </div>
                    <div className="text-[8px] text-[#71717A] tracking-widest">
                      SPECIAL 26TH BIRTHDAY KEEPSAKE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            5. FOOTER: Minimalist Footer
            ===================================================================== */}
        <footer className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono tracking-widest text-[#71717A] uppercase fade-in-delay-4">
          <div className="font-bold text-[#18191B] tracking-widest2">
            MADE FOR NADIA — 01.11.2026
          </div>

          <div className="flex items-center gap-4 text-[#8E929C]">
            <span>EDISI ULANG TAHUN KHUSUS</span>
            <span>•</span>
            <span>CHAPTER 26</span>
          </div>
        </footer>
      </main>

      {/* Sub-footer metadata (Excluded from print) */}
      <footer className="no-print mt-6 text-center font-mono text-[11px] text-[#71717A] tracking-wider">
        <span>NADIA CINDY NOVITA SARI • CELEBRATING CHAPTER 26 • 2026</span>
      </footer>
    </div>
  );
}
