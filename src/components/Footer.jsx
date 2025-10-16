export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between md:py-14">
        <div className="space-y-4 text-white/70">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/80 text-lg font-bold shadow-neon">
              V
            </span>
            <p className="text-lg font-semibold">VelocityNet Authorized Partner</p>
          </div>
          <p className="max-w-md text-sm">
            VelocityNet adalah mitra resmi MyRepublic dengan lisensi pelayanan internet serat optik untuk wilayah
            Jabodetabek, Bandung, Surabaya, dan Medan.
          </p>
          <p className="text-xs text-white/40">© 2025 VelocityNet. Seluruh hak cipta dilindungi.</p>
        </div>

        <div className="grid flex-1 gap-8 text-sm text-white/70 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Produk</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white" href="#packages">
                  Paket Internet
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#comparison">
                  Bandingkan Paket
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#addons">
                  Add-ons
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Perusahaan</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white" href="#contact">
                  Hubungi Tim
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Kontak</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white" href="mailto:sales@velocitynet.id">
                  sales@velocitynet.id
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="tel:+622112345678">
                  +62 21 1234 5678
                </a>
              </li>
              <li>
                <span>Jl. Satrio 88, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
