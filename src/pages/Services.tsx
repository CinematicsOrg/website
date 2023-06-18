import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import Services from '../components/blocks/Services';

const Service = () => {
  return (
    <div className="bg-[white] text-[black] font-inter">
      <Navbar logoPath="/images/cinematics_logo2.png" />
      <div className="px-[79px]">
        <div className="font-bold text-[36px]">
          <p className="text-center">Services</p>
        </div>
        <div className="my-[32px]">
          <p className="text-left leading-7 text-[19px]">
            Our services encompass a wide array of offerings tailored to meet
            your unique requirements. From customized event packages to cater to
            every clients needs, we provide a bespoke experience that exceeds
            expectations.
          </p>
        </div>
        <div className="pb-[54px] ">
          <Services />
        </div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
