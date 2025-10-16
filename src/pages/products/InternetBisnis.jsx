import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PackagesSection from '../../components/PackagesSection.jsx';
import ProductHighlightsTable from '../../components/ProductHighlightsTable.jsx';
import businessPackages from '../../data/businessPackages.json';

const highlights = [
  {
    label: 'SLA & Monitoring',
    title: 'Jaminan SLA 99.95% dengan dukungan NOC 24/7',
    description:
      'Paket bisnis VelocityNet mengutamakan stabilitas dengan jalur prioritas, pemantauan proaktif, dan penanganan tiket cepat.',
    features: ['Monitoring real-time', 'Engineer on-site 4 jam', 'Portal analitik bandwidth'],
    ctaLabel: 'Konsultasi Solusi Bisnis',
    ctaHref: '#contact',
    accent: 'blue',
    icon: 'SL'
  },
  {
    label: 'Keamanan & Skalabilitas',
    title: 'Integrasi firewall, VPN, dan tunnel MPLS untuk multi kantor',
    description:
      'Sempurnakan arsitektur jaringan perusahaan dengan keamanan berlapis dan dukungan ekspansi cabang yang fleksibel.',
    features: ['Static IP ganda', 'VPN IPSec siap pakai', 'Prioritas QoS aplikasi'],
    ctaLabel: 'Lihat Paket Bisnis',
    ctaHref: '#packages',
    accent: 'purple',
    icon: 'SEC',
    imagePosition: 'right'
  }
];

export default function InternetBisnis() {
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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(106,60,255,0.45),_transparent_65%)] pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(58,200,255,0.25),transparent_70%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:w-1/2"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Produk - Internet Bisnis</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Internet Bisnis Ultra Stabil untuk Operasional Tanpa Gangguan
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Dukung produktivitas tim, koneksi cloud, dan keamanan data dengan paket internet bisnis VelocityNet.
              Tersedia SLA premium, IP statik, dan dukungan teknis prioritas.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary shadow-neon" href="#packages">
                Lihat Paket Bisnis
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white/80 transition hover:border-white/40"
                onClick={goToContact}
              >
                Hubungi Account Manager
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="glass-panel relative w-full rounded-[32px] border-white/10 bg-white/10 p-8 backdrop-blur-3xl lg:w-1/2"
          >
            <h3 className="text-lg font-semibold text-white">Key Metrics</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Waktu Respon Support', value: '< 15 Menit' },
                { title: 'Engineer On-site', value: '< 4 Jam' },
                { title: 'Bandwidth Burst', value: '120% dari kapasitas' },
                { title: 'Survei Lokasi', value: 'Gratis & cepat' }
              ].map((metric) => (
                <div key={metric.title} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{metric.title}</p>
                  <p className="mt-2 text-base font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <ProductHighlightsTable items={highlights} />
      <PackagesSection
        packages={businessPackages}
        eyebrow="Paket Bisnis"
        title="Solusi internet bisnis fleksibel untuk UMKM hingga Enterprise"
        subtitle="Nikmati SLA 99.95%, IP statik, dan dukungan engineer prioritas yang siap menjaga workflow kritikal perusahaan Anda."
      />
    </div>
  );
}
