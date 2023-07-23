import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import ServiceItem from '../components/ServiceItem';
import ServiceTitle from '../components/blocks/ServiceTitle';
import Footer from '../components/blocks/Footer';

const PackageList = [
  'Slo-mo booth',
  '360 Video-booth',
  'Clone booth',
  'Glam booth',
  'Elevator booth',
  'Maze booth',
];

const ImageList = [
  '/images/cinematics_photobooth1.png',
  '/images/cinematics_photobooth2.png',
];

const VideoBooth = () => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };

  const content = PackageList.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });

  const imageContent = ImageList.map((i, index) => {
    return (
      <div className="mb-[32px]">
        <img src={i} alt="Image" />
      </div>
    );
  });
  return (
    <div className="text-[black] bg-[white]">
      <Navbar logoPath="/images/cinematics_logo2.png" />
      <div className="mx-[80px]">
        <ServiceTitle
          title="Photo & Video-booth Experience"
          description="We keep up with the latest video-booth experience, to help brands create organic social media content giving you the dopest and most shareable contents thats always evolving."
        />
        <div className="h-[30px] text-[20px] font-medium leading-[30px] mt-[56px] mb-[24px]">
          Features
        </div>
        <div className="mb-[32px]">{content}</div>
        {imageContent}
        <div className="flex justify-center mt-[32px] mb-[54px]">
          <Button style="w-[100%]" clicked={handleMoveToBook}>
            Book Now
          </Button>
        </div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default VideoBooth;
