import { Link, useLocation } from 'react-router-dom';
import { galleryLinks } from '../utils/constants';

const GalleryNavbar = () => {
  const location = useLocation();

  const galleryContent = galleryLinks.map((i, index) => {
    return (
      <div
        key={index}
        className={`border-b mx-[14px] ${
          location.pathname === i.clickPath ||
          (location.hash === '#galleryNavbar' &&
            i.clickPath === '/#galleryNavbar')
            ? 'text-[red]'
            : ''
        }`}
      >
        <Link to={i.clickPath ? i.clickPath : '#'}>{i.text}</Link>
      </div>
    );
  });
  return (
    <div className="bg-[white] text-[#9c9c9c]">
      <div className="hidden md:flex justify-center text-[16px] whitespace-nowrap">
        {galleryContent}
      </div>

      {/* This would be shown on smaller screens only */}
      <div className="flex flex-col justify-center text-[13px] leading-[17px] md:hidden">
        <div className="flex justify-center my-[15px] leading-[17px]">
          <span
            className={`border-b
            ${
              location.pathname === '/#galleryNavbar' ||
              (location.hash === '#galleryNavbar' && location.pathname === '/')
                ? 'text-[red]'
                : ''
            } ${location.pathname === '/' ? 'text-[red]' : ''} inline-block`}
          >
            <Link to="/">ALL</Link>
          </span>
        </div>
        <div className="flex mb-[15px] items-center justify-around">
          <div
            className={` border-b ${
              location.pathname === '/gallery-wedding' ? 'text-[red]' : ''
            }`}
          >
            <Link to="/gallery-wedding">WEDDING</Link>
          </div>
          <div
            className={` border-b ${
              location.pathname === '/gallery-corporate' ? 'text-[red]' : ''
            }`}
          >
            <Link to="/gallery-corporate">CORPORATE</Link>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <div
            className={`whitespace-nowrap border-b ${
              location.pathname === '/gallery-birthday' ? 'text-[red]' : ''
            }`}
          >
            <Link to="/gallery-birthday">BIRTHDAY</Link>
          </div>
          <div
            className={`whitespace-nowrap border-b ${
              location.pathname === '/gallery-360-video' ? 'text-[red]' : ''
            }`}
          >
            <Link to="/gallery-360-video">360VIDEOBOOTH</Link>
          </div>
          <div
            className={`whitespace-nowrap ml-[5px] border-b ${
              location.pathname === '/gallery-video' ? 'text-[red]' : ''
            }`}
          >
            <Link to="/gallery-video">VIDEOBOOTH</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryNavbar;
