import React from 'react';
import HeroCard from './HeroCard';

export default function HeroList({ heroes, onSelect }) {
  return (
    <section id="heroes" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Daftar Hero</h2>
          <p className="text-sm text-black/60">Pilih seorang hero untuk melihat detail dan skill</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.map((h) => (
          <HeroCard key={h.id} hero={h} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
