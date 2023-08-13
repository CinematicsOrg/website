import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/x9JoMRNaZbg',
    title: `Layole’s Lounge`,
  },
  {
    src: 'https://www.youtube.com/embed/ZC7tUzBE6Nk',
    title: `Breathe Academy`,
  },
  {
    src: 'https://www.youtube.com/embed/xoAU85wS1x0',
    title: `Layole’s Lounge`,
  },
  {
    src: 'https://www.youtube.com/embed/ShjyUIk5WWo',
    title: `Breathe Academy`,
  },
  {
    src: 'https://www.youtube.com/embed/ShjyUIk5WWo',
    title: `Breathe Academy`,
  },
];

const VideoBoothGallery = () => {
  return (
    <div>
      <Gallery youtubeList={youtubeList} />
    </div>
  );
};

export default VideoBoothGallery;
