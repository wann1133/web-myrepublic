import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const accentGradients = {
  pink: 'from-[#ff6fb1]/40 via-[#6a3cff]/30 to-[#2e0f6f]/60',
  blue: 'from-[#3ac8ff]/40 via-[#6a3cff]/25 to-[#091132]/70',
  purple: 'from-[#a78fff]/40 via-[#6a3cff]/30 to-[#120738]/65'
};

export default function ProductHighlightsTable({ items }) {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <div className="grid gap-10">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
            className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-[1px]"
          >
            <div className="relative flex flex-col overflow-hidden rounded-[30px] bg-slate-950/80 md:flex-row">
              <div
                className={`relative w-full md:w-1/2 ${item.imagePosition === 'right' ? 'md:order-2' : ''}`}
              >
                <div
                  className={`h-52 w-full transition duration-700 md:h-full ${
                    accentGradients[item.accent || 'purple']
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="glass-panel flex h-24 w-24 items-center justify-center rounded-3xl border-white/20 bg-white/10 text-3xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.icon ?? item.label.slice(0, 2)}
                  </motion.div>
                </div>
              </div>
              <div
                className={`flex w-full flex-col gap-4 p-8 md:w-1/2 md:justify-center ${
                  item.imagePosition === 'right' ? 'md:order-1' : ''
                }`}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">{item.label}</p>
                <h3 className="text-2xl font-semibold text-white lg:text-3xl">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
                {item.features?.length ? (
                  <ul className="grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs text-accent-blue">
                          +
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href={item.ctaHref}
                    className="btn-primary inline-flex items-center gap-2"
                    whileHover={{ x: 4 }}
                  >
                    {item.ctaLabel}
                    <svg width="16" height="16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M8 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.a>
                  {item.secondary && (
                    <a
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white/80 transition hover:border-white/40"
                      href={item.secondary.href}
                    >
                      {item.secondary.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

ProductHighlightsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string),
      ctaLabel: PropTypes.string.isRequired,
      ctaHref: PropTypes.string.isRequired,
      secondary: PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      }),
      accent: PropTypes.oneOf(['pink', 'blue', 'purple']),
      icon: PropTypes.node,
      imagePosition: PropTypes.oneOf(['left', 'right'])
    })
  ).isRequired
};
