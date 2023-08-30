import ServiceList from '../ServiceList';
import ServiceItem from '../ServiceItem';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

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
    return (
      <div key={index} className="mb-[10px] md:mb-[20px]">
        <ServiceItem>{i}</ServiceItem>
      </div>
    );
  });

  const serviceContent2 = extraServiceList2?.map((i, index) => {
    return (
      <div key={index} className="mb-[10px] md:mb-[20px]">
        <ServiceItem>{i}</ServiceItem>
      </div>
    );
  });
  return (
    <div className="">
      <div className="mt-[30px] md:mt-[45px] font-dancing font-bold text-[24px] md:text-[64px] leading-[30px] md:leading-[44px]">
        {title}
      </div>
      {description ? (
        <div className="text-[16px] leading-[24px] my-[8px] md:mt-[45px] md:text-[20px] md:leading-[30px]">
          {description}
        </div>
      ) : null}
      <div className="">
        <div className="mt-[8px] md:mt-[45px]">
          <ServiceList
            title="Features"
            imgPath={featureImgPath}
            listItem={featuresList}
          />
        </div>
        {deliverablesList ? (
          <div className="mt-[8px] md:mt-[45px]">
            <ServiceList
              title="Deliverables"
              imgPath={deliverablesImgPath}
              listItem={deliverablesList}
            />
          </div>
        ) : null}
      </div>
      {extraServiceList1 ? (
        <div className="text-[16px] md:text-[20px]">
          <div className="mt-[10px] mb-[24px] md:mt-[54px] md:mb-[45px]">
            Premium plantium executive client is entitled to 1 photo and 1 video
            booth services. The services are listed below;
          </div>
          <div className="font-bold md:grid grid-cols-2">
            <div>
              <div className="mb-[10px] md:mb-[20px]">Video Booth Services</div>
              {serviceContent1}
            </div>
            <div>
              <div className="mb-[10px] md:mb-[20px]">Photo booth services</div>
              {serviceContent2}
            </div>
          </div>
        </div>
      ) : null}
      {hasButton ? (
        <div className="flex justify-center mt-[32px]">
          <Link to="/book/#book">
            <Button style="w-[100%]">Book Now</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default WeddingVideoBlock;
