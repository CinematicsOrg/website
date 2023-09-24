import { Link } from 'react-router-dom';
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
  return (
    <div>
      <div className="md:hidden">
        <img
          src={featureImgPath}
          alt="Image"
          className="object-cover max-w-[100%] w-[100%] h-[221px] md:h-[350px] md:mt-[45px]"
        />
      </div>
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
      <div className="md:hidden">
        <img
          src={deliverablesImgPath}
          alt="Image"
          className="object-cover max-w-[100%] w-[100%] h-[221px] md:h-[350px] md:mt-[45px]"
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
      <div className="flex justify-center my-[32px]">
        <Link to="/book/#book">
          <Button style="w-[100%]">Book Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default CorporateEventBlock;
