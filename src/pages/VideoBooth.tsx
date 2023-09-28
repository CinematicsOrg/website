import Navbar from '../components/Navbar';
import Footer from '../components/blocks/Footer';
import GeneralServiceBlock from '../components/blocks/GeneralServiceBlock';
import { IGeneralServicePackage } from '../utils/interface';
import ServiceTitle from '../components/blocks/ServiceTitle';

const threeSixtyVistaFeaturesList = [
  '5 hours of unlimited guest experience',
  'HD display of video',
  '360 cam booth',
  'Led lights',
  'Top rated attendants',
];

const threeSixtyVistaDeliverablesList = [
  'Video edit and share with guests',
  'Customized video watermark',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const threeSixtyGalaxyFeaturesList = [
  'Installation of media wall round booth',
  'Media wall branding',
  '5 hours of unlimited guest experience',
  'HD display of video',
  'Top rated attendants',
  '360 cam booth',
  'Led lights',
];

const threeSixtyGalaxyDeliverablesList = [
  'Video edit and share with guests',
  'Customized video watermark',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const mazeBoothFeaturesList = [
  'Installation of maze booth',
  '5 hours of unlimited guest experience',
  'Special effects ( Spotlight, HD display)',
  'Top rated attendants',
  'Led lights',
];

const mazeBoothDeliverablesList = [
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const boxBoothFeaturesList = [
  'Media wall branding',
  'Live HD display of slow motion video',
  'Top rated attendants',
  'Led lights',
  'Installation and branding of 7ft x 7fx booth',
  '5 hours unlimited slow motion video booth experience',
];

const boxBoothDeliverablesList = [
  'Video edit and share with guest',
  'Slow motion video booth compilation',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const runwayBoothFeaturesList = [
  'Installation and branding of 15ft x 15fx runway',
  '5 hours unlimited slow motion video booth experience',
  'HD display of video',
  'Top rated attendants',
  'Stanchions',
  'Led lights',
];

const runwayBoothDeliverablesList = [
  'Video edit and share with guest',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const elevatorBoothFeaturesList = [
  'Installation of 6ft x 6fx booth',
  'Booth branding',
  '5 hours unlimited guest experience',
  'HD display of video',
  'HD display of video',
  'Led lights',
];

const elevatorBoothDeliverablesList = [
  'Video edit and share with guest',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const screenBoothFeaturesList = [
  'Installation of 7ft x 6ft booth',
  'Top rated attendants',
  '6ft LED screen',
  'Led lights',
  'Live feed',
  'Flower installation',
  'Branded flooring',
  '5 hours unlimited guest experience',
  'Led stage floor (available at an extra cost)',
];

const screenBoothDeliverablesList = [
  'Video edit and share with guest',
  'Video compilation',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const flipCamBoothFeaturesList = [
  'Flip cam installation',
  '5 hours unlimited guest experience',
  'Top rated attendants',
  'HD display of video',
  'LED lights',
  'LED floor',
  'LED display',
];

const flipCamBoothDeliverablesList = [
  'Video edit and share with guest',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const showGlassBoothFeaturesList = [
  'Lighting and glass branding',
  '5 hours unlimited guest experience',
  'Screen display',
  'Top rated attendants',
  'Show glass booth design, fabrication and installation',
];

const showGlassBoothDeliverablesList = [
  'Video edit and sharing',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const clientCustomizedBoothFeaturesList = [
  'HD display',
  'LED light',
  'Top rated attendants',
  '5 hours unlimited slow motion video booth experience',
];

const clientCustomizedBoothDeliverablesList = [
  'Video edit and share with guest',
  'Slow motion video booth compilation',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const productExperienceFeaturesList = [
  '5 hours unlimited video shoot',
  'Product user experience',
  'HD display of video',
  'Top rated attendants',
  'LED lights',
];

const productExperienceDeliverablesList = [
  'Video edit',
  '1 Minute video highlight',
  'Link download for optimum quality',
  'A link containing all the event videos',
];

const PackageList: IGeneralServicePackage[] = [
  {
    title: '360 Booth Vista',
    featuresList: threeSixtyVistaFeaturesList,
    deliverablesList: threeSixtyVistaDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_videobooth_360vista.png',
  },
  {
    title: '360 Booth Galaxy',
    featuresList: threeSixtyGalaxyFeaturesList,
    deliverablesList: threeSixtyGalaxyDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_videobooth_360galaxy.png',
  },
  {
    title: 'Maze Booth',
    featuresList: mazeBoothFeaturesList,
    deliverablesList: mazeBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_2.png',
  },
  {
    title: 'Box Booth',
    featuresList: boxBoothFeaturesList,
    deliverablesList: boxBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_videobooth_360galaxy.png',
  },
  {
    title: 'Runway Booth Galaxy',
    featuresList: runwayBoothFeaturesList,
    deliverablesList: runwayBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_videobooth_360vista.png',
  },
  {
    title: 'Elevator Booth',
    featuresList: elevatorBoothFeaturesList,
    deliverablesList: elevatorBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_2.png',
  },
  {
    title: 'Screen Booth',
    featuresList: screenBoothFeaturesList,
    deliverablesList: screenBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_videobooth_screen.png',
  },
  {
    title: 'Flip Cam Booth',
    featuresList: flipCamBoothFeaturesList,
    deliverablesList: flipCamBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_1.png',
  },
  {
    title: 'Show glass booth',
    featuresList: showGlassBoothFeaturesList,
    deliverablesList: showGlassBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_2.png',
  },
  {
    title: 'Client Customized Booth',
    featuresList: clientCustomizedBoothFeaturesList,
    deliverablesList: clientCustomizedBoothDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth.png',
  },
  {
    title: 'Product Experience',
    featuresList: productExperienceFeaturesList,
    deliverablesList: productExperienceDeliverablesList,
    hasFeaturesTitle: true,
    hasFeaturesImg: false,
    hasDeliverableImg: false,
    hasDeliverableTitle: true,
    deliverablesImgPath: '/images/cinematics_video_booth_1.png',
  },
];

const VideoBooth = () => {
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
        <ServiceTitle title="Video Booth Package" />
        <div>{content}</div>
      </div>
      <div className="text-[white]">
        <Footer />
      </div>
    </div>
  );
};

export default VideoBooth;
