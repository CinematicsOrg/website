import { useState } from 'react';

const navList = [
  {
    id: 1,
    nav: 'Mission',
  },
  {
    id: 2,
    nav: 'Vision',
  },
  {
    id: 3,
    nav: 'Core Value',
  },
];

const AboutNav = () => {
  const [activeNavItem, setActiveNavItem] = useState(1);
  const [value, setValue] = useState<string>(
    'To capture and preserve memorable moments that will last a lifetime'
  );
  const [showValue, setShowValue] = useState<boolean>(true);
  const [showDiv, setShowDiv] = useState<boolean>(false);

  const handleClicked = (id: number) => {
    setActiveNavItem(id);

    if (id === 1) {
      setShowValue(true);
      setShowDiv(false);
      setValue(
        'To capture and preserve memorable moments that will last a lifetime'
      );
    }
    if (id === 2) {
      setShowValue(true);
      setShowDiv(false);
      setValue(
        'We strive to be the leading storytelling and content creating media house in Africa'
      );
    }

    if (id === 3) {
      setShowValue(false);
      setShowDiv(true);
    }
  };

  const navContent = navList.map((navItem) => (
    <div
      className={`relative h-[24px] md:h-[42px] items-center justify-center mx-[20px] text-[18px] leading-[24px] md:text-[36px] font-bold md:mx-[44px] cursor-pointer ${
        activeNavItem === navItem.id ? 'text-dred' : ''
      }`}
      onClick={() => handleClicked(navItem.id)}
      key={navItem.id}
    >
      {navItem.nav}
      {activeNavItem === navItem.id && (
        <div className="absolute bg-dred h-[2px] bottom-[-30px] z-40 left-0 right-0 w-[100%]" />
      )}
    </div>
  ));

  const divValue =
    'Excellence,Integrity,Attention to detail,Customer satisfaction,Preserving special moments';
  const divArray = divValue.split(',');
  const divContent = divArray.map((p) => {
    return (
      <li className="mb-[16px] mr-[20px] flex-grow" key={p}>
        {p}
      </li>
    );
  });

  return (
    <div className="flex flex-col justify-between md:h-[243px] pt-[30px] pb-0 md:py-[54px] px-[16px] md:px-[80px] ">
      <div className="flex justify-center relative">
        <div className="flex">{navContent}</div>
        <div className="absolute bg-[black] z-10 h-[1px] bottom-[-30px] left-0 right-0 w-[100%]" />
      </div>

      <div className="text-[16px] md:text-[24px] mt-[31px] mb-[21px]">
        <p
          className={`flex justify-center mt-[31px] ${
            showValue ? '' : 'hidden'
          }`}
        >
          {value}
        </p>
        <div className={`${showDiv ? '' : 'hidden'}`}>
          <div className="mt-[31px]  md:flex">{divContent}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
