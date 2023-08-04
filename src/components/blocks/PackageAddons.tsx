import ServiceItem from '../ServiceItem';
import WeddingVideoBlock from './WeddingVideoBlock';

interface PackageAddonsProps {
  list?: string[];
}

const addOns = {
  title: 'Package Add-Ons',
  featuresList: [
    'Ariel drone capture',
    'Extra cinematographer',
    'Crane video capture',
    '4k Film production',
    '360 Video booth shoot',
    '360 Video booth (Enclosed branding media wall)',
    'Hashtag slider',
    'Event live reel',
    'Social media trend',
    'Event video live streaming',
    'After party coverage',
    'Photo booth',
    'Photography',
  ],
  hasButton: false,
};

const PackageAddons = ({ list }: PackageAddonsProps) => {
  const listContent =
    list &&
    list.map((i, index) => {
      return <ServiceItem key={index}>{i}</ServiceItem>;
    });
  return (
    <div>
      {!list ? (
        <div className="py-[24px]">
          <WeddingVideoBlock
            title={addOns.title}
            featuresList={addOns.featuresList}
            hasButton={addOns.hasButton}
          />
        </div>
      ) : (
        <div>
          <div className="mt-[30px] md:mt-[45px] font-dancing font-bold text-[24px] md:text-[64px] leading-[30px] md:leading-[44px]">
            {addOns.title}
          </div>
          <div className="font-medium font-inter text-[20px] md:text-[24px] leading-[30px] pb-[10px] md:pb-[50px] pt-[24px]">
            Features
          </div>
          <div>{listContent}</div>
        </div>
      )}
    </div>
  );
};

export default PackageAddons;
