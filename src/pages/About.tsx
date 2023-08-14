import AboutParagraph from '../components/AboutParagraph';
import AboutNav from '../components/blocks/AboutNav';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import AboutClientsImage from '../components/blocks/AboutClientsImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const paragraphContentList = [
  `CINEMATICS is an event and experience company that excels in creating exceptional digital content for a wide
  range of events and occasions. From documentaries and conferences to masterclasses, live productions, product
  ads, activations, weddings, parties, and even funerals, we cover it all.`,
  `Our core mission is to weave beautiful, heartwarming, and inspiring stories that transform into cherished
  memories. We are deeply committed to capturing the genuine essence of your event in its raw and natural form,
  ensuring that every emotion and moment is preserved authentically.`,
  `At CINEMATICS, we have a profound appreciation for the captivating moments that revolve around your special
  occasions. Our passion lies in seeking out those extraordinary instances and immortalizing them through our
  lens, so they can be treasured and revisited for generations to come. Trust us to create enduring memories that
  will stand the test of time`,
];

const About = () => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };

  const paragraphContent = paragraphContentList.map((p) => (
    <AboutParagraph key={p} content={p} classDef="my-[16px] md:my-[24px]" />
  ));

  return (
    <div>
      <div className="bg-[white] text-[black] font-inter">
        <div className="sticky top-0 z-[10000]">
          <Navbar />
        </div>
        <div className="md:grid grid-cols-2 md:mx-[80px] md:mt-[54px] ">
          <div className="md:h-auto px-[37px] py-[38px] bg-[black]">
            <Image
              classDef={`object-cover h-[400px] bg-[url('/images/cinematics_11.png')]`}
            />
          </div>
          <div className="mx-[16px] md:mx-0">
            <div className="md:ml-[138px] md:mt-[118px] py-[32px] content-center">
              <p className="font-bold text-[24px] leading-[30px] md:text-[36px]">
                CINEMATICS
              </p>
              <div className="text-[16px] leading-[24px] md:text-[20px]">
                {paragraphContent}
              </div>
            </div>
          </div>
        </div>
        <AboutNav />
        <div className="md:h-[1134px] px-[16px] md:px-[80px] py-[54px] bg-lblack">
          <div className="md:h-[156px] text-[white]">
            <div className="text-center text-[36px] md:h-[44px] font-bold mb-[22px]">
              Clients
            </div>
            <div className="md:h-[24px] text-[20px]">
              Throughout our extensive experience, we have fostered strong
              partnerships and garnered commendable acknowledgment from numerous
              renowned brands. This distinction is attributed to our unwavering
              commitment to delivering exceptional service within our industry.
            </div>
          </div>
          <AboutClientsImage />

          <div className="flex justify-center">
            <Button style="w-[100%] md:w-[auto]" clicked={handleMoveToBook}>
              Book a CINEMATICS experience
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
