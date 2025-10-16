import { motion } from 'framer-motion';
import heroBackground from '../assets/hero-bg.svg';

const floatingVariants = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 6, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-28 text-white lg:pb-36"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-90 mix-blend-screen" aria-hidden />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="floating-shape absolute left-8 top-16 h-36 w-36 rounded-full bg-accent-blue/40 blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 14 }}
          className="floating-shape absolute right-5 top-32 h-32 w-32 rounded-3xl bg-brand-300/30 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 12, delay: 2 }}
          className="floating-shape absolute bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent-pink/40 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
            Indonesia&apos;s Best Fixed Network 2025
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nikmati <span className="gradient-text">Internet Tercepat</span> dengan Harga Paling Kompetitif
            </h1>
            <p className="text-lg text-slate-200/80 sm:text-xl">
              Upgrade pengalaman digital rumah & bisnis Anda dengan koneksi 100% fiber, uptime SLA 99.9%, dan support
              lokal 24/7. Masa depan internet rumahan ada di sini.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a className="btn-primary shadow-neon" href="#packages">
              Cek Paket Sekarang
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-colors duration-300 hover:border-brand-200"
              href="#contact"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-accent-pink" aria-hidden />
              Konsultasi Gratis
            </motion.a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { value: '350.000+', label: 'Pelanggan percaya sejak 2015' },
              { value: '1 Gbps', label: 'Kecepatan hingga untuk kreator pro' },
              { value: '24/7', label: 'Support lokal & monitoring jaringan' },
              { value: '99.9%', label: 'SLA uptime terjamin' }
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl p-4"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-sm text-slate-200/70">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex w-full max-w-md items-center justify-center"
        >
          <motion.div
            className="glass-panel relative w-full rounded-[32px] border-white/20 bg-white/10 p-6 text-white shadow-neon backdrop-blur-3xl"
            whileHover={{ rotate: -1 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-100/60">Featured Plan</p>
                <p className="text-2xl font-semibold text-white">Nimbus Giga 1 Gbps</p>
              </div>
              <motion.span
                className="rounded-full bg-accent-pink/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              >
                Limited
              </motion.span>
            </div>

            <div className="space-y-5 text-sm text-white/80">
              <p className="flex items-center justify-between">
                <span>Bandwidth</span>
                <span className="font-semibold text-white">Up to 1 Gbps</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Upload/Download</span>
                <span className="font-semibold text-white">1:1 Symmetric</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Garansi</span>
                <span className="font-semibold text-white">SLA 99.9%</span>
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-100/60">Biaya Bulanan</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">Rp699.000</span>
                <span className="text-sm text-white/60 line-through">Rp1.399.000</span>
              </div>
              <p className="mt-2 text-xs text-white/70">Termasuk router Wi-Fi 6 & instalasi prioritas</p>
            </div>

            <motion.a
              whileTap={{ scale: 0.96 }}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-white/90 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-brand-500/30 transition hover:bg-white"
              href="#contact"
            >
              Booking Instalasi 24 Jam
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
