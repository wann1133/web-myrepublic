import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PackagesSection from '../../components/PackagesSection.jsx';
import ProductHighlightsTable from '../../components/ProductHighlightsTable.jsx';
import comboPackages from '../../data/comboPackages.json';

const highlights = [
  {
    label: 'Combo Premium',
    title: 'Internet + TV 4K dengan 80+ channel favorit',
    description:
      'Pilihan ideal bagi keluarga yang menginginkan koneksi cepat, hiburan lengkap, dan kontrol parental pintar.',
    features: ['STB Android 11', 'Disney+ Hotstar & HBO Go', 'Cloud DVR hingga 200 jam'],
    ctaLabel: 'Lihat Paket Combo',
    ctaHref: '#packages',
    accent: 'pink',
    icon: 'TV'
  },
  {
    label: 'Hybrid Lifestyle',
    title: 'Nikmati streaming tanpa buffering sambil menggelar watch party interaktif',
    description:
      'Paket ini menghadirkan pengalaman menonton sinematik, audio Dolby Atmos, dan koneksi serba cepat untuk seluruh rumah.',
    features: ['Multi-screen hingga 5 device', 'Optimasi bandwidth otomatis', 'Remote smart assistant'],
    ctaLabel: 'Bandingkan Paket',
    ctaHref: '#packages',
    accent: 'purple',
    icon: 'HD',
    imagePosition: 'right'
  }
];

export default function InternetTv() {
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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,111,177,0.25),_transparent_65%)] pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(58,200,255,0.25),transparent_70%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:w-1/2"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Produk - Internet &amp; TV</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Satu Paket Internet &amp; TV untuk Hiburan Tanpa Batas
            </h1>
            <p className="text-sm text-white/70 sm:text-base">
              Rasakan pengalaman sinematik di rumah dengan kualitas gambar 4K, pilihan channel lengkap, dan koneksi
              internet fiber yang konsisten.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary shadow-neon" href="#packages">
                Jelajahi Paket Combo
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white/80 transition hover:border-white/40"
                onClick={goToContact}
              >
                Konsultasi Channel
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="glass-panel relative w-full rounded-[32px] border-white/10 bg-white/10 p-8 text-sm text-white/80 backdrop-blur-3xl lg:w-1/2"
          >
            <h3 className="text-lg font-semibold text-white">Highlight Channel</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Siaran Premium', details: 'HBO Go, beIN Sports 1-3, AXN, Channel News Asia' },
                { title: 'Kids & Edu', details: 'Nick Jr., Disney Channel, National Geographic Kids' },
                { title: 'Cloud DVR', details: 'Rekam hingga 200 jam tanpa perangkat tambahan' },
                { title: 'Audio', details: 'Dukungan Dolby Atmos & DTS Virtual:X' }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.title}</p>
                  <p className="mt-2 text-sm text-white/75">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <ProductHighlightsTable items={highlights} />
      <PackagesSection
        packages={comboPackages}
        eyebrow="Pilihan Combo"
        title="Paket Internet & TV yang siap menghidupkan ruang keluarga"
        subtitle="Semua paket menyertakan STB Android 11, akses channel premium, dan koneksi internet fiber berkecepatan tinggi."
      />
    </div>
  );
}
