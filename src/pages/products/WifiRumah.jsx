import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PackagesSection from '../../components/PackagesSection.jsx';
import PackageTable from '../../components/PackageTable.jsx';
import ProductHighlightsTable from '../../components/ProductHighlightsTable.jsx';
import packages from '../../data/packages.json';

const highlights = [
  {
    label: 'Paket Residensial',
    title: 'Speed up to 500 Mbps untuk seluruh keluarga digital',
    description:
      'Nikmati streaming, gaming, dan WFH tanpa kompromi dengan jaringan fiber 100% yang stabil dan simetris.',
    features: ['Router Wi-Fi 6 gratis', 'Monitoring jaringan via aplikasi', 'Support teknis 24/7'],
    ctaLabel: 'Lihat Detail Paket',
    ctaHref: '#packages',
    accent: 'pink',
    icon: 'WR'
  },
  {
    label: 'Paket Residensial Combo TV',
    title: 'Bundling IPTV 4K dengan lebih dari 80 channel favorit',
    description:
      'Satu paket hemat untuk internet ultra cepat dan hiburan keluarga lengkap, termasuk STB Android 11.',
    features: ['Gratis akses Disney+ 3 bulan', 'Channel olahraga & film premium', 'Dukungan multi-TV'],
    ctaLabel: 'Eksplor Combo TV',
    ctaHref: '#combo-tv',
    accent: 'blue',
    icon: 'TV',
    imagePosition: 'right',
    secondary: {
      label: 'Download Brosur',
      href: 'mailto:sales@velocitynet.id?subject=Permintaan%20Brosur%20Combo%20TV'
    }
  },
  {
    label: 'Paket Gamer & Creator',
    title: 'Latency ultra rendah dengan IP publik statik',
    description:
      'Optimalkan sesi streaming dan turnamen e-sports dengan jalur prioritas dan dukungan device hingga 35 unit.',
    features: ['Optimasi ping < 5ms', 'Bandwidth simetris 1:1', 'Static IP untuk keamanan'],
    ctaLabel: 'Ajukan Upgrade Gamer',
    ctaHref: '#packages',
    accent: 'purple',
    icon: 'GG'
  }
];

export default function WifiRumah() {
  const navigate = useNavigate();

  const goToContact = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById('contact');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,200,255,0.25),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:w-3/5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Produk - Wifi Rumah</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Paket MyRepublic - Wifi Rumah dengan Teknologi Fiber Futuristik
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Didesain untuk keluarga modern yang memerlukan koneksi cepat, aman, dan merata di setiap sudut rumah.
              Termasuk instalasi prioritas H+1 dan perangkat Wi-Fi 6 kelas premium.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary shadow-neon" href="#packages">
                Bandingkan Paket Wifi Rumah
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white/80 transition hover:border-white/40"
                onClick={goToContact}
              >
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="glass-panel relative w-full rounded-[32px] border-white/10 bg-white/10 p-8 backdrop-blur-3xl lg:w-2/5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Highlight 2025</p>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Speed Test Rata-rata</span>
                <span className="font-semibold text-white">842 Mbps</span>
              </li>
              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Uptime Real-time</span>
                <span className="font-semibold text-white">99.93%</span>
              </li>
              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <span>Instalasi Prioritas</span>
                <span className="font-semibold text-white">H+1 Verify</span>
              </li>
            </ul>
            <p className="mt-5 text-xs text-white/60">
              Data berdasarkan rata-rata performa pelanggan VelocityNet periode Q2 2025.
            </p>
          </motion.div>
        </div>
      </section>
      <ProductHighlightsTable items={highlights} />
      <PackagesSection
        packages={packages}
        eyebrow="Katalog Wifi Rumah"
        title="Pilih paket fiber terbaik untuk kebutuhan residensial Anda"
        subtitle="Mulai dari paket hemat hingga premium 1 Gbps dengan router Wi-Fi 6, dukungan prioritas, dan promo instalasi sepanjang 2025."
      />
      <div id="combo-tv" />
      <PackageTable packages={packages} />
    </div>
  );
}
