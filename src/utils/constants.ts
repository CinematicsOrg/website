import { ILink, IServiceContent } from './interface';

export const links: ILink[] = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Us' },
  { path: '/services', text: 'Services' },
  { path: '/#galleryNavbar', text: 'Gallery' },
  { path: 'https://cinematicsng.blogspot.com/', text: 'Blog' },
  { path: '/book', text: 'Book Now' },
  { path: '/contact', text: 'Contact' },
];

export const galleryLinks: IServiceContent[] = [
  {
    text: 'ALL',
    clickPath: '/#galleryNavbar',
    img: '',
  },
  {
    text: 'CORPORATE',
    clickPath: '/gallery-corporate',
    content: 'Corporate',
    img: `col-span-1 row-span-1 bg-[url('/images/cinematics_corporate.png')]`,
  },
  {
    text: 'WEDDING',
    clickPath: '/gallery-wedding',
    content: 'Wedding',
    img: `col-span-1 row-span-2 bg-[url('/images/cinematics_wedding.png')]`,
  },
  {
    text: 'BIRTHDAY',
    clickPath: '/gallery-birthday',
    content: 'Birthday',
    img: `col-span-1 row-span-1 bg-[url('/images/cinematics_360.png')]`,
  },
  {
    text: '360VIDEOBOOTH',
    clickPath: '/gallery-360-video',
    content: '360videobooth',
    img: `col-span-1 row-span-1 bg-[url('/images/cinematics_reality.png')]`,
  },
  {
    text: 'VIDEOBOOTH EXPERIENCE',
    clickPath: '/gallery-video',
    content: 'Videobooth Experience',
    img: `col-span-1 row-span-1 bg-[url('/images/cinematics_photobooth.png')]`,
  },
];

export const serviceList: IServiceContent[] = [
  {
    img: `bg-[url('/images/cinematics_corporate.png')]`,
    content: 'Corporate Event Videography',
    clickPath: '/corporate-events',
  },
  {
    img: `col-span-2  bg-[url('/images/cinematics_wedding.png')]`,
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
  { img: `bg-[url('/images/cinematics_corporate.png')]` },
  { img: `bg-[url('/images/cinematics_10.png')]` },
  { img: `bg-[url('/images/cinematics_9.png')]` },
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
