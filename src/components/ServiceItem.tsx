import React from 'react';

interface ServiceItemProps {
  children: React.ReactNode;
}

const ServiceItem = ({ children }: ServiceItemProps) => {
  return (
    <div className="flex items-center font-inter font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] my-[10px] md:my-[20px]">
      <img
        src="svg/check_icon.svg"
        alt="Check Icon"
        className="pr-[18px] object-cover"
      />
      {children}
    </div>
  );
};

export default ServiceItem;
