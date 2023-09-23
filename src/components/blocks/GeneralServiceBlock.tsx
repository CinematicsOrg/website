import Button from '../Button';
import GeneralServiceList from '../GeneralServiceList';
import { useNavigate } from 'react-router-dom';

interface GeneralServiceBlockProps {
  title: string;
  description?: string;
  hasFeaturesTitle: boolean;
  hasFeaturesImg: boolean;
  featureImgPath?: string;
  featuresList: string[];
  deliverablesList?: string[];
  hasDeliverableTitle?: boolean;
  hasDeliverableImg?: boolean;
  deliverablesImgPath?: string;
  isOnlyFeature?: boolean;
}

const GeneralServiceBlock = ({
  title,
  description,
  hasFeaturesTitle,
  hasFeaturesImg,
  featuresList,
  featureImgPath,
  deliverablesList,
  hasDeliverableImg,
  hasDeliverableTitle,
  deliverablesImgPath,
  isOnlyFeature,
}: GeneralServiceBlockProps) => {
  const navigate = useNavigate();

  const handleMoveToBook = () => {
    navigate('/book');
  };
  return (
    <div>
      <div>
        <img
          src={deliverablesImgPath}
          alt="Image"
          className="object-cover max-w-[100%] w-[100%] h-[221px] md:h-[350px] md:mt-[45px]"
        />
      </div>
      <div className="mt-[30px] md:mt-[45px] font-dancing font-bold text-[24px] md:text-[64px] leading-[30px] md:leading-[44px]">
        {title}
      </div>
      {description ? (
        <div className="text-[16px] leading-[24px] my-[8px] md:mt-[45px] md:text-[20px] md:leading-[30px]">
          {description}
        </div>
      ) : null}
      <div className="md:grid grid-cols-2">
        <div className="mb-[31px]">
          <GeneralServiceList
            title={hasFeaturesTitle ? 'Features' : undefined}
            listItem={featuresList}
            imgPath={hasFeaturesImg ? featureImgPath : undefined}
          />
        </div>
        {!isOnlyFeature ? (
          <div>
            <GeneralServiceList
              title={hasDeliverableTitle ? 'Deliverables' : undefined}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              listItem={deliverablesList!}
              imgPath={hasDeliverableImg ? deliverablesImgPath : undefined}
            />
          </div>
        ) : null}
      </div>
      <div className="flex justify-center mt-[32px]">
        <Button style="w-[100%]" clicked={handleMoveToBook}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default GeneralServiceBlock;
