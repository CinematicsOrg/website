import { Link } from 'react-router-dom';

export type NavbarProps = {
  logoPath?: string;
};
const Navbar = ({ logoPath }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 h-20">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-6 w-auto md:h-8 lg:h-9" src={logoPath} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center font-inter font-normal text-base">
        <div className="ml-6">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>

        <div className="ml-6">
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </div>

        <div className="ml-6">
          <Link to="/gallery">
            <span>Gallery</span>
          </Link>
        </div>

        <div className="ml-6">
          <Link to="/book">
            <span>Book</span>
          </Link>
        </div>

        <div className="ml-6">
          <Link to="/services">
            <span>Services</span>
          </Link>
        </div>

        <div className="bg-gray-300 rounded-full w-24 h-9 ml-6 flex items-center justify-center">
          <div className="">
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
