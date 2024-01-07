import React from "react";

const sizeClasses = {
  txtInterRegular2053: "font-inter font-normal",
  txtInterSemiBold1197: "font-inter font-semibold",
  txtInterSemiBold36: "font-inter font-semibold",
  txtSyncopateBold1942: "font-bold font-syncopate",
  txtSatoshiMedium14: "font-medium font-satoshi",
  txtWorkSansRomanRegular14Black900: "font-normal font-worksans",
  txtWorkSansRomanRegular16: "font-normal font-worksans",
  txtInterMedium1368: "font-inter font-medium",
  txtWorkSansRomanRegular14Bluegray900: "font-normal font-worksans",
  txtWorkSansRomanRegular12Bluegray900: "font-normal font-worksans",
  txtInterRegular14: "font-inter font-normal",
  txtWorkSansRomanRegular14: "font-normal font-worksans",
  txtWorkSansRomanMedium14: "font-medium font-worksans",
  txtInterRegular16: "font-inter font-normal",
  txtWorkSansRomanRegular15: "font-normal font-worksans",
  txtWorkSansRomanMedium36: "font-medium font-worksans",
  txtWorkSansRomanRegular12: "font-normal font-worksans",
  txtInterSemiBold3079: "font-inter font-semibold",
  txtInterRegular1026: "font-inter font-normal",
  txtWorkSansRomanMedium16: "font-medium font-worksans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
