import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PackageCard from './PackageCard.jsx';
import { formatCurrency } from '../utils/formatters.js';

export default function PackagesSection({
  packages,
  eyebrow = 'Paket Unggulan 2025',
  title = 'Pilih Paket Sesuai Ritme Digital Anda',
  subtitle = 'Rancang koneksi masa depan dengan kecepatan simetris, router Wi-Fi 6, dan promo spesial untuk pelanggan baru sepanjang 2025.'
}) {
  const { scrollYProgress } = useScroll();
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const averagePrice = useMemo(
    () => Math.round(packages.reduce((acc, tier) => acc + tier.newPrice, 0) / packages.length),
    [packages]
  );

  return (
    <section id="packages" className="relative mx-auto mt-24 max-w-6xl px-6">
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-x-0 top-10 h-48 rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden
      />

      <div className="flex flex-col gap-6 text-center sm:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">{eyebrow}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="text-sm text-white/60">{subtitle}</p>
          </div>
          <div className="glass-panel inline-flex items-center justify-center rounded-3xl px-6 py-4 text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Rata-rata penghematan</p>
            <p className="text-lg font-semibold text-white">{formatCurrency(averagePrice)}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((tier, index) => (
          <PackageCard key={tier.name} tier={tier} index={index} />
        ))}
      </div>
    </section>
  );
}

PackagesSection.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.object).isRequired,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};
