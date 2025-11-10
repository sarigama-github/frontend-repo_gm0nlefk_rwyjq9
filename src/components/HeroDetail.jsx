import React from 'react';
import { X, Star } from 'lucide-react';

export default function HeroDetail({ hero, onClose }) {
  if (!hero) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-2xl border border-black/5 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/5 hover:bg-black/10"
          aria-label="Tutup"
        >
          <X size={18} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto h-full bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }} />
          <div className="p-5">
            <h3 className="text-2xl font-semibold tracking-tight">{hero.name}</h3>
            <p className="text-sm text-black/60">Peran: <span className="font-medium text-black/80">{hero.role}</span></p>
            <p className="mt-3 text-sm text-black/70 leading-relaxed">{hero.description}</p>

            <div className="mt-5">
              <h4 className="font-medium">Skill</h4>
              <ul className="mt-2 space-y-3">
                {hero.skills.map((s, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-black/5">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-violet-600" />
                      <span className="font-medium">{s.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">{s.type}</span>
                    </div>
                    <p className="text-sm text-black/60 mt-1">{s.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
