interface ServiceTitleProps {
  title: string;
  description?: string;
}

const ServiceTitle = ({ title, description }: ServiceTitleProps) => {
  return (
    <div>
      <div className="text-center leading-[30px] text-[24px] md:leading-[44px] md:text-[64px] font-bold font-dancing mt-[10px] md:mt-[45px] md:mb-[45px] ">
        {title}
      </div>
      {description ? (
        <div className="font-inter text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] mt-[10px] md:mt-[45px]">
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default ServiceTitle;
