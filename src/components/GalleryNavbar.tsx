// import React from 'react';

// const galleryLinks = [
//   'ALL',
//   'CORPORATE',
//   'WEDDING',
//   'VIRTUAL REALITY',
//   'PHOTO BOOTH',
//   'VIDEO BOOTH',
// ];

const GalleryNavbar = () => {
  return (
    <div>
      {/* <div>
        {links.map((link) => (
          <div
            key={link.path}
            className={`ml-6 hover:border-transparent hover:shadow-sm ${locationDetector(
              link
            )}`}
          >
            <Link to={link.path}>
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col md:flex-row justify-center text-[12px] leading-[17px] text-[#9c9c9c]">
        <div className="flex justify-center">ALL</div>
        <div className="flex justify-center">
          <div className="mr-[15px]">WEDDING</div>
          <div className="ml-[15px]">CORPORATE</div>
        </div>
        <div className="flex justify-center">
          <div className="whitespace-nowrap mr-[5px]">VIRTUAL REALITY</div>
          <div className="whitespace-nowrap mr-[5px] ml-[5px]">PHOTO BOOTH</div>
          <div className="whitespace-nowrap  ml-[5px]">VIDEO BOOTH</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryNavbar;
