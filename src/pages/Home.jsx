import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import PackagesSection from '../components/PackagesSection.jsx';
import Addons from '../components/Addons.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import packages from '../data/packages.json';
import { formatCurrency } from '../utils/formatters.js';

const benefits = [
  {
    title: 'Instalasi Prioritas',
    detail: 'Teknisi tersertifikasi akan menghubungi Anda maksimal 15 menit setelah verifikasi.',
    icon: 'bolt'
  },
  {
    title: 'Smart Monitoring',
    detail: 'Pantau performa jaringan dan status perangkat langsung dari aplikasi Velocity Hub.',
    icon: 'monitor'
  },
  {
    title: 'Eco Network',
    detail: 'Router Wi-Fi 6 hemat energi dengan mode night shift dan optimasi otomatis.',
    icon: 'leaf'
  }
];

const benefitIcons = {
  bolt: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="13 2 3 14 11 14 11 22 21 10 13 10 13 2" />
    </svg>
  ),
  monitor: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  leaf: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 21C7 12 21 10 21 3 14 3 3 14 3 21" />
      <path d="M3 21h4" />
    </svg>
  )
};

const totalSavings = packages.reduce((sum, tier) => sum + (tier.oldPrice - tier.newPrice), 0);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto mt-8 max-w-6xl px-6">
        <motion.div
          className="grid gap-4 rounded-3xl border border-white/10 bg-white/4 p-6 text-sm shadow-lg backdrop-blur-xl sm:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((item) => (
            <div key={item.title} className="glass-panel rounded-2xl bg-white/5 p-4">
              <div className="text-brand-200">{benefitIcons[item.icon]}</div>
              <p className="mt-3 text-base font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-xs text-white/60">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </section>
      <PackagesSection packages={packages} />
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <motion.div
          className="glass-panel flex flex-col gap-4 rounded-3xl p-8 text-sm md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Total Penghematan</p>
            <p className="text-2xl font-bold text-white">Lebih dari {formatCurrency(totalSavings)}</p>
            <p className="mt-1 text-xs text-white/60">
              Bandingkan biaya 12 bulan dan nikmati subsidi instalasi + router premium.
            </p>
          </div>
          <motion.a href="#contact" className="btn-primary inline-flex items-center gap-2" whileHover={{ x: 4 }}>
            Klaim Penawaran Eksklusif
            <svg width="16" height="16" fill="none" aria-hidden>
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.a>
        </motion.div>
      </section>
      <Addons />
      <ContactCTA />
    </>
  );
}
