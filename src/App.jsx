import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppBubble from './components/WhatsAppBubble.jsx';
import Home from './pages/Home.jsx';
import WifiRumah from './pages/products/WifiRumah.jsx';
import InternetTv from './pages/products/InternetTv.jsx';
import InternetBisnis from './pages/products/InternetBisnis.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden bg-[#050713] text-white">
        <Navbar />
        <main className="pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk/wifi-rumah" element={<WifiRumah />} />
            <Route path="/produk/internet-tv" element={<InternetTv />} />
            <Route path="/produk/internet-bisnis" element={<InternetBisnis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppBubble />
      </div>
    </BrowserRouter>
  );
}
