import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/blocks/Footer';

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
      <Footer />
    </div>
  );
};

export default Home;
