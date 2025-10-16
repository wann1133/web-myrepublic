import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/formatters.js';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: index * 0.08, ease: 'easeOut' }
  })
};

export default function PackageCard({ tier, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -12, rotate: -0.5, boxShadow: '0px 25px 60px rgba(90, 60, 255, 0.25)' }}
      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-[1px] backdrop-blur-xl"
    >
      <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-accent-pink/10 blur-3xl" aria-hidden />
      <div className="glass-panel relative flex h-full flex-col gap-6 rounded-[28px] bg-slate-950/40 p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-white/80">{tier.name}</h3>
            {tier.wiFi6 && (
              <span className="rounded-full bg-accent-blue/20 px-3 py-1 text-xs font-semibold uppercase text-accent-blue">
                Wi-Fi 6
              </span>
            )}
          </div>
          <p className="text-3xl font-extrabold text-white">{tier.speed}</p>
          <p className="text-sm text-white/70">{tier.tagline}</p>
        </div>

        <div className="space-y-3 text-sm text-white/75">
          <p className="flex items-center justify-between">
            <span>Upload : Download</span>
            <span className="font-medium text-white">{tier.upload_download}</span>
          </p>
          <p className="flex items-center justify-between">
            <span>Kuota</span>
            <span className="font-medium text-white">{tier.quota}</span>
          </p>
          <p className="flex items-center justify-between">
            <span>FUP</span>
            <span className="font-medium text-white">{tier.fup}</span>
          </p>
          <p className="flex items-center justify-between">
            <span>IP Address</span>
            <span className="font-medium text-white">{tier.ip}</span>
          </p>
          <p className="flex items-center justify-between">
            <span>Support Devices</span>
            <span className="font-medium text-white">{tier.devices}</span>
          </p>
          {tier.router && (
            <p className="flex items-center justify-between">
              <span>Router</span>
              <span className="font-medium text-accent-blue">Free Dual-Band Router</span>
            </p>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Harga Promo</p>
          <div className="mt-2 flex items-end gap-3">
            <div>
              <p className="text-3xl font-bold text-white">{formatCurrency(tier.newPrice)}</p>
              <p className="text-sm text-white/50 line-through">{formatCurrency(tier.oldPrice)}</p>
            </div>
            <p className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              Hemat {formatCurrency(tier.oldPrice - tier.newPrice)}
            </p>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {tier.bestFor?.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
              >
                {label}
              </span>
            ))}
          </div>
          <motion.a
            whileTap={{ scale: 0.96 }}
            className="btn-primary flex w-full items-center justify-center gap-2"
            href="#contact"
          >
            Saya Mau Ini
            <svg width="16" height="16" fill="none" aria-hidden>
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

PackageCard.propTypes = {
  tier: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    speed: PropTypes.string.isRequired,
    upload_download: PropTypes.string,
    quota: PropTypes.string,
    fup: PropTypes.string,
    ip: PropTypes.string,
    devices: PropTypes.string,
    router: PropTypes.bool,
    wiFi6: PropTypes.bool,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    bestFor: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  index: PropTypes.number.isRequired
};
