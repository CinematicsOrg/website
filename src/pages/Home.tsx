import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/blocks/Footer';
import Services from '../components/blocks/Services';
import HomeImages from '../components/blocks/HomeImages';
import { useNavigate } from 'react-router-dom';
import ServiceImageRotation from '../components/blocks/ServiceImageRotation';
import { serviceList } from '../utils/constants';
import ContactSocials from '../components/blocks/ContactSocials';
import GalleryNavbar from '../components/GalleryNavbar';

const ImageList1 = [
  `bg-[url('/images/cinematics_1.png')]`,
  `bg-[url('/images/cinematics_2.png')]`,
  `col-start-1 col-span-2 bg-[url('/images/cinematics_3.png')]`,
  `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_4.png')]`,
];

const ImageList2 = [
  `bg-[url('/images/cinematics_5.png')]`,
  `bg-[url('/images/cinematics_6.png')]`,
  `col-start-1 col-span-2 bg-[url('/images/cinematics_7.png')]`,
  `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_8.png')]`,
];

const Home = () => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };
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
            <Button style="w-[100%] md:w-[auto]" clicked={handleMoveToBook}>
              Book a Service
            </Button>
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
        <div className="flex justify-center mb-[15px] md:mb-0">
          <Button style="w-[100%] md:w-[auto]" clicked={handleMoveToBook}>
            Book a Service
          </Button>
        </div>
      </div>
      <div className="flex justify-center font-bold text-[black] text-[24px] md:text-[32px] bg-[white] pt-[40px] pb-[15px] md:pt-[80px] md:pb-[32px]">
        PORTFOLIO
      </div>
      <GalleryNavbar />
      <div className="py-[54px] px-[16px] md:px-[79px] font-inter bg-[white]">
        <div className="hidden md:block md:pb-[58px]">
          <Services />
        </div>
        <div className="md:hidden">
          <ServiceImageRotation imageList={serviceList} />
        </div>
        <div className="text-lblack mb-[15px] md:mb-[45px] text-center font-bold text-[24px] md:text-[36px]">
          Celebrate life extraordinary moments through the lens of our passion
          and expertise
        </div>
        <HomeImages ImageList={ImageList1} />
        <HomeImages ImageList={ImageList2} />
      </div>
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Home;
