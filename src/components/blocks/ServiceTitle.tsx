interface ServiceTitleProps {
  title: string;
  description: string;
}

const ServiceTitle = ({ title, description }: ServiceTitleProps) => {
  return (
    <div>
      <div className="text-center leading-[44px] text-[64px] font-bold font-dancing mt-[45px] mb-[45px] ">
        {title}
      </div>
      <div className="font-inter text-[20px] leading-[30px] mt-[45px]">
        {description}
      </div>
    </div>
  );
};

export default ServiceTitle;
