import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">404</p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Halaman tidak ditemukan</h1>
        <p className="max-w-md text-sm text-white/60">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda untuk
          menjelajahi promo terbaru VelocityNet.
        </p>
      </div>
      <Link className="btn-primary" to="/">
        Kembali ke Beranda
      </Link>
    </section>
  );
}
