import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import HeroList from './components/HeroList';
import HeroDetail from './components/HeroDetail';

const sampleHeroes = [
  {
    id: 'ember-blade',
    name: 'Ember Blade',
    role: 'Assassin',
    image: 'https://images.unsplash.com/photo-1553865541-afc89e182ae9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWJlciUyMEJsYWRlfGVufDB8MHx8fDE3NjI3NjU1MDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Pembunuh bayaran yang menguasai api. Mengandalkan kecepatan dan serangan kritikal untuk menghabisi musuh dalam sekejap.',
    stats: { attack: 9, defense: 4, magic: 7, speed: 9 },
    skills: [
      { name: 'Flame Dash', type: 'Active', description: 'Melesat cepat meninggalkan jejak api yang memberikan damage berkelanjutan.' },
      { name: 'Ignite', type: 'Passive', description: 'Serangan memiliki peluang membakar musuh selama 3 detik.' },
      { name: 'Blazing Edge', type: 'Ultimate', description: 'Serangan beruntun yang meledak di akhir, menghasilkan burst damage besar.' },
    ],
  },
  {
    id: 'aegis-warden',
    name: 'Aegis Warden',
    role: 'Tank',
    image: 'https://images.unsplash.com/photo-1753029845214-40343837e228?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZWdpcyUyMFdhcmRlbnxlbnwwfDB8fHwxNzYyNzY1NTAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Pelindung abadi yang tak tergoyahkan. Mampu menyerap damage dan menjaga rekan setim di garis depan.',
    stats: { attack: 5, defense: 10, magic: 3, speed: 4 },
    skills: [
      { name: 'Bulwark', type: 'Active', description: 'Menaikkan pertahanan besar selama beberapa detik dan memantulkan sebagian damage.' },
      { name: 'Guardian Oath', type: 'Passive', description: 'Memberi perisai ke sekutu terdekat saat menerima damage besar.' },
      { name: 'Aegis Slam', type: 'Ultimate', description: 'Menghantam tanah, memberikan stun area dan menarik aggro musuh.' },
    ],
  },
  {
    id: 'storm-weaver',
    name: 'Storm Weaver',
    role: 'Mage',
    image: 'https://images.unsplash.com/photo-1705168824400-b2c32a5162c8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdG9ybSUyMFdlYXZlcnxlbnwwfDB8fHwxNzYyNzY1NTA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Penyihir pengendali badai. Menyerang dari jarak jauh dengan kombinasi petir dan angin yang eksplosif.',
    stats: { attack: 7, defense: 3, magic: 10, speed: 6 },
    skills: [
      { name: 'Chain Lightning', type: 'Active', description: 'Petir memantul ke beberapa target, mengurangi resistensi mereka.' },
      { name: 'Gale Ward', type: 'Passive', description: 'Menciptakan penghalang angin yang mengurangi damage proyektil.' },
      { name: 'Tempest Nova', type: 'Ultimate', description: 'Badai besar yang memberi damage tinggi di area luas.' },
    ],
  },
];

function HeroSearch({ value, onChange }) {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari hero berdasarkan nama atau role..."
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-4 ring-violet-200"
      />
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleHeroes;
    return sampleHeroes.filter((h) =>
      h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />
      <main className="pb-20">
        <section className="max-w-6xl mx-auto px-4 pt-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Bangun skuad impianmu</h2>
              <p className="mt-3 text-black/70">Jelajahi para hero dengan berbagai peran dan kemampuan unik. Klik salah satu untuk melihat detail skill dan keunggulannya.</p>
              <div className="mt-5 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs">Assassin</span>
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs">Tank</span>
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs">Mage</span>
                <span className="px-3 py-1 rounded-full bg-black/5 text-xs">Marksman</span>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 aspect-video shadow-inner" />
          </div>
        </section>

        <HeroSearch value={query} onChange={setQuery} />
        <HeroList heroes={filtered} onSelect={setSelected} />
      </main>

      <HeroDetail hero={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
