import WeddingVideoBlock from './WeddingVideoBlock';

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

const PackageAddons = () => {
  return (
    <div className="py-[24px]">
      <WeddingVideoBlock
        title={addOns.title}
        featuresList={addOns.featuresList}
        hasButton={addOns.hasButton}
      />
    </div>
  );
};

export default PackageAddons;
