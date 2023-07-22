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
    <div>
      <div className="h-[30px] text-[20px] font-medium leading-[30px] mb-[50px]">
        {title}
      </div>
      <div className="grid grid-cols-2">{listContent}</div>
      {imgPath ? (
        <img
          src={imgPath}
          alt="Image"
          className="max-w-[100%] w-[100%] h-[350px] mt-[45px]"
        />
      ) : null}
    </div>
  );
};

export default ServiceList;
