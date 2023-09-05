import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/GcE409unSFY',
    title: `Amaka Obiawulu's 40th Birthday Celebration`,
  },
  {
    src: 'https://www.youtube.com/embed/hz7u8BakhAA',
    title: `E-MONEY's 40th Birthday`,
  },
  {
    src: 'https://www.youtube.com/embed/ic5g6tdwLio',
    title: `Olohije Osakioduwa's 40th Birthday Celebration- Relieve your childhood memories`,
  },
  {
    src: 'https://www.youtube.com/embed/ewqfX-ys-qE',
    title: `Dr Blossom (blossom fitness) 50th Birthday Celebration`,
  },
  {
    src: 'https://www.youtube.com/embed/mNyuQNepXsw',
    title: `Chukwuka Monye's 40th Birthday Celebration`,
  },
  {
    src: 'https://www.youtube.com/embed/W3LCw9uEZfc',
    title: `Mama Onabanjo's 100th Birthday Celebration`,
  },
  {
    src: 'https://www.youtube.com/embed/Ko4reSz5mCU',
    title: `Mrs Rose's 50th Birthday Celebration`,
  },
  {
    src: 'https://www.youtube.com/embed/RPFulsffNlg',
    title: `Omotola Jalade Ekeinde 40th Birthday Grand Ball #omotola4point0 omosexy`,
  },
];

const BirthdayGallery = () => {
  return (
    <div>
      <Gallery youtubeList={youtubeList} />
    </div>
  );
};

export default BirthdayGallery;
