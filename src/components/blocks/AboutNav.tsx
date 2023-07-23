import { useState } from 'react';

const navList = [
  {
    id: 1,
    nav: 'Mission',
  },
  {
    id: 2,
    nav: 'Vission',
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
      className={`relative h-[42px] inline-flex items-center justify-center text-[36px] font-bold mx-[44px] cursor-pointer ${
        activeNavItem === navItem.id ? 'text-dred' : ''
      }`}
      onClick={() => handleClicked(navItem.id)}
      key={navItem.id}
    >
      {navItem.nav}
      {activeNavItem === navItem.id && (
        <div
          className="absolute bg-dred h-[2px] bottom-[-10px] z-40 left-0 right-0"
          style={{ width: '100%' }}
        />
      )}
    </div>
  ));

  const divValue =
    'Excellence,Integrity,Attention to detail,Customer satisfaction,Preserving special moments';
  const divArray = divValue.split(',');
  const divContent = divArray.map((p) => {
    return (
      <li className="mr-[20px] flex-grow" key={p}>
        {p}
      </li>
    );
  });

  return (
    <div className=" flex flex-col justify-between h-[243px] py-[54px] px-[80px] ">
      <div className="flex justify-center relative">
        {navContent}
        <div
          className="absolute bg-[black] z-10 h-[1px] bottom-[-10px] left-0 right-0"
          style={{ width: '100%' }}
        />
      </div>

      <div className="">
        <p className={`flex justify-center ${showValue ? '' : 'hidden'}`}>
          {value}
        </p>
        <div className={`${showDiv ? '' : 'hidden'}`}>
          <div className="flex">{divContent}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
