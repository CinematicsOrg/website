import { Link, useLocation } from 'react-router-dom';

export type NavbarProps = {
  logoPath?: string;
};

interface ILink {
  path: string;
  text: string;
}
const links: ILink[] = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Us' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/book', text: 'Book' },
  { path: '/services', text: 'Services' },
  { path: '/contact', text: 'Contact' },
];

const Navbar = ({ logoPath }: NavbarProps) => {
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
    <nav className="flex items-center justify-between py-4 px-8 h-20">
      <div className="flex items-center hover:border-transparent hover:shadow-sm">
        <Link to="/">
          <img className="h-6 w-auto md:h-8 lg:h-9" src={logoPath} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center font-inter font-normal text-base">
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
    </nav>
  );
};

export default Navbar;
