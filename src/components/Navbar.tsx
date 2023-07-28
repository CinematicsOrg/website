import { Link, useLocation } from 'react-router-dom';
import { ILink } from '../utils/interface';
import { links } from '../utils/constants';
import NavDrawer from './NavDrawer';
import { useState } from 'react';

export type NavbarProps = {
  logoPath?: string;
};

const Navbar = ({ logoPath }: NavbarProps) => {
  const [showNavDrawer, setShowNavDrawer] = useState<boolean>(false);

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

  const handleHamburgerClick = () => {
    setShowNavDrawer(!showNavDrawer);
  };

  return (
    <div>
      <nav className="bg-[black] h-20 px-[20px] py-[12px] flex items-center justify-between md:bg-[inherit] md:py-4 md:px-[79px]">
        <div className="flex items-center hover:border-transparent hover:shadow-sm">
          <Link to="/">
            <div className="hidden md:block">
              <img
                className="object-cover h-[32px] w-[32px] w-auto md:h-8"
                src={logoPath ? logoPath : '/images/cinematics_logo2.png'}
                alt="Logo"
              />
            </div>
            <div className="md:hidden">
              <img
                className="object-cover h-[32px] w-[32px] w-auto md:h-8"
                src={logoPath ? logoPath : '/images/cinematics_logo.png'}
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center font-inter font-normal text-base">
          {links.map((link) => (
            <div
              key={link.path}
              className={`ml-6 hover:border-transparent hover:shadow-sm ${locationDetector(
                link
              )}`}
            >
              <Link to={link.path}>
                <span>{link.text}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden" onClick={handleHamburgerClick}>
          {showNavDrawer ? (
            <img
              src="/svg/Hamburger_close.svg"
              alt="Close"
              className="h-[40px] w-[40px] object-cover"
            />
          ) : (
            <img
              src="/svg/Hamburger_menu.svg"
              alt="Hamburger"
              className="h-[40px] w-[40px] object-cover"
            />
          )}
        </div>
      </nav>
      {showNavDrawer ? <NavDrawer /> : null}
    </div>
  );
};

export default Navbar;
