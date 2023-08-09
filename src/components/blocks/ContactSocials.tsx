import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ContactSocials = () => {
  return (
    <div className="bg-lblack py-[30px] md:py-[54px] px-[16px] md:px-[79px]">
      <div className="flex flex-col md:flex-row md:items-center justify-between md:py-[16px]">
        <div className="mb-[40px] md:mb-0">
          <p className="text-[24px] mb-[16px] md:text-[32px] font-medium font-inter">
            Social Media
          </p>
          <div className=" flex flex-col font-poppins text-[14px] mb-[24px] md:text-[20px]">
            <div className="flex mb-[16px]">
              <img
                src="/svg/instagram-brand.svg"
                alt="instagram"
                className="mr-[10px]"
              />
              <img
                src="/svg/facebook-brand.svg"
                alt="facebook"
                className="mr-[10px]"
              />
              <img
                src="/svg/twitter-brand.svg"
                alt="twitter"
                className="mr-[10px]"
              />
              <img
                src="/svg/threads-brand.svg"
                alt="threads"
                className="mr-[10px]"
              />
              <img
                src="/svg/youtube-brand.svg"
                alt="youtube"
                className="mr-[10px]"
              />
            </div>
            <p className="font-poppins text-[14px] md:text-[20px]">
              cinematicsng
            </p>
          </div>
        </div>
        <div className="mb-[40px] md:mb-0">
          <p className="text-[24px] mb-[16px] md:text-[32px] font-medium font-inter">
            Send us a mail
          </p>
          <p className="font-poppins text-[14px] mb-[24px] md:text-[20px]">
            <EmailOutlinedIcon className="mr-[8px]" />
            cinematicsng@gmail.com
          </p>
          <p className="font-poppins text-[14px] md:text-[20px]">
            <EmailOutlinedIcon className="mr-[8px]" />
            info@cinematicsng.com
          </p>
        </div>
        <div className="mb-[40px] md:mb-0">
          <p className="text-[24px] mb-[16px] md:text-[32px] font-medium font-inter">
            Call Us
          </p>
          <p className="font-poppins text-[14px] mb-[24px] md:text-[20px]">
            <AddIcCallOutlinedIcon className="mr-[8px]" />
            +2349030003360
          </p>
          <p className="font-poppins text-[14px] md:text-[20px]">
            <AddIcCallOutlinedIcon className="mr-[8px]" />
            +2348032008916
          </p>
        </div>
      </div>
      <div>
        <p className="md:text-center text-[14px] md:text-[20px] leading-[17px] md:py-[16px]">
          <LocationOnOutlinedIcon />
          15b Akintola Ajeigbe Street,Lekki Phase One, Lagos
        </p>
      </div>
    </div>
  );
};

export default ContactSocials;
