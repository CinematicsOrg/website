import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/HA2U1soZxOI',
    title: `Access Game End 360 Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/YXS--pjNcGE',
    title: `360 Couples Compilation`,
  },
  {
    src: 'https://www.youtube.com/embed/JG-9ZP_80fA',
    title: `Khloe half of 50 360 Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/whCN9khZ7iM',
    title: `The Falz Experience 360 videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/NBs8C7U3BtI',
    title: `Sole C 360 Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/oSRCXjfPBoM',
    title: `TEFFEST 360 Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/ZK-6yoyu1_8',
    title: `#houseofope 360 Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/Uo-03-tF4so',
    title: `GT Food and Drink 360 Video booth`,
  },
];

const ThreeSixtyVideoBoothGallery = () => {
  return (
    <div>
      <Gallery youtubeList={youtubeList} />
    </div>
  );
};

export default ThreeSixtyVideoBoothGallery;
