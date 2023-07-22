import ServiceItem from './ServiceItem';

interface CorporateServiceListProps {
  title: string;
  listItem: string[];
  imgPath?: string;
  reverse?: boolean;
}

const CorporateServiceList = ({
  title,
  listItem,
  imgPath,
  reverse,
}: CorporateServiceListProps) => {
  const listContent = listItem.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });
  return (
    <div>
      <div className="h-[30px] text-[20px] font-medium leading-[30px] mb-[50px]">
        {title}
      </div>
      {!reverse ? (
        <div className="flex ">
          <div className="flex flex-col flex-1">{listContent}</div>
          <div className="flex flex-1 items-center justify-center">
            <img
              src={imgPath}
              alt="Image"
              className="object-cover h-full max-h-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex space-x-4">
          <div className="flex flex-1 items-center justify-center">
            <img
              src={imgPath}
              alt="Image"
              className="object-cover h-full max-h-full"
            />
          </div>
          <div className="flex flex-col flex-1 ">{listContent}</div>
        </div>
      )}
    </div>
  );
};

export default CorporateServiceList;
