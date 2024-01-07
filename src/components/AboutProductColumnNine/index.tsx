import React from "react";

import { Text } from "components";

type AboutProductColumnNineProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "addcolors"
> &
  Partial<{ addcolors: string }>;

const AboutProductColumnNine: React.FC<AboutProductColumnNineProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-start w-auto">
          <div className="border border-blue_gray-100 border-solid h-9 rounded-[50%] w-9"></div>
          <Text
            className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
            size="txtWorkSansRomanRegular12Bluegray900"
          >
            {props?.addcolors}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutProductColumnNine.defaultProps = { addcolors: "Add Colors" };

export default AboutProductColumnNine;
