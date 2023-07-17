import { Link, useLocation } from 'react-router-dom';

export type NavbarProps = {
  logoPath?: string;
};

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Us' },
  { path: '/gallery', text: 'Gallery' },
  { path: '/book', text: 'Book' },
  { path: '/services', text: 'Services' },
  { path: '/contact', text: 'Contact' },
];

const Navbar = ({ logoPath }: NavbarProps) => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between py-4 px-8 h-20">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-6 w-auto md:h-8 lg:h-9" src={logoPath} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center font-inter font-normal text-base">
        {links.map((link) => (
          <div
            key={link.path}
            className={`ml-6 ${
              location.pathname === link.path ? 'text-dred font-bold' : ''
            }`}
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
