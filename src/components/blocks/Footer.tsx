import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="md:h-56 bg-lblack">
      <div className="pt-[20px] md:pt-24 flex flex-col items-center justify-center">
        <Link to="/">
          <img
            className="w-[68px] h-[68px] object-cover"
            src="/images/cinematics_logo.png"
            alt="Logo"
          />
        </Link>
        <div className="h-6 md:h-8 font-inter">
          <CopyrightIcon />
          {new Date().getFullYear()} Cinematics | All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
