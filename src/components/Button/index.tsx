import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
  square: "rounded-none",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    gray_200_01: "bg-gray-200_01",
    gray_900_01: "bg-gray-900_01",
    gray_300: "bg-gray-300 text-white-A700",
    lime_A400: "bg-lime-A400 text-black-900",
    gray_100: "bg-gray-100 text-black-900",
    black_900: "bg-black-900 text-gray-200_01",
    gray_50: "bg-gray-50",
  },
  outline: { blue_gray_100: "border border-blue_gray-100 border-solid" },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-[33px] sm:px-5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
