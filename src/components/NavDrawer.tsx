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
      (location.pathname === '/video-booth' && link.path === '/services')
    ) {
      return 'text-dred font-bold';
    } else {
      return '';
    }
  };
  return (
    <div className="flex flex-col items-center text-center font-inter p-[12px] bg-[white] md:hidden">
      {links.map((link) => (
        <div
          key={link.path}
          className={`px-[20px] py-[14px] text-[18px] font-bold text-[black] ${locationDetector(
            link
          )} hover:shadow-sm w-full`}
        >
          <Link to={link.path}>
            <span className="h-[22px]">{link.text}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavDrawer;
