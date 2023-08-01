import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import CorporateServiceList from '../CorporateServiceList';

interface CorporateEventBlockProps {
  title: string;
  featuresList: string[];
  featureImgPath: string;
  deliverablesList: string[];
  deliverablesImgPath: string;
}

const CorporateEventBlock = ({
  title,
  featureImgPath,
  featuresList,
  deliverablesImgPath,
  deliverablesList,
}: CorporateEventBlockProps) => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };
  return (
    <div>
      <div className="mt-[24px] mb-[8px] md:my-[45px] font-dancing font-bold text-[24px] leading-[30px] md:text-[64px] md:leading-[44px]">
        {title}
      </div>
      <div>
        <CorporateServiceList
          title="Features"
          imgPath={featureImgPath}
          listItem={featuresList}
        />
      </div>
      <div>
        <CorporateServiceList
          title="Deliverables"
          imgPath={deliverablesImgPath}
          listItem={deliverablesList}
          reverse={true}
        />
      </div>
      <div className="flex justify-center mt-[32px]">
        <Button style="w-[100%]" clicked={handleMoveToBook}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default CorporateEventBlock;
