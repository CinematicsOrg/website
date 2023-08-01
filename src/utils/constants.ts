import { ILink, IServiceContent } from './interface';

export const links: ILink[] = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Us' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/book', text: 'Book' },
  { path: '/services', text: 'Services' },
  { path: '/contact', text: 'Contact' },
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
    content: 'Product Activation',
  },
  {
    img: `bg-[url('/images/cinematics_documentary.png')]`,
    content: 'Documentary',
  },
  { img: `bg-[url('/images/cinematics_360.png')]`, content: '360 Videobooth' },
  {
    img: `col-span-2 bg-[url('/images/cinematics_photobooth.png')]`,
    content: 'Video Booth Package',
    clickPath: '/video-booth',
  },
  {
    img: `bg-[url('/images/cinematics_reality.png')]`,
    content: 'Photo Booth Package',
  },
];
