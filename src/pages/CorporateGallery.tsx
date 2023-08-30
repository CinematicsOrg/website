import { IYoutubeLinks } from '../utils/interface';
import Gallery from './Gallery';

const youtubeList: IYoutubeLinks[] = [
  {
    src: 'https://www.youtube.com/embed/MVcladmmQaw',
    title: `Lagos Cocktail Week`,
  },
  {
    src: 'https://www.youtube.com/embed/iy71Em_eDwE',
    title: `Uncut Learning Cake Conference`,
  },
  {
    src: 'https://www.youtube.com/embed/IVHw387cbck',
    title: `International HSE Conference`,
  },
  {
    src: 'https://www.youtube.com/embed/uobXlD1JGGM',
    title: `Reviv Lagos Launch`,
  },
  {
    src: 'https://www.youtube.com/embed/J7Ynx4e1hhU',
    title: `LANCOME Perfume Launch`,
  },
  {
    src: 'https://www.youtube.com/embed/zADqAJl28uo',
    title: `My Luxury Hair Product Launch`,
  },
  {
    src: 'https://www.youtube.com/embed/NyDpFKpliyU',
    title: `Lagos Bridal Fashion Week (LBFW)`,
  },
  {
    src: 'https://www.youtube.com/embed/Yu_tyrTVHRU',
    title: `BudXLagos FIFA Kickoff Concert`,
  },
];

const CorporateGallery = () => {
  return (
    <div>
      <Gallery youtubeList={youtubeList} />
    </div>
  );
};

export default CorporateGallery;
