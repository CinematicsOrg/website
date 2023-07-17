import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-56 bg-lblack">
      <div className="pt-24 flex flex-col items-center justify-center">
        <Link to="/">
          <img
            className="h-6 w-auto md:h-8 lg:h-9"
            src="/images/cinematics_logo.png"
            alt="Logo"
          />
        </Link>
        <div className="h-8 font-inter">
          <CopyrightIcon />
          {new Date().getFullYear()} Cinematics | All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
