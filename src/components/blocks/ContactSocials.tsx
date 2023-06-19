import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactSocials = () => {
  return (
    <div className="bg-lblack h-[360px] py-[54px] px-[140px]">
      <div className="flex items-center justify-between h-[180px]">
        <div className="h-[59px]">
          <p className="h-[39px] font-[32px] font-medium font-inter">
            Social Media
          </p>
          <p className="font-poppins   h-[30px] font-[20px]">
            <YouTubeIcon />
            cinematicsng
          </p>
          <p className="font-poppins  h-[30px] font-[20px]">
            <InstagramIcon />
            cinematicsng
          </p>
        </div>
        <div className="h-[59px]">
          <p className="h-[39px] font-[32px] font-medium font-inter">
            Send us a mail
          </p>
          <p className="font-poppins h-[30px] font-[20px]">
            <EmailOutlinedIcon />
            cinematicsng@gmail.com
          </p>
          <p className="font-poppins h-[30px] font-[20px]">
            <EmailOutlinedIcon />
            info@cinematicsng.com
          </p>
        </div>
        <div className="h-[59px]">
          <p className="h-[39px] font-[32px] font-medium font-inter">Call Us</p>
          <p className="font-poppins h-[30px] font-[20px]">
            <AddIcCallOutlinedIcon />
            +2349030003360
          </p>
          <p className="font-poppins h-[30px] font-[20px]">
            <AddIcCallOutlinedIcon />
            +2348032008916
          </p>
        </div>
      </div>
      <div>
        <p className="text-center">
          <LocationOnOutlinedIcon />
          2nd Floor, The Garnet Building (Capital Square), Kilometer 14,
          Lekki-Epe Expressway, Lekki Lagos.
        </p>
      </div>
    </div>
  );
};

export default ContactSocials;
