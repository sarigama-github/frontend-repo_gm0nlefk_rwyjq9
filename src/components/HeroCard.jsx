import React from 'react';
import { Sword, Shield, Flame, Zap } from 'lucide-react';

function StatPill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-black/5 text-black/70">
      <Icon size={14} />
      {label}
    </span>
  );
}

export default function HeroCard({ hero, onSelect }) {
  return (
    <button
      onClick={() => onSelect(hero)}
      className="group w-full text-left rounded-2xl border border-black/5 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-50" style={{ backgroundImage: `url(${hero.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-violet-600 transition-colors">{hero.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700">{hero.role}</span>
        </div>
        <p className="text-sm text-black/60 mt-1 line-clamp-2">{hero.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <StatPill icon={Sword} label={`${hero.stats.attack}`} />
          <StatPill icon={Shield} label={`${hero.stats.defense}`} />
          <StatPill icon={Flame} label={`${hero.stats.magic}`} />
          <StatPill icon={Zap} label={`${hero.stats.speed}`} />
        </div>
      </div>
    </button>
  );
}
