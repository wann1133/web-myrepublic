import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const productItems = [
  { label: 'Paket MyRepublic - Wifi Rumah', to: '/produk/wifi-rumah' },
  { label: 'Paket Internet & TV', to: '/produk/internet-tv' },
  { label: 'Paket Internet Bisnis', to: '/produk/internet-bisnis' }
];

const navLinks = [
  { type: 'dropdown', label: 'Produk', items: productItems },
  { type: 'scroll', label: 'Promo', target: 'packages' },
  { type: 'scroll', label: 'Add-ons', target: 'addons' },
  { type: 'scroll', label: 'Kontak', target: 'contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setProductOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  const isProductActive = productItems.some((item) => item.to === location.pathname);

  const scrollToId = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAnchorClick = (target) => {
    setMenuOpen(false);
    setProductOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(target), 200);
    } else {
      scrollToId(target);
    }
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/85 shadow-lg shadow-brand-500/10 backdrop-blur-lg' : 'bg-transparent'
      }`}
      animate={{
        y: 0,
        boxShadow: scrolled ? '0px 20px 45px rgba(15, 23, 42, 0.25)' : '0px 0px 0px rgba(0,0,0,0)'
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link className="flex items-center gap-3 text-white" to="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/80 text-lg font-bold shadow-neon">
            V
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">VelocityNet</p>
            <p className="text-xs text-white/60">Authorized MyRepublic Partner</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map((item) => {
            if (item.type === 'dropdown') {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  <button
                    type="button"
                    className={`group inline-flex items-center gap-1 rounded-full px-4 py-2 transition ${
                      isProductActive ? 'bg-white/10 text-white' : 'hover:text-white'
                    }`}
                    onClick={() => setProductOpen((prev) => !prev)}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {productOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-4 w-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#f9a8d4]/90 via-[#f97316]/70 to-[#facc15]/80 text-slate-900 shadow-glass"
                      >
                        {item.items.map((linkItem) => {
                          const active = location.pathname === linkItem.to;
                          return (
                            <Link
                              key={linkItem.to}
                              className={`block px-6 py-4 text-sm font-semibold transition ${
                                active ? 'bg-white/20 text-slate-900' : 'hover:bg-white/15'
                              }`}
                              to={linkItem.to}
                            >
                              {linkItem.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.label}
                type="button"
                className="group relative overflow-hidden px-1 transition hover:text-white"
                onClick={() => handleAnchorClick(item.target)}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
            onClick={() => handleAnchorClick('contact')}
          >
            Hubungi Sales
          </button>
          <button className="btn-primary text-xs" type="button" onClick={() => handleAnchorClick('packages')}>
            Lihat Promo
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16" strokeLinecap="round" />
                <path d="M3 11h16" strokeLinecap="round" />
                <path d="M3 16h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 px-6 pb-6 pt-2 text-sm font-medium text-white/80 lg:hidden"
          >
            {navLinks.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-white"
                      onClick={() => setProductOpen((prev) => !prev)}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-transform duration-300 ${productOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {productOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 space-y-2 border-t border-white/10 pt-3"
                        >
                          {item.items.map((child) => (
                            <Link
                              key={child.to}
                              className="block rounded-xl bg-white/5 px-4 py-3 text-xs text-white/80 transition hover:bg-white/10"
                              to={child.to}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  type="button"
                  className="block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-left"
                  onClick={() => handleAnchorClick(item.target)}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              className="btn-primary block w-full text-center"
              type="button"
              onClick={() => handleAnchorClick('contact')}
            >
              Hubungi Sales
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
