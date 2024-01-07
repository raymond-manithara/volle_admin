import React from "react";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="border-b border-gray-100 border-solid flex flex-col h-[72px] md:h-auto items-center justify-center max-w-[1440px] pl-5 md:pr-10 pr-12 sm:pr-5 py-[26px] w-full">
          <div className="flex flex-row gap-4 items-center justify-between max-w-[1390px] w-full">
            <div className="flex flex-row gap-[9.61px] h-[22px] md:h-auto items-center justify-center w-auto">
              <Img
                className="h-[22px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-auto">
                <Text
                  className="lowercase text-[19.42px] text-black-900 w-auto"
                  size="txtSyncopateBold1942"
                >
                  wOLLE
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-200_01 border-solid flex flex-col h-10 md:h-auto items-center justify-center sm:px-5 px-[22px] py-[9px] rounded-[9px] w-auto">
              <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-center max-w-[1440px] py-[25px] w-full">
          <div className="flex flex-row gap-3 items-center justify-start max-w-[1139px] w-full">
            <Img
              className="h-5 w-5"
              src="images/img_arrowleft_gray_900.svg"
              alt="arrowleft"
            />
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-base text-black-900_99 w-auto"
                size="txtWorkSansRomanRegular16"
              >
                Home
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtWorkSansRomanMedium16"
            >
              Add new product
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start max-w-3xl w-full">
              <Text
                className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-2.16px] w-auto"
                size="txtWorkSansRomanMedium36"
              >
                Add New Product
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center w-[356px]">
              <Button
                className="!text-gray-600_01 border border-gray-100 border-solid capitalize cursor-pointer font-medium font-worksans h-10 rounded-[20px] text-base text-center tracking-[-0.96px] w-full"
                color="gray_200_01"
                size="sm"
                variant="fill"
              >
                Cancel
              </Button>
              <Button
                className="!text-white-A700 border border-gray-900_01 border-solid capitalize cursor-pointer font-medium font-worksans h-10 rounded-[20px] text-base text-center tracking-[-0.96px] w-full"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
