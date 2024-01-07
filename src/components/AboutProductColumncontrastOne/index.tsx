import React from "react";

import { Img, Input, Text } from "components";

type AboutProductColumncontrastOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "percentage" | "nodiscount" | "currentpriceof"
> &
  Partial<{ percentage: string; nodiscount: string; currentpriceof: string }>;

const AboutProductColumncontrastOne: React.FC<
  AboutProductColumncontrastOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_contrast.svg"
                alt="contrast"
              />
              <Text
                className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                size="txtWorkSansRomanRegular14Black900"
              >
                {props?.percentage}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_contrast_gray_900.svg"
              alt="contrast_One"
            />
            <Text
              className="text-black-900 text-sm tracking-[-0.28px] w-auto"
              size="txtWorkSansRomanRegular14Black900"
            >
              {props?.nodiscount}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 items-start justify-start w-auto md:w-full">
          <Input
            name="frame1000002755_Three"
            placeholder="Enter discount percentage"
            className="!placeholder:text-gray-600_01 !text-gray-600_01 font-medium font-worksans p-0 text-left text-sm tracking-[-0.28px] w-full"
            wrapClassName="border border-gray-200_01 border-solid flex md:h-auto w-[360px] md:w-full"
            suffix={
              <Img
                className="h-6 ml-3 my-auto"
                src="images/img_settings_gray_900.svg"
                alt="settings"
              />
            }
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <Text
            className="text-gray-600_01 text-xs tracking-[-0.24px] w-auto"
            size="txtWorkSansRomanRegular12"
          >
            {props?.currentpriceof}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutProductColumncontrastOne.defaultProps = {
  percentage: "Percentage",
  nodiscount: "No Discount",
  currentpriceof: "Current price of the product will change with discount %",
};

export default AboutProductColumncontrastOne;
