import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/blocks/Footer';
import { Link, useLocation } from 'react-router-dom';
import ContactSocials from '../components/blocks/ContactSocials';
import GalleryNavbar from '../components/GalleryNavbar';
import { useEffect } from 'react';
import GalleryServices from '../components/blocks/GalleryServices';
import YoutubeVideo from '../components/YoutubeVideo';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="md:hidden sticky top-0 z-[10000]">
        <Navbar logoPath="/images/cinematics_logo.png" />
      </div>
      <div className="flex flex-col md:content-between h-[245px] md:h-def bg-cover bg-center bg-no-repeat  bg-[url('/images/Home_background.jpeg')]">
        <div className="hidden md:block sticky top-0 z-[10000]">
          <Navbar
            logoPath="/images/cinematics_logo.png"
            bgColour="md:bg-[inherit]"
          />
        </div>
        <div className="hidden md:flex flex-col px-[16px] md:pb-4 md:px-20 justify-center text-white mt-auto">
          <div className="flex justify-center text-[32px] pt-[40px] md:mb-[15px] font-dancing font-bold md:text-def">
            Stories Beautifully Told
          </div>
          <div className="flex justify-center font-poppins text-[14px] md:text-twentyFour md:mb-[15px] leading-9">
            Experience the realization of your dreams with us in no time as we
            specialize in capturing and immortalizing moments, crafting
            beautifully told stories through stunning visuals. Book a service
            with our professional team to bring your unique narrative to life.
          </div>
          <div className="flex justify-center mb-[15px] md:mb-0">
            <Link to="/book/#book">
              <Button style="w-[100%] md:w-[auto]">Book a Service</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-col bg-[black] md:hidden px-[16px] md:pb-4 md:px-20 justify-center text-white mt-auto">
        <div className="flex justify-center text-[32px] pt-[40px] md:mb-[15px] font-dancing font-bold md:text-def">
          Stories Beautifully Told
        </div>
        <div className="flex justify-center font-poppins text-[14px] md:text-twentyFour md:mb-[15px] leading-9">
          Experience the realization of your dreams with us in no time as we
          specialize in capturing and immortalizing moments, crafting
          beautifully told stories through stunning visuals. Book a service with
          our professional team to bring your unique narrative to life.
        </div>
        <div className="flex justify-center pb-[15px] md:mb-0">
          <Link to="/book/#book">
            <Button style="w-[100%] md:w-[auto]">Book a Service</Button>
          </Link>
        </div>
      </div>
      <div className="pt-[40px] md:py-[54px] px-[16px] md:px-[79px] bg-[white]">
        <YoutubeVideo
          videoSource={`https://www.youtube.com/embed/_pZNWOTXNms`}
          autoPlay={1}
          mute={1}
          roundedAtTheEdge={false}
          heigth="h-[360px] md:h-[700px]"
        />
      </div>
      <div id="galleryNavbar">
        <div className="flex justify-center font-bold text-[black] text-[24px] md:text-[32px] bg-[white] pt-[40px] pb-[15px] md:pt-[80px] md:pb-[32px]">
          GALLERY
        </div>
        <GalleryNavbar />
      </div>
      <div className="py-[54px] px-[16px] md:px-[79px] font-inter bg-[white]">
        <div className="md:pb-[58px]">
          <GalleryServices />
        </div>
      </div>
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Home;
