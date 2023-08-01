import ServiceItem from './ServiceItem';

interface ServiceListProps {
  title: string;
  listItem: string[];
  imgPath?: string;
}

const ServiceList = ({ title, listItem, imgPath }: ServiceListProps) => {
  const listContent = listItem.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });
  return (
    <div className="">
      <div className="text-[16px] md:text-[20px] font-medium md:leading-[30px] mt-[24px] mb-[8px] md:mb-[50px]">
        {title}
      </div>
      <div className="md:grid grid-cols-2">{listContent}</div>
      {imgPath ? (
        <img
          src={imgPath}
          alt="Image"
          className="object-cover max-w-[100%] w-[100%] h-[221px] md:h-[350px] md:mt-[45px]"
        />
      ) : null}
    </div>
  );
};

export default ServiceList;
