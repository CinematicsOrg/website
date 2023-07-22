import ServiceList from '../ServiceList';
import ServiceItem from '../ServiceItem';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

interface WeddingVideoBlockProps {
  title: string;
  description?: string;
  featuresList: string[];
  featureImgPath?: string;
  deliverablesList?: string[];
  deliverablesImgPath?: string;
  extraServiceList1?: string[];
  extraServiceList2?: string[];
  hasButton: boolean;
}

const WeddingVideoBlock = ({
  title,
  description,
  featuresList,
  featureImgPath,
  deliverablesList,
  deliverablesImgPath,
  extraServiceList1,
  extraServiceList2,
  hasButton,
}: WeddingVideoBlockProps) => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };

  const serviceContent1 = extraServiceList1?.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });

  const serviceContent2 = extraServiceList2?.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });
  return (
    <div className="">
      <div className="my-[45px] h-[44px] font-dancing font-bold text-[64px] leading-[44px]">
        {title}
      </div>
      {description ? (
        <div className="mt-[45px] mb-[45px] h-[60px] text-[20px] leading-[30px]">
          {description}
        </div>
      ) : null}
      <div className="pt-[24px]">
        <div className="my-[45px]">
          <ServiceList
            title="Features"
            imgPath={featureImgPath}
            listItem={featuresList}
          />
        </div>
        {deliverablesList ? (
          <div className="my-[45px]">
            <ServiceList
              title="Deliverables"
              imgPath={deliverablesImgPath}
              listItem={deliverablesList}
            />
          </div>
        ) : null}
      </div>
      {extraServiceList1 ? (
        <div className="grid grid-cols-2">
          <div>
            <div>Video Booth Services</div>
            {serviceContent1}
          </div>
          <div>
            <div>Photo booth services</div>
            {serviceContent2}
          </div>
        </div>
      ) : null}
      {hasButton ? (
        <div className="flex justify-center mt-[32px]">
          <Button style="w-[100%]" clicked={handleMoveToBook}>
            Book Now
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default WeddingVideoBlock;
