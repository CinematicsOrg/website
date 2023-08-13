import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import NotFoundError from '../pages/NotFoundError';
import Book from '../pages/Book';
import WeddingPackages from '../pages/WeddingPackages';
import CorporateEvents from '../pages/CorporateEvents';
import VideoBooth from '../pages/VideoBooth';
import EventPhotography from '../pages/EventPhotography';
import VirtualReality from '../pages/VirtualReality';
import PhotoBooth from '../pages/PhotoBooth';
import CorporatePhotography from '../pages/CorporatePhotography';
import CorporateGallery from '../pages/CorporateGallery';
import WeddingGallery from '../pages/WeddingGallery';
import VirtualRealityGallery from '../pages/VirtualRealityGallery';
import PhotoBoothGallery from '../pages/PhotoBoothGallery';
import VideoBoothGallery from '../pages/VideoBoothGallery';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/wedding-package" element={<WeddingPackages />} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route
          path="/corporate-photography"
          element={<CorporatePhotography />}
        />
        <Route path="/video-booth" element={<VideoBooth />} />
        <Route path="/photo-booth" element={<PhotoBooth />} />
        <Route path="/event-photography" element={<EventPhotography />} />
        <Route path="/virtual-reality" element={<VirtualReality />} />
        <Route path="/gallery-corporate" element={<CorporateGallery />} />
        <Route path="/gallery-wedding" element={<WeddingGallery />} />
        <Route path="/gallery-virtual" element={<VirtualRealityGallery />} />
        <Route path="/gallery-photo" element={<PhotoBoothGallery />} />
        <Route path="/gallery-video" element={<VideoBoothGallery />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
