interface YoutubeVideoProps {
  videoSource: string;
  title: string;
  autoPlay?: 0 | 1;
  mute?: 0 | 1;
  loop?: 0 | 1;
  controls?: 0 | 1;
  classDef?: string;
}

const YoutubeVideo = ({
  videoSource,
  classDef,
  title,
  autoPlay = 0,
  mute = 0,
  loop = 0,
  controls = 0,
}: YoutubeVideoProps) => {
  return (
    <div>
      <iframe
        className={`w-full rounded-3xl  ${classDef}`}
        src={`${videoSource}?autoplay=${autoPlay}&mute=${mute}&loop=${loop}&controls=${controls}`}
      ></iframe>
      <div className="mt-[64px]">
        <div className="md:text-[36px] md:leading-[44px] font-medium mb-[20px]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
