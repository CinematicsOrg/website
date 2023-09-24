import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/blocks/Footer';
import { Link, useLocation } from 'react-router-dom';
// import { galleryLinks } from '../utils/constants';
import ContactSocials from '../components/blocks/ContactSocials';
import GalleryNavbar from '../components/GalleryNavbar';
import { useEffect } from 'react';
import GalleryServices from '../components/blocks/GalleryServices';

// const ImageList1 = [
//   `bg-[url('/images/cinematics_1.png')]`,
//   `bg-[url('/images/cinematics_2.png')]`,
//   `col-start-1 col-span-2 bg-[url('/images/cinematics_3.png')]`,
//   `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_4.png')]`,
// ];

// const ImageList2 = [
//   `bg-[url('/images/cinematics_5.png')]`,
//   `bg-[url('/images/cinematics_6.png')]`,
//   `col-start-1 col-span-2 bg-[url('/images/cinematics_7.png')]`,
//   `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_8.png')]`,
// ];

const Home = () => {
  const location = useLocation();
  // const galleryList = galleryLinks.slice(1);

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
        {/* <div className="md:hidden">
          <ServiceImageRotation imageList={galleryList} />
        </div> */}
        {/* <div className="text-lblack mb-[15px] md:mb-[45px] text-center font-bold text-[24px] md:text-[36px]">
          Celebrate life extraordinary moments through the lens of our passion
          and expertise
        </div>
        <HomeImages ImageList={ImageList1} />
        <HomeImages ImageList={ImageList2} /> */}
      </div>
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Home;
