import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import PackageAddons from '../components/blocks/PackageAddons';
import WeddingVideoBlock from '../components/blocks/WeddingVideoBlock';

const premiumPlatinumFeaturesList = [
  'Pre-wedding video shoot',
  'Bride & Grooms wedding preparation',
  'Planners event production coverage',
  'Bridal party preparation and interview',
  'Unlimited photo-booth pictures',
  'Unlimited video-booth videos',
  '2 Pre-wedding cinematographer',
  '4 Wedding cinematographer',
  'Real time bridal prep edit and display on screen',
  'Social media trend on wedding blogs and portals',
  'Hashtag slider',
  'Drone aerial video coverage',
  'Live feed and live stream',
  'Mirror Photo-booth',
  '360 Enclosed branded video-booth',
];

const premiumPlanDeliverablesList = [
  '1 Hard drive',
  '1 Customized USB flash drive',
  'Secure online private link videos',
  '1 min & 5 minute event highlight',
  'Wedding decor highlight video',
  'Wedding full video per segment',
  'Short video reels for social media',
  'All guest photo booth & video booth videos',
  'Pre-wedding video highlight',
  '360 video highlight',
  'Bridal entrance highlight',
  'Planners event production coverage highlight',
];

const premiumExecutiveFeaturesList = [
  'Pre-wedding video shoot',
  'Bride & Grooms wedding preparation',
  'Planners event production coverage',
  'Bridal party preparation and interview',
  'Unlimited photo-booth pictures',
  'Unlimited video-booth videos',
  '2 Pre-wedding cinematographer',
  '4 Wedding cinematographer',
  'Hashtag slider',
  'Live feed and live stream',
  'Social media trend on wedding blogs and portals',
  'Mirror Photo-booth',
  '360 Enclosed branded video-booth',
  'Real time bridal prep edit and display on screen',
  'Drone aerial video coverage',
];

const premiumExecutiveDeliverablesList = [
  '1 Hard drive',
  '1 Customized USB flash drive',
  '1 min & 5 minute event highlight',
  'Wedding decor highlight video',
  'Planners event production coverage highlight',
  '360 video highlight',
  'Short video reels for social media',
  'Bridal entrance highlight',
  'Pre-wedding video highlight',
  'Wedding full video per segment',
  'Secure online private link videos',
  'All guest photo-booth picture / 360 videos',
];

const executiveFeaturesList = [
  'Pre-wedding video shoot',
  'Bride & Grooms wedding preparation',
  'Planners event production coverage',
  'Bridal party preparation and interview',
  '2 Pre-wedding cinematographer',
  '3 Wedding cinematographer',
  'Hashtag slider',
  'Photo-booth / Video-booth of choice',
  'Unlimited 360 / slo-mo videos',
  '360 video-booth or slo-mo (4 hours)',
  'Real time bridal prep edit and display on screen',
  'Drone aerial video coverage',
];

const executiveDeliverablesList = [
  '1 Customized USB flash drive',
  '1 min & 5 minute event highlight',
  'Wedding decor highlight video',
  'Planners event production coverage highlight',
  '360 Slo-mo video highlight',
  'Short video reels for social media',
  'Bridal entrance highlight',
  'Pre-wedding video highlight',
  'Wedding full video per segment',
  'Secure online private link videos',
  'All guest 360 / slo-mo videos',
];

const diamondFeaturesList = [
  'Pre-wedding video shoot',
  'Bride & Grooms wedding preparation',
  'Bridal party preparation and interview',
  'Real time bridal prep edit and display on screen',
  '1 Pre-wedding cinematographer',
  '3 Wedding cinematographer',
  'Planners event production coverage',
  'Drone aerial video coverage',
];

const diamondDeliverablesList = [
  '1 Customized USB flash drive',
  '1 min & 5 minute event highlight',
  'Wedding decor highlight video',
  'Planners event production coverage highlight',
  'Short video reels for social media',
  'Secure online private link videos',
  'Pre-wedding video highlight',
  'Wedding full video per segment',
];

