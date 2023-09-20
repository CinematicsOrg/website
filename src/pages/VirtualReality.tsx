import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import GeneralServiceBlock from '../components/blocks/GeneralServiceBlock';
import ServiceTitle from '../components/blocks/ServiceTitle';
import { IGeneralServicePackage } from '../utils/interface';

const ringVrFeaturesList = [
  '5 hours of unlimited guest experience',
  'Guest experience recording and sharing',
  'Stanchions for VR battle ring',
  'One HD Meta-Verse VR headset',
  'Top rated attendants',
];

const ringVrDeliverablesList = [
  'HD display of VR game/highlights',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos shared with client.',
];

const boxVrFeaturesList = [
  '5 hours of unlimited guest experience',
  'Guest experience recording and sharing',
  'Stanchions for VR battle ring',
  'One HD Meta-Verse VR headset',
  'Branded 8ft by 16ft media wall',
  'Cinematographer',
  'Top rated attendants',
];

const boxVrDeliverablesList = [
  'HD display of VR game/highlights',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos shared with client.',
];

const PackageList: IGeneralServicePackage[] = [
  {
    title: 'Ring VR',
    featuresList: ringVrFeaturesList,
    deliverablesList: ringVrDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_ringvr.png',
  },
  {
    title: 'Box VR',
    featuresList: boxVrFeaturesList,
    deliverablesList: boxVrDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_boxvr.png',
  },
];

const VirtualReality = () => {
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
        <ServiceTitle title="Virtual Reality Package" />
        <div>{content}</div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default VirtualReality;
