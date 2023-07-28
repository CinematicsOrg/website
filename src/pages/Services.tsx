import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import Services from '../components/blocks/Services';

const Service = () => {
  return (
    <div className="bg-[white] text-[black] font-inter">
      <Navbar />
      <div className="pt-[20px] px-4 md:px-[79px]">
        <div className="font-medium text-[24px] md:font-bold md:text-[36px]">
          <p className="text-center">Services</p>
        </div>
        <div className="my-[10px] md:my-[32px]">
          <p className="text-left text-[16px] leading-6 md:leading-7 md:text-[19px]">
            Our services encompass a wide array of offerings tailored to meet
            your unique requirements. From customized event packages to cater to
            every clients needs, we provide a bespoke experience that exceeds
            expectations.
          </p>
        </div>
        <div className="md:pb-[54px] ">
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
