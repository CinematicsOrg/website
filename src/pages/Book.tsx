import Button from '../components/Button';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import BookingForm from '../components/blocks/BookingForm';
import Footer from '../components/blocks/Footer';

const ImageList = [
  `bg-[url('images/cinematics_corporate.png')]`,
  `bg-[url('images/cinematics_10.png')]`,
  `bg-[url('images/cinematics_9.png')]`,
];

const Book = () => {
  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);

    section?.scrollIntoView({ behavior: 'smooth' });
  };
  const content = ImageList.map((image) => {
    return <Image classDef={image} key={image} />;
  });
  return (
    <div>
      <div className="bg-[white] text-[black] font-inter">
        <Navbar />
        <div className="px-[80px]">
          <div className="flex flex-col text-center">
            <div className="text-[64px] font-medium mb-[24px]">
              Book a CINEMATICS Experience Today
            </div>
            <div className="text-[20px] mb-[24px]">
              Join us in a flash to turn your dreams into reality. Step into the
              spotlight and let us capture your incredible style. Book now and
              let the magic begin!
            </div>
            <div className="flex justify-center">
              <Button clicked={() => handleScrollToSection('#book')}>
                Book a Session
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[30px] h-[434px] py-[54px] px-[80px]">
          {content}
        </div>
        <div id="book" className="h-[1174px] bg-lblack text-[white] py-[54px]">
          <p className="text-center font-bold font-roboto text-[36px] leading-[42px] mb-[60px]">
            Book a Session
          </p>
          <BookingForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
