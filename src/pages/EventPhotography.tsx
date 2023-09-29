import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import GeneralServiceBlock from '../components/blocks/GeneralServiceBlock';
import PackageAddons from '../components/blocks/PackageAddons';
import ServiceTitle from '../components/blocks/ServiceTitle';
import { addOnsList } from '../utils/constants';
import { IGeneralServicePackage } from '../utils/interface';

const ultimateFeaturesList = [
  '3 Photographers',
  '3 Portraits for celebrant',
  '1 Photo album for couples (size 12x24)',
  'Unlimited edited pictures',
  'An online gallery link of the images',
  'Edited images in a flash drive',
  '1 Photo album for family for family (size 12x16)',
  '12 hours coverage (Ideal for guest number of 100-1000)',
];

const advancedFeaturesList = [
  '2 Photographers',
  '2 Portraits for celebrant',
  '1 Photo album for couples (size 12x24)',
  'Unlimited edited pictures',
  'An online gallery link of the images',
  'Edited images in a flash drive',
  '12 hours coverage (Ideal for guest number of 40-300)',
];

const standardFeaturesList = [
  '1 Photographer',
  '1 Portraits for celebrant',
  '1 Photo album for couples (size 12x24)',
  'Unlimited edited pictures',
  '6 hours coverage (Ideal for guest number of 20-100)',
  'An online gallery link of the images',
];

const basicFeaturesList = [
  '1 Photographer',
  '1 Photo album for couples (size 12x20)',
  'Edited pictures',
  '6 hours coverage ( Ideal for guest number of 20-40)',
  'An online gallery link of the images',
];

const PackageList: IGeneralServicePackage[] = [
  {
    title: 'Ultimate',
    featuresList: ultimateFeaturesList,
    hasFeaturesTitle: false,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: false,
    deliverablesImgPath: '/images/cinematics_eventphotgraphy.png',
  },
  {
    title: 'Advanced',
    featuresList: advancedFeaturesList,
    hasFeaturesTitle: false,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: false,
    deliverablesImgPath: '/images/cinematics_eventphotgraphy_advanced.png',
  },
  {
    title: 'Standard',
    featuresList: standardFeaturesList,
    hasFeaturesTitle: false,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: false,
    deliverablesImgPath: '/images/cinematics_eventphotgraphy_standard.png',
  },
  {
    title: 'Basic',
    featuresList: basicFeaturesList,
    hasFeaturesTitle: false,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: false,
    deliverablesImgPath: '/images/cinematics_eventphotgraphy_basic.png',
  },
];

const EventPhotography = () => {
  const content = PackageList.map((i, index) => {
    return (
      <GeneralServiceBlock
        key={index}
        title={i.title}
        description={i.description}
        featuresList={i.featuresList}
        hasDeliverableImg={i.hasDeliverableImg}
        hasDeliverableTitle={i.hasDeliverableTitle}
        hasFeaturesImg={i.hasFeaturesImg}
        hasFeaturesTitle={i.hasFeaturesTitle}
        deliverablesImgPath={i.deliverablesImgPath}
        deliverablesList={i.deliverablesList}
        isOnlyFeature={true}
      />
    );
  });
  return (
    <div className="text-[black] bg-[white]">
      <div className="sticky top-0 z-[10000]">
        <Navbar />
      </div>
      <div className="mx-[16px] pt-[24px] pb-[14px] md:mx-[80px]">
        <ServiceTitle title="Event Photography Package" />
        <div>
          {content}
          <PackageAddons list={addOnsList} />
        </div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default EventPhotography;
