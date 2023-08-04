import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import NotFoundError from '../pages/NotFoundError';
import Book from '../pages/Book';
import WeddingPackages from '../pages/WeddingPackages';
import CorporateEvents from '../pages/CorporateEvents';
import VideoBooth from '../pages/VideoBooth';
import EventPhotography from '../pages/EventPhotography';
import VirtualReality from '../pages/VirtualReality';
import PhotoBooth from '../pages/PhotoBooth';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/wedding-package" element={<WeddingPackages />} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route path="/video-booth" element={<VideoBooth />} />
        <Route path="/photo-booth" element={<PhotoBooth />} />
        <Route path="/event-photography" element={<EventPhotography />} />
        <Route path="/virtual-reality" element={<VirtualReality />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
