import AboutParagraph from '../components/AboutParagraph';
import AboutNav from '../components/blocks/AboutNav';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import AboutClientsImage from '../components/blocks/AboutClientsImage';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const paragraphContentList = [
  `We are a multimedia Organization that creates excellent
  digital contents for documentaries, conferences, master class,
  live production, product ad, activations, weddings, parties,
  funerals etc.`,
  `We tell beautiful, heartwarming and inspiring stories taht
  morph into beautiful memories.`,
  `We are Passionate about documenting the true essence of your
  event as raw and natural as we can see and feel.`,
  `We love and lookout for beautiful moments built around your
  events. Memories to be captured and reserved for a lifetime.`,
];

const About = () => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };

  const paragraphContent = paragraphContentList.map((p) => (
    <AboutParagraph key={p} content={p} classDef="my-[24px]" />
  ));

  return (
    <div>
      <div className="bg-[white] text-[black] font-inter">
        <Navbar />
        <div className="grid grid-cols-2 mx-[80px] mt-[54px] ">
          <div className="px-[37px] py-[38px] bg-[black]">
            <Image classDef={`bg-[url('images/cinematics_11.png')]`} />
          </div>
          <div>
            <div className="ml-[138px] mt-[118px] py-[32px] content-center">
              <p className="font-bold text-[36px]">CINEMATICS</p>
              <div className="text-[20px]">{paragraphContent}</div>
            </div>
          </div>
        </div>
        <AboutNav />
        <div className="h-[1134px] px-[80px] py-[54px] bg-lblack">
          <div className="h-[156px] text-[white]">
            <div className="text-center text-[36px] h-[44px] font-bold mb-[22px]">
              Clients
            </div>
            <div className="h-[24px] text-[20px]">
              Throughout our extensive experience, we have fostered strong
              partnerships and garnered commendable acknowledgment from numerous
              renowned brands. This distinction is attributed to our unwavering
              commitment to delivering exceptional service within our industry.
            </div>
          </div>
          <AboutClientsImage />

          <div className="flex justify-center">
            <Button clicked={handleMoveToBook}>
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
