import { motion } from 'framer-motion';

const addons = [
  {
    title: 'Velocity Shield',
    description: 'Proteksi jaringan dengan firewall pintar dan parental control real-time.',
    icon: 'shield-check',
    highlight: 'Mulai Rp49.000/bln'
  },
  {
    title: 'SmartMesh Wi-Fi 6',
    description: 'Perluas jangkauan sinyal hingga 500 m2 dengan node mesh seamless.',
    icon: 'wifi',
    highlight: 'Instalasi 24 jam'
  },
  {
    title: 'Velocity Entertainment',
    description: 'Bundling IPTV 4K + platform streaming premium untuk keluarga.',
    icon: 'sparkles',
    highlight: 'Gratis 3 bulan'
  },
  {
    title: 'Priority Support',
    description: 'Dedicated account manager & SLA 4 jam untuk bisnis serta kreator.',
    icon: 'support',
    highlight: 'Upgrade Rp99.000'
  }
];

const iconMap = {
  'shield-check': (
    <path
      d="M12 2l8 3v6c0 5.25-3.5 10.5-8 12-4.5-1.5-8-6.75-8-12V5l8-3zm-1.5 11l-2-2 1.06-1.06L10.5 10.88l3.94-3.94L15.5 8.5l-5 4.5z"
      fill="currentColor"
      fillOpacity="0.7"
    />
  ),
  wifi: (
    <>
      <path d="M12 18a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" fillOpacity="0.7" />
      <path d="M4.93 13.07A10 10 0 0112 10a10 10 0 017.07 3.07L18 14.14A8 8 0 0012 12a8 8 0 00-6 2.14l-1.07-1.07z" fill="currentColor" fillOpacity="0.5" />
      <path d="M7.76 15.76A6 6 0 0112 14a6 6 0 014.24 1.76L15.17 16.9A4 4 0 0012 16a4 4 0 00-3.17 1.46l-1.07-1.7z" fill="currentColor" fillOpacity="0.4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 2h2l.7 3 3.3.7v2l-3.3.7L13 12h-2l-.7-3.3L7 7.7v-2l3.3-.7L11 2z" fill="currentColor" fillOpacity="0.6" />
      <path d="M5 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="currentColor" fillOpacity="0.4" />
      <path d="M19 13l.7 2 2 .7-2 .7L19 19l-.7-2-.8-.7.8-.7.7-2z" fill="currentColor" fillOpacity="0.4" />
    </>
  ),
  support: (
    <>
      <path d="M12 4a8 8 0 00-8 8v2a3 3 0 003 3v3h4v-4H8v-3a4 4 0 014-4 4 4 0 014 4v3h-3v4h4v-3a3 3 0 003-3v-2a8 8 0 00-8-8z" fill="currentColor" fillOpacity="0.6" />
      <circle cx="12" cy="8.5" r="2" fill="currentColor" fillOpacity="0.5" />
    </>
  )
};

export default function Addons() {
  return (
    <section id="addons" className="relative mx-auto mt-20 max-w-6xl px-6">
      <div className="mb-12 flex flex-col gap-4 text-center sm:text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">Add-ons & Benefit</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Lengkapi Ekosistem Digital Anda</h2>
          <p className="text-sm text-white/60 sm:max-w-sm">
            Pilih add-on yang sesuai kebutuhan. Semua paket bisa diperluas dengan perangkat IoT, keamanan, hiburan, dan
            dukungan premium untuk performa maksimal.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {addons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
            className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  {iconMap[item.icon]}
                </svg>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/65">{item.description}</p>
                </div>
                <span className="inline-flex rounded-full bg-accent-pink/15 px-3 py-1 text-xs font-semibold text-white/80">
                  {item.highlight}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
