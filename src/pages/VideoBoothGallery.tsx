import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/dARRUvS08f8',
    title: `Fashion Finest Africa Runway`,
  },
  {
    src: 'https://www.youtube.com/embed/Piy5-wQsjY4',
    title: `AMVCA’s flip Cam Highlights`,
  },
  {
    src: 'https://www.youtube.com/embed/x5ltSSteVKs',
    title: `LBS MEMBA8 Graduation`,
  },
  {
    src: 'https://www.youtube.com/embed/hFW7L6ArioA',
    title: `Bling Lagosian’s Mazebooth Highlight`,
  },
  {
    src: 'https://www.youtube.com/embed/UnAz_z_sing',
    title: `Hans and Rene - Mazebooth`,
  },
  {
    src: 'https://www.youtube.com/embed/QLlHFTsx84s',
    title: `Basketball Mix Martell`,
  },
  {
    src: 'https://www.youtube.com/embed/ks4hHaNnX9U',
    title: `TEFEST Elevator Videobooth`,
  },
  {
    src: 'https://www.youtube.com/embed/NNctuapIetk',
    title: `Bridge in the Gap Videobooth`,
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
