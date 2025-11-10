import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow">
            <Gamepad2 size={22} />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">HeroVerse</h1>
            <p className="text-xs text-black/60">Koleksi hero dan kemampuan mereka</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm text-black/70">
          <a href="#" className="hover:text-black transition-colors">Beranda</a>
          <a href="#heroes" className="hover:text-black transition-colors">Daftar Hero</a>
          <a href="#about" className="hover:text-black transition-colors">Tentang</a>
        </div>
      </div>
    </header>
  );
}
