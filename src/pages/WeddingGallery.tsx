import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/speL6JH69e4',
    title: `The Epic wedding trailer of Ivy and Nero at Eko Atlantic and TheMonarch Lagos`,
  },
  {
    src: 'https://www.youtube.com/embed/5_MgqslfsDE',
    title: `Fatima Dangote & Jamil Abubakar's Grand Wedding`,
  },
  {
    src: 'https://www.youtube.com/embed/Vir3V-WIZRo',
    title: `The most exotic white wedding ceremony in Lagos- Njideka Offor weds Ugo Udu`,
  },
  {
    src: 'https://www.youtube.com/embed/CybsxAFB940',
    title: `Carolina & Deogratius Tanzanian White Wedding`,
  },
  {
    src: 'https://www.youtube.com/embed/_pLJHehnAX4',
    title: `Uwana Ekpat and Ini Ebong's White Wedding`,
  },
  {
    src: 'https://www.youtube.com/embed/4HhqmHaO920',
    title: `HAITIAN & NIGERIAN WEDDING: MARYO CAME TO NIGERIA TO GET HIS AFROCENTRIC QUEEN.`,
  },
  {
    src: 'https://www.youtube.com/embed/L0NqA36r60k',
    title: `Anita & Emmanuel - Yoruba Traditional Wedding`,
  },
  {
    src: 'https://www.youtube.com/embed/pa9-ik-drQM',
    title: `Funmi and Paul - White Wedding`,
  },
];

const WeddingGallery = () => {
  return (
    <div>
      <Gallery youtubeList={youtubeList} />
    </div>
  );
};

export default WeddingGallery;
