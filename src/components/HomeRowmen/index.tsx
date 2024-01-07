import React from "react";

import { Button, Img, Text } from "components";

type HomeRowmenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "wollemensclassiOne" | "men" | "available" | "p120" | "p10" | "p108" | "view"
> &
  Partial<{
    wollemensclassiOne: JSX.Element | string;
    men: string;
    available: string;
    p120: string;
    p10: string;
    p108: string;
    view: string;
  }>;

const HomeRowmen: React.FC<HomeRowmenProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-start w-auto">
          <div className="bg-white-A700 flex flex-col h-[85px] md:h-auto items-start justify-start sm:px-5 px-[22px] py-2.5 w-auto">
            <Img
              className="h-[62px] md:h-auto object-cover rounded-md w-[62px]"
              src="images/img_rectangle160444.png"
              alt="rectangle160444"
            />
          </div>
          <div className="bg-white-A700 flex flex-col h-[85px] md:h-auto items-center justify-center p-2.5 w-auto">
            <Text
              className="capitalize leading-[18.00px] max-w-[192px] md:max-w-full text-[15px] text-black-900 tracking-[-0.15px]"
              size="txtWorkSansRomanRegular15"
            >
              {props?.wollemensclassiOne}
            </Text>
          </div>
        </div>
        <Button
          className="capitalize cursor-pointer font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] w-[123px]"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.men}
        </Button>
        <Button
          className="capitalize cursor-pointer flex-1 font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] w-full"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.available}
        </Button>
        <Button
          className="capitalize cursor-pointer flex-1 font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] w-full"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.p120}
        </Button>
        <Button
          className="capitalize cursor-pointer flex-1 font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] w-full"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.p10}
        </Button>
        <Button
          className="capitalize cursor-pointer flex-1 font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] w-full"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.p108}
        </Button>
        <Button
          className="capitalize cursor-pointer flex-1 font-worksans h-[85px] text-[15px] text-center tracking-[-0.15px] underline w-full"
          shape="square"
          color="white_A700"
          size="md"
          variant="fill"
        >
          {props?.view}
        </Button>
      </div>
    </>
  );
};

HomeRowmen.defaultProps = {
  wollemensclassiOne: <>Wolle men&#39;s classic T shirts - round neck</>,
  men: "Men",
  available: "Available",
  p120: "$120",
  p10: "10%",
  p108: "$108",
  view: "View",
};

export default HomeRowmen;
