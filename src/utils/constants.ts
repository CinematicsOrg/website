import { ILink, IServiceContent, IYoutubeLinks } from './interface';

export const links: ILink[] = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Us' },
  { path: '/services', text: 'Services' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/book', text: 'Book Now' },
  { path: '/contact', text: 'Contact' },
];

export const galleryLinks: ILink[] = [
  { text: 'ALL', path: '/' },
  { text: 'CORPORATE', path: '/gallery-corporate' },
  { text: 'WEDDING', path: '/gallery-wedding' },
  { text: 'VIRTUAL REALITY', path: '/gallery-virtual' },
  { text: 'PHOTO BOOTH', path: '/gallery-photo' },
  { text: 'VIDEO BOOTH', path: '/gallery-video' },
];

export const serviceList: IServiceContent[] = [
  {
    img: `bg-[url('images/cinematics_corporate.png')]`,
    content: 'Corporate Event Videography',
    clickPath: '/corporate-events',
  },
  {
    img: `col-span-2 bg-[url('/images/cinematics_wedding.png')]`,
    content: 'Wedding Videos',
    clickPath: '/wedding-package',
  },
  {
    img: `bg-[url('/images/cinematics_product.png')]`,
    content: 'Corporate Photography Package',
    clickPath: '/corporate-photography',
  },
  {
    img: `bg-[url('/images/cinematics_documentary.png')]`,
    content: 'Event Photography Package',
    clickPath: '/event-photography',
  },
  {
    img: `bg-[url('/images/cinematics_360.png')]`,
    content: 'Virtual Reality Package',
    clickPath: '/virtual-reality',
  },
  {
    img: `col-span-2 bg-[url('/images/cinematics_photobooth.png')]`,
    content: 'Video Booth Package',
    clickPath: '/video-booth',
  },
  {
    img: `bg-[url('/images/cinematics_reality.png')]`,
    content: 'Photo Booth Package',
    clickPath: '/photo-booth',
  },
];

export const bookScrollingImages = [
  { img: `bg-[url('images/cinematics_corporate.png')]` },
  { img: `bg-[url('images/cinematics_10.png')]` },
  { img: `bg-[url('images/cinematics_9.png')]` },
];

export const addOnsList = [
  'Aditional photographer',
  'Extra album ( Size 12x20 )',
  'Extra album ( Size 12x24 )',
];

export const eventTitleList = [
  { formName: 'virtualReality', title: 'VIRTUAL REALITY' },
  { formName: 'photoBooth', title: 'PHOTO BOOTH' },
  { formName: 'videoBooth', title: 'VIDEO BOOTH' },
  { formName: 'eventPhotography', title: 'EVENT PHOTOGRAPHY' },
  { formName: 'weddingVideography', title: 'WEDDING VIDEOGAPHY' },
  { formName: 'corporatePhotography', title: 'CORPORATE PHOTOGRAPHY' },
  {
    formName: 'corporateEventPhotography',
    title: 'CORPORATE EVENT VIDEOGRAPHY',
  },
];

export const bookingFormChecklistInitialState = {
  virtualReality: false,
  photoBooth: false,
  videoBooth: false,
  eventPhotography: false,
  weddingVideography: false,
  corporatePhotography: false,
  corporateEventPhotography: false,
};

export const youtubeList: IYoutubeLinks[] = [
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
