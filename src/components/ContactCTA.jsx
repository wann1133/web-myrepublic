import { motion } from 'framer-motion';

const infoItems = [
  {
    icon: 'antenna',
    text: 'Instalasi tercepat H+1 setelah verifikasi'
  },
  {
    icon: 'shield',
    text: 'Garansi perangkat 12 bulan dan SLA uptime 99.9%'
  },
  {
    icon: 'handshake',
    text: 'Konsultasi kebutuhan jaringan gratis'
  }
];

const infoIcons = {
  antenna: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="15" r="2" />
      <path d="M9 13V3M5 7l4-4 4 4" />
      <path d="M3 9l6-6 6 6" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 2l6 2v5c0 3.8-2.5 7.6-6 9-3.5-1.4-6-5.2-6-9V4l6-2z" />
      <path d="M6.8 10.2l1.9 2L12.4 8" />
    </svg>
  ),
  handshake: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 9l4.5 4.5a2.1 2.1 0 003 0L16 7" />
      <path d="M15 10l3-3-3-3-3 3" />
      <path d="M8 4H2v6" />
      <path d="M16 13l-2.5 2.5a2 2 0 01-2.8 0L9 14" />
    </svg>
  )
};

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-brand-500/60 via-brand-500/30 to-brand-500/40 p-[1px]"
    >
      <div className="relative flex flex-col gap-10 rounded-[30px] bg-slate-950/90 p-10 text-white shadow-glass backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
        <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent-blue/30 blur-3xl" aria-hidden />
        <div className="absolute -right-24 top-12 h-48 w-48 rounded-full bg-accent-pink/25 blur-3xl" aria-hidden />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 max-w-xl space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">Hubungi Kami</p>
          <h2 className="text-3xl font-bold lg:text-4xl">Siap Mengaktifkan Internet Impian Anda?</h2>
          <p className="text-sm text-white/70">
            Tim sales kami siap membantu memilih paket terbaik sesuai kebutuhan rumah, gaming setup, maupun operasional
            bisnis Anda.
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            {infoItems.map((item) => (
              <li key={item.icon} className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-brand-100">
                  {infoIcons[item.icon]}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
        >
          <h3 className="text-lg font-semibold text-white">Jadwalkan Konsultasi</h3>
          <p className="mt-2 text-xs text-white/70">Isi data singkat, tim kami akan menghubungi dalam 15 menit.</p>

          <div className="mt-6 space-y-4 text-sm text-slate-900">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.26em] text-white/70">Nama</span>
              <input
                className="w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-400/30"
                type="text"
                placeholder="Nama Lengkap"
                aria-label="Nama Lengkap"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                Nomor WhatsApp
              </span>
              <input
                className="w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-400/30"
                type="tel"
                placeholder="08xxxx"
                aria-label="Nomor WhatsApp"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                Kebutuhan
              </span>
              <select
                className="w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-400/30"
                aria-label="Kebutuhan Paket"
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih paket yang diminati
                </option>
                <option>Internet Rumah</option>
                <option>Gaming Profesional</option>
                <option>Bisnis & UMKM</option>
                <option>Dedicated Corporate</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
                Catatan
              </span>
              <textarea
                className="min-h-[100px] w-full rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-400/30"
                placeholder="Jelaskan area dan kebutuhan khusus Anda"
                aria-label="Catatan Tambahan"
              />
            </label>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            className="btn-primary mt-6 w-full justify-center bg-white text-slate-900 hover:bg-white/95"
          >
            Kirim & Tunggu Callback
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
