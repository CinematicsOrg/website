import React from 'react';

interface ServiceItemProps {
  children: React.ReactNode;
}

const ServiceItem = ({ children }: ServiceItemProps) => {
  return (
    <div className="flex items-center font-inter h-[34px] text-[20px] leading-[30px] my-[10px]">
      <img src="svg/check_icon.svg" alt="Check Icon" className="pr-[18px]" />
      {children}
    </div>
  );
};

export default ServiceItem;
