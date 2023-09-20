import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import GeneralServiceBlock from '../components/blocks/GeneralServiceBlock';
import { IGeneralServicePackage } from '../utils/interface';
import ServiceTitle from '../components/blocks/ServiceTitle';

const haloBoothFeaturesList = [
  '5 hours of unlimited guest experience',
  'Party props',
  'Special collection backdrop',
  'Top related attendants',
];

const haloBoothDeliverablesList = [
  'Instant photo prints',
  'Black & white or color or sephia photos',
  'Customizable photo template design',
  'Full print type',
  'Online photo gallery',
];

const mirrorBoothFeaturesList = [
  '5 hours of unlimited guest experience',
  'Party props',
  'Special collection backdrop',
  'Top related attendants',
];

const mirrorBoothDeliverablesList = [
  'Instant photo prints',
  'Black & white or color or sephia photos',
  'Black & white or color or sephia photos',
  'Full print type',
  'Online photo gallery',
];

const favoriteRazorBoothFeaturesList = [
  '5 hours of unlimited guest experience',
  'Branded Media',
  'Customizable props',
  'Top rated attendants',
];

const favoriteRazorBoothDeliverablesList = [
  'Instant photo prints',
  'All special effects',
  'Customizable photo template design',
  'Full print type',
  'Online photo gallery',
  'HD video messages',
  'Guest reprint',
];

const PackageList: IGeneralServicePackage[] = [
  {
    title: 'Halo Booth',
    featuresList: haloBoothFeaturesList,
    deliverablesList: haloBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_2.png',
  },
  {
    title: 'Mirror Booth',
    featuresList: mirrorBoothFeaturesList,
    deliverablesList: mirrorBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_1.png',
  },
  {
    title: 'Favorite Razor Booth',
    featuresList: favoriteRazorBoothFeaturesList,
    deliverablesList: favoriteRazorBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_2.png',
  },
];

const PhotoBooth = () => {
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
      />
    );
  });
  return (
    <div className="text-[black] bg-[white]">
      <div className="sticky top-0 z-[10000]">
        <Navbar />
      </div>
      <div className="mx-[16px] pt-[24px] pb-[14px] md:mx-[80px]">
        <ServiceTitle title="Photo Booth Package" />
        <div>{content}</div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default PhotoBooth;
