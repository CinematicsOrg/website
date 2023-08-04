import ServiceItem from './ServiceItem';

interface GeneralServiceListProps {
  title?: string;
  listItem: string[];
  imgPath?: string;
}

const GeneralServiceList = ({
  title,
  listItem,
  imgPath,
}: GeneralServiceListProps) => {
  const listContent = listItem.map((i, index) => {
    return <ServiceItem key={index}>{i}</ServiceItem>;
  });
  return (
    <div>
      <div className="text-[16px] md:text-[20px] font-bold md:leading-[30px] mt-[24px] mb-[8px] md:mb-[50px]">
        {title}
      </div>
      <div className="">{listContent}</div>
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

export default GeneralServiceList;
