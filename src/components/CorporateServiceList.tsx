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
    <div className="text-[16px] leading-[24px] md:text-[20px] md:leading-[30px]">
      <div className="font-medium mb-[8px] pt-[24px] md:mb-[50px]">{title}</div>
      <div className="md:hidden">
        {/* <div className="flex items-center justify-center">
          <img
            src={imgPath}
            alt="Image"
            className="object-cover h-full max-h-full"
          />
        </div> */}
        <div className="mb-[31px]">{listContent}</div>
      </div>
      <div className="hidden md:block mt-[21px] mb-[32px]">
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
    </div>
  );
};

export default CorporateServiceList;
