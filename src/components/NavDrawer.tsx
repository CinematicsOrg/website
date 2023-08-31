import { links } from '../utils/constants';
import { Link, useLocation } from 'react-router-dom';
import { ILink } from '../utils/interface';

const NavDrawer = () => {
  const location = useLocation();

  const locationDetector = (link: ILink) => {
    if (location.pathname === link.path) {
      return 'text-dred font-bold';
    } else if (
      (location.pathname === '/wedding-package' && link.path === '/services') ||
      (location.pathname === '/corporate-events' &&
        link.path === '/services') ||
      (location.pathname === '/video-booth' && link.path === '/services') ||
      (location.pathname === '/virtual-reality' && link.path === '/services') ||
      (location.pathname === '/corporate-photography' &&
        link.path === '/services') ||
      (location.pathname === '/photo-booth' && link.path === '/services') ||
      (location.pathname === '/event-photography' &&
        link.path === '/services') ||
      (location.pathname.includes('gallery') && link.path.includes('gallery'))
    ) {
      return 'text-dred font-bold';
    } else {
      return '';
    }
  };

  return (
    <div
      className="flex flex-col items-center w-[156px] text-center font-inter p-[12px] bg-[white] md:hidden"
      style={{
        position: 'absolute',
        top: 'calc(70px + 12px)',
        right: '0px',
        zIndex: 10000,
      }}
    >
      {links.map((link) => (
        <div
          key={link.path}
          className={`px-[20px] py-[14px] text-[18px] font-bold text-[black] ${locationDetector(
            link
          )} hover:shadow-sm w-full`}
        >
          {link.text !== 'Blog' ? (
            <Link to={link.path}>
              <span className="h-[22px]">{link.text}</span>
            </Link>
          ) : (
            <a
              href="https://cinematicsng.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavDrawer;
