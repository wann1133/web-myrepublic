import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const tableAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function PackageTable({ packages }) {
  const headers = ['Kecepatan', 'Upload : Download', 'Kuota', 'FUP', 'IP', 'Devices', 'Router'];
  const bestValue = packages.reduce((best, tier) => (tier.newPrice < best.newPrice ? tier : best), packages[0]);

  return (
    <motion.section
      id="comparison"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={tableAnimation}
      className="mx-auto mt-16 max-w-6xl rounded-3xl border border-white/10 bg-white/4 p-[1px] backdrop-blur-2xl"
    >
      <div className="glass-panel rounded-[28px] bg-slate-950/60 p-6 sm:p-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Bandingkan Paket</p>
            <h2 className="text-3xl font-bold text-white">Temukan Paket yang Paling Cocok</h2>
          </div>
          <p className="text-sm text-white/60">
            Hover pada paket untuk melihat highlight benefit terbaik dan promo berlaku hingga 31 Desember 2025.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div
            role="table"
            aria-label="Tabel Perbandingan Paket Internet"
            className="grid min-w-max gap-6"
          >
            <div role="row" className="grid grid-cols-[repeat(4,minmax(180px,1fr))] gap-4 text-sm text-white/60">
              <span role="columnheader" className="rounded-2xl bg-white/5 px-4 py-3 text-white">
                Fitur Utama
              </span>
              {packages.map((tier) => (
                <motion.span
                  key={tier.name}
                  role="columnheader"
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.08] px-4 py-3 text-white"
                >
                  <span className="font-semibold">{tier.name}</span>
                  {tier.name === bestValue.name && (
                    <span className="ml-2 rounded-full bg-accent-pink/30 px-2 py-0.5 text-xs text-white/80">Best Deal</span>
                  )}
                </motion.span>
              ))}
            </div>

            {headers.map((header, rowIndex) => (
              <motion.div
                key={header}
                role="row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: rowIndex * 0.05 }}
                className="grid grid-cols-[repeat(4,minmax(180px,1fr))] gap-4 text-sm"
              >
                <div className="rounded-2xl bg-white/5 px-4 py-4 font-medium text-white/70">{header}</div>
                {packages.map((tier) => {
                  const value = getRowValue(header, tier);
                  const isBest = tier.name === bestValue.name;
                  return (
                    <motion.div
                      key={`${tier.name}-${header}`}
                      whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.09)' }}
                      className={`rounded-2xl px-4 py-4 text-white/80 transition ${
                        isBest ? 'border border-accent-pink/40 bg-accent-pink/15 shadow-[0_10px_40px_rgba(255,111,177,0.15)]' : 'border border-white/5 bg-white/5'
                      }`}
                    >
                      {value}
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function getRowValue(header, tier) {
  switch (header) {
    case 'Kecepatan':
      return tier.speed;
    case 'Upload : Download':
      return tier.upload_download;
    case 'Kuota':
      return tier.quota;
    case 'FUP':
      return tier.fup;
    case 'IP':
      return tier.ip;
    case 'Devices':
      return tier.devices;
    case 'Router':
      return tier.router ? 'Gratis Router Wi-Fi 6' : 'Optional';
    default:
      return '-';
  }
}

PackageTable.propTypes = {
  packages: PropTypes.arrayOf(PropTypes.object).isRequired
};
