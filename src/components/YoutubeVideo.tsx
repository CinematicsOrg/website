interface YoutubeVideoProps {
  videoSource: string;
  title?: string;
  autoPlay?: 0 | 1;
  mute?: 0 | 1;
  loop?: 0 | 1;
  controls?: 0 | 1;
  classDef?: string;
  roundedAtTheEdge?: boolean;
  heigth?: string;
}

const YoutubeVideo = ({
  videoSource,
  classDef,
  title,
  autoPlay = 0,
  mute = 0,
  loop = 0,
  controls = 1,
  roundedAtTheEdge = true,
  heigth,
}: YoutubeVideoProps) => {
  return (
    <div>
      <iframe
        className={`w-full ${heigth ? heigth : 'h-[360px]'} ${
          roundedAtTheEdge ? 'rounded-3xl' : ''
        }  ${classDef}`}
        src={`${videoSource}?autoplay=${autoPlay}&mute=${mute}&loop=${loop}&controls=${controls}`}
        allowFullScreen={true}
      ></iframe>
      {title && (
        <div className="mt-[8px]">
          <div className="text-[14px] leading-[17px] md:text-[36px] md:leading-[44px] font-medium mb-[20px] md:mb-0">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideo;
