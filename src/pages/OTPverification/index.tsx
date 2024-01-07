import React from "react";

import { Button, Img, Text } from "components";

const OTPverificationPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[800px] mx-auto pl-[5px] relative w-full">
        <Img
          className="absolute h-[326px] object-cover right-[0] top-[0]"
          src="images/img_group13777.png"
          alt="group13777"
        />
        <div className="absolute bottom-[6%] flex flex-col md:gap-10 gap-[219px] items-end justify-start left-[11%] md:px-5 w-[36%]">
          <div className="flex flex-col gap-12 items-start justify-start w-[513px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-[26.79px] md:text-[28.79px] text-[30.79px] text-blue_gray-900 tracking-[-0.62px] w-auto"
                    size="txtInterSemiBold3079"
                  >
                    Check your Inbox
                  </Text>
                </div>
              </div>
              <Text
                className="text-base text-blue_gray-400_01 tracking-[-0.32px] w-auto"
                size="txtInterRegular16"
              >
                we’ve sent a OTP to your you@email.com
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-[383px] sm:w-full">
                <div className="flex flex-col gap-[5.13px] items-start justify-start w-[383px] sm:w-full">
                  <Text
                    className="text-[13.68px] text-blue_gray-900 w-auto"
                    size="txtInterMedium1368"
                  >
                    Enter OTP
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Button
                      className="!text-blue_gray-900 border-b border-gray-200 border-solid cursor-pointer leading-[normal] sm:text-[16.53px] md:text-[18.53px] text-[20.53px] text-center w-20"
                      shape="square"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      8
                    </Button>
                    <Button
                      className="!text-blue_gray-900 border-b border-gray-200 border-solid cursor-pointer leading-[normal] sm:text-[16.53px] md:text-[18.53px] text-[20.53px] text-center w-20"
                      shape="square"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      2
                    </Button>
                    <Button
                      className="!text-blue_gray-900 border-b border-gray-200 border-solid cursor-pointer leading-[normal] sm:text-[16.53px] md:text-[18.53px] text-[20.53px] text-center w-20"
                      shape="square"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Button
                      className="!text-blue_gray-900 border-b border-gray-200 border-solid cursor-pointer leading-[normal] sm:text-[16.53px] md:text-[18.53px] text-[20.53px] text-center w-20"
                      shape="square"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      0
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-lato gap-[18px] items-start justify-end w-[383px] sm:w-full">
                <Button
                  className="cursor-pointer font-semibold rounded-[20px] text-[15.4px] text-center tracking-[0.15px] w-full"
                  color="gray_300"
                  size="sm"
                  variant="fill"
                >
                  Verify OTP
                </Button>
                <div className="flex flex-col font-inter items-center justify-start w-auto">
                  <Text
                    className="text-[11.97px] text-blue_gray-900 w-auto"
                    size="txtInterSemiBold1197"
                  >
                    Sent OTP again
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto sm:w-full">
            <div className="flex sm:flex-col flex-row gap-2 items-start justify-center w-auto sm:w-full">
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_icoutlineinfo.svg"
                alt="icoutlineinfo"
              />
              <Text
                className="text-center text-gray-600 text-sm w-auto"
                size="txtInterRegular14"
              >
                <span className="text-gray-600 font-inter font-normal">
                  By creating account you accept our{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-gray-600 font-inter font-medium underline"
                >
                  Terms of use
                </a>
                <span className="text-gray-600 font-inter font-normal">
                  {" "}
                  and{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-gray-600 font-inter font-medium underline"
                >
                  Privacy Policy{" "}
                </a>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-syncopate h-[71px] md:h-auto inset-x-[0] items-center justify-start max-w-[1434px] mx-auto md:px-5 py-[26px] top-[0] w-full">
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
        </div>
        <div className="absolute bottom-[0] md:h-[562px] h-[596px] pb-[33px] md:px-5 right-[0] w-[39%] sm:w-full">
          <Img
            className="h-[518px] ml-auto my-auto object-cover w-[93%]"
            src="images/img_maskgroup.png"
            alt="maskgroup"
          />
          <Img
            className="absolute h-[562px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_image334.png"
            alt="image334"
          />
        </div>
      </div>
    </>
  );
};

export default OTPverificationPage;
