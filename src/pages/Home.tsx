import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/blocks/Footer';
import Services from '../components/blocks/Services';
import HomeImages from '../components/blocks/HomeImages';

const ImageList1 = [
  `bg-[url('images/cinematics_1.png')]`,
  `bg-[url('/images/cinematics_2.png')]`,
  `col-start-1 col-span-2 bg-[url('/images/cinematics_3.png')]`,
  `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_4.png')]`,
];

const ImageList2 = [
  `bg-[url('images/cinematics_5.png')]`,
  `bg-[url('/images/cinematics_6.png')]`,
  `col-start-1 col-span-2 bg-[url('/images/cinematics_7.png')]`,
  `row-start-1 row-span-2 col-start-3 bg-[url('/images/cinematics_8.png')]`,
];

const Home = () => {
  return (
    <div>
      <div className="grid grid-rows-2 content-between h-def bg-cover bg-center bg-no-repeat  bg-[url('/images/Home_background.jpeg')]">
        <div>
          <Navbar logoPath="/images/cinematics_logo.png" />
        </div>
        <div className="flex flex-col items-center content-end justify-center mt-16 py-5 px-20 text-white">
          <div className="flex justify-center p text-6xl font-dancing font-bold text-def">
            Stories Beautifully Told
          </div>
          <div className="font-poppins text-twentyFour leading-9">
            Experience the realization of your dreams with us in no time as we
            specialize in capturing and immortalizing moments, crafting
            beautifully told stories through stunning visuals. Book a session
            with our professional team to bring your unique narrative to life.
          </div>
          <div>
            <Button style="flex items-center py-5 px-10 justify-center text-twentyFour bg-dred ">
              Book a session
            </Button>
          </div>
        </div>
      </div>

      <div className="py-[54px] px-[79px] font-inter bg-[white]">
        <div className="pb-[58px]">
          <Services />
        </div>
        <div className="text-lblack h-[88px] mb-[45px]">
          <p className="text-center font-bold text-[36px]">
            Celebrate life extraordinary moments through the lens of our passion
            and expertise
          </p>
        </div>
        <HomeImages ImageList={ImageList1} />
        <HomeImages ImageList={ImageList2} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
