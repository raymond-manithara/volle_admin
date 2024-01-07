import React from "react";

import { Button, Img, Line, Text } from "components";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[800px] mx-auto pl-[5px] relative w-full">
        <Img
          className="absolute h-[326px] object-cover right-[0] top-[0]"
          src="images/img_group13777.png"
          alt="group13777"
        />
        <div className="absolute bottom-[6%] flex flex-col md:gap-10 gap-[142px] justify-start left-[11%] md:px-5 w-[37%]">
          <div className="flex flex-col gap-12 items-start justify-start w-[521px] sm:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 tracking-[-0.72px] w-auto"
                  size="txtInterSemiBold36"
                >
                  Admin Login
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-[521px] sm:w-full">
                <div className="flex flex-col gap-[5.13px] items-start justify-start w-[521px] sm:w-full">
                  <Text
                    className="text-[13.68px] text-blue_gray-900 w-auto"
                    size="txtInterMedium1368"
                  >
                    Enter Email
                  </Text>
                  <Text
                    className="bg-white-A700 border-b border-gray-200 border-solid h-[45px] justify-center pb-2 sm:pr-5 pr-[35px] pt-3 sm:text-[16.53px] md:text-[18.53px] text-[20.53px] text-blue_gray-400 w-auto"
                    size="txtInterRegular2053"
                  >
                    you@email.com
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-lato items-start justify-end w-[513px] sm:w-full">
                <Button
                  className="cursor-pointer font-semibold rounded-[20px] text-[15.4px] text-center tracking-[0.15px] w-full"
                  color="gray_300"
                  size="sm"
                  variant="fill"
                >
                  Send OTP
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start ml-8 md:ml-[0] w-auto sm:w-full">
            <div className="flex flex-col gap-[23.09px] items-center justify-center w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Line className="bg-blue_gray-900_63 h-px sm:mt-0 my-[5px] w-2/5" />
                <a
                  href="javascript:"
                  className="text-[10.26px] text-blue_gray-900_b4"
                >
                  <Text size="txtInterRegular1026">or continue with</Text>
                </a>
                <Line className="bg-blue_gray-900_63 h-px sm:mt-0 my-[5px] w-[37%]" />
              </div>
              <div className="flex flex-col items-center justify-center w-[420px] sm:w-full">
                <div className="flex flex-row gap-[13.68px] items-start justify-start w-auto">
                  <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col h-10 md:h-auto items-center justify-center px-[15.4px] py-[10.26px] rounded-[20px] w-[138px]">
                    <div className="flex flex-col items-center justify-start w-[18%]">
                      <Img
                        className="h-[15px]"
                        src="images/img_flatcoloriconsgoogle.svg"
                        alt="flatcoloriconsg"
                      />
                    </div>
                  </div>
                  <div className="bg-blue_gray-700 flex flex-col items-center justify-center px-[15.4px] py-[10.26px] rounded-[20px] w-[130px]">
                    <Img
                      className="h-[19px] w-4"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default LoginPage;