const goldFeaturesList = [
  'Pre-wedding video shoot',
  '1 Pre-wedding cinematographer',
  '3 Wedding cinematographer',
  'External audio recording',
  'Real time bridal prep edit and display on screen',
  'Bridal party preparation and interview coverge',
  'Bride & Grooms wedding preparation',
];

const goldDeliverablesList = [
  '1 Customized USB flash drive',
  '1 min & 5 minute event highlight',
  'Wedding decor highlight video',
  'Secure online private link videos',
  'Short video reels for social media',
  'Pre-wedding video highlight',
  'Wedding full video per segment',
];

const serviceList1 = [
  '360 Video booth',
  'Maze booth',
  'Flip cam',
  'Elevator booth',
  'Show glass booth',
  'Runaway booth',
];

const serviceList2 = ['Mirror booth', 'Favorite razor booth', 'Halo booth'];

const packagesList = [
  {
    title: 'Premium Plantium Executive Package',
    description:
      'Wedding documentary filming would include; Arrivals, Family reunion, Dress fittings, Bridal shower / Bachelorette, Rehearsal, Pre-wedding / Wedding.',
    featuresList: premiumPlatinumFeaturesList,
    featureImgPath: 'images/cinematics_premiumdeliverables.png',
    deliverablesList: premiumPlanDeliverablesList,
    deliverablesImgPath: 'images/cinematics_premiumdeliverables.png',
    extraServiceList1: serviceList1,
    extraServiceList2: serviceList2,
    hasButton: true,
  },
  {
    title: 'Premium Executive Package',
    description:
      'Wedding documentary filming would include; Arrivals, Dress fittings, Bridal shower / Bachelorette, Pre-wedding / Wedding.',
    featuresList: premiumExecutiveFeaturesList,
    featureImgPath: 'images/cinematics_executivedeliverables.png',
    deliverablesList: premiumExecutiveDeliverablesList,
    deliverablesImgPath: 'images/cinematics_executivedeliverables.png',
    hasButton: true,
  },
  {
    title: 'Executive Package',
    description:
      'Wedding documentary filming would include; Pre-wedding / Wedding.',
    featuresList: executiveFeaturesList,
    featureImgPath: 'images/cinematics_execfeatures.png',
    deliverablesList: executiveDeliverablesList,
    deliverablesImgPath: 'images/cinematics_execdeliverables.png',
    hasButton: true,
  },
  {
    title: 'Diamond Package',
    description:
      'Wedding documentary filming would include; Pre-wedding / Wedding.',
    featuresList: diamondFeaturesList,
    featureImgPath: 'images/cinematics_diamondfeatures.png',
    deliverablesList: diamondDeliverablesList,
    hasButton: true,
  },
  {
    title: 'Gold Package',
    description:
      'Wedding documentary filming would include; Pre-wedding / Wedding.',
    featuresList: goldFeaturesList,
    featureImgPath: 'images/cinematics_goldfeatures.png',
    deliverablesList: goldDeliverablesList,
    hasButton: true,
  },
];

const WeddingPackages = () => {
  const content = packagesList.map((i, index) => {
    return (
      <WeddingVideoBlock
        key={index}
        title={i.title}
        description={i.description}
        featuresList={i.featuresList}
        featureImgPath={i.featureImgPath}
        deliverablesImgPath={i.deliverablesImgPath}
        deliverablesList={i.deliverablesList}
        extraServiceList1={i.extraServiceList1}
        extraServiceList2={i.extraServiceList2}
        hasButton={i.hasButton}
      />
    );
  });
  return (
    <div className="text-[black] bg-[white]">
      <Navbar logoPath="/images/cinematics_logo2.png" />
      <div className="mx-[80px]">
        <div className="text-center leading-[44px] text-[64px] font-bold font-dancing mt-[45px] mb-[45px] ">
          Wedding Video Packages
        </div>
        <div className="font-inter text-[20px] leading-[30px] mt-[45px]">
          We transform your wedding documentation to a creative, compelling and
          inspiring story as we pay attention to every detail of your wedding.
          Each package has been thoughtfully curated to provide a unique and
          personalized experience, ensuring that your specific requirements are
          met with utmost precision and creativity.
        </div>
        {content}
        <PackageAddons />
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default WeddingPackages;
