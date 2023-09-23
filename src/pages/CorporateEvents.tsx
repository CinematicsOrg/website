import Navbar from '../components/Navbar';
import CorporateEventBlock from '../components/blocks/CorporateEventBlock';
import Footer from '../components/blocks/Footer';
import PackageAddons from '../components/blocks/PackageAddons';
import ServiceTitle from '../components/blocks/ServiceTitle';

const proExecutiveFeaturesList = [
  'Press conference',
  'Planners event production coverage highlight',
  'Red carpet coverage and interview',
  '360 Video booth / SLO-MO / VR experience (4 hours)',
  'Unlimited 360 / SLO-MO / VR video',
  'Real time edith and display on screen',
  '4 Cinematographers',
  'Drone video coverage',
  'Crane video coverage',
  'After party coverage',
  'Live feed',
  'Hashtag slider',
];

const proExecutiveDeliverablesList = [
  '1 Customized USB flash',
  '1 min & 5 minute event highlight',
  'Secure online private link video',
  'Event BTS highlight',
  'All guest 360 / SLO-MO / VR video',
  'Planners event production coverage highlight',
  '360 / SLO-MO video highlight',
  'Hall decor highlight',
  'Short video reels for social media',
  'Full video per segment',
];

const executiveFeaturesList = [
  'Press conference',
  'Planners event production coverage highlight',
  'Red carpet coverage and interview',
  '360 Video booth / SLO-MO / VR experience (4 hours)',
  'Real time edith and display on screen',
  '4 Cinematographers',
  'Drone video coverage',
  'Unlimited 360 / SLO-MO / VR video',
  'After party coverage',
];

const executiveDeliverablesList = [
  '1 Customized USB flash',
  '1 min & 5 minute event highlight',
  'Secure online private link video',
  'Event BTS highlight',
  'All guest 360 / SLO-MO / VR video',
  'Planners event production coverage highlight',
  'Hall decor highlight',
  'Short video reels for social media',
  'Full video per segment',
];

const diamondFeaturesList = [
  '3 Cinematographers',
  'Drone video coverage',
  'Red carpet coverage and interview',
  'External Audio Recording',
];

const diamondDeliverablesList = [
  '1 min event highlight',
  '5 Minute full event highlight',
  'Event decor highlight',
  'Event full video',
  '1 Customised flash drive with video',
];

const goldFeaturesList = [
  '3 Cinematographers',
  'Red carpet coverage and interview',
  'External Audio Recording',
];

const goldDeliverablesList = [
  '1 min event highlight',
  '5 Minute full event highlight',
  'Event full video',
  '1 Customised flash drive with video',
];

const packageList = [
  {
    title: 'Pro Executive Package',
    featuresList: proExecutiveFeaturesList,
    featureImgPath: '/images/cinematics_proexecutivefeatures.png',
    deliverablesList: proExecutiveDeliverablesList,
    deliverablesImgPath: '/images/cinematics_proexecutivedeliverables.png',
  },
  {
    title: 'Executive Package',
    featuresList: executiveFeaturesList,
    featureImgPath: '/images/cinematics_corporateexecutivefeaturesList.png',
    deliverablesList: executiveDeliverablesList,
    deliverablesImgPath:
      '/images/cinematics_corporateexecutivedeliverables.png',
  },
  {
    title: 'Diamond Package',
    featuresList: diamondFeaturesList,
    featureImgPath: '/images/cinematics_proexecutivefeatures.png',
    deliverablesList: diamondDeliverablesList,
    deliverablesImgPath: '/images/cinematics_corporatediamonddeliverables.png',
  },
  {
    title: 'Gold Package',
    featuresList: goldFeaturesList,
    featureImgPath: '/images/cinematics_corporategoldfeatures.png',
    deliverablesList: goldDeliverablesList,
    deliverablesImgPath: '/images/cinematics_corporategolddeliverables.png',
  },
];

const CorporateEvents = () => {
  const content = packageList.map((i, index) => {
    return (
      <div key={index}>
        <CorporateEventBlock
          title={i.title}
          deliverablesImgPath={i.deliverablesImgPath}
          deliverablesList={i.deliverablesList}
          featureImgPath={i.featureImgPath}
          featuresList={i.featuresList}
        />
      </div>
    );
  });
  return (
    <div className="text-[black] bg-[white]">
      <div className="sticky top-0 z-[10000]">
        <Navbar />
      </div>
      <div className="mx-[16px] md:mx-[80px]">
        <ServiceTitle
          title="Corporate Event Videography"
          description="Experience the realization of your dreams with us in no time as we
          specialize in capturing and immortalizing moments, crafting
          beautifully told stories through stunning visuals. To cater to the
          diverse needs of our esteemed clients, we offer a range of meticulous
          designed packages under our specialized service. Each package has been
          thoughtfully curated to provide a unique and personalized experience,
          ensuring that your specific requirements are met with utmost precision
          and creativity."
        />
        {content}
        <PackageAddons />
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default CorporateEvents;
