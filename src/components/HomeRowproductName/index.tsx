import React from "react";

import { Button } from "components";

type HomeRowproductNameProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "productName"
  | "gender"
  | "status"
  | "basePrice"
  | "discount"
  | "currentPrice"
  | "actions"
> &
  Partial<{
    productName: string;
    gender: string;
    status: string;
    basePrice: string;
    discount: string;
    currentPrice: string;
    actions: string;
  }>;

const HomeRowproductName: React.FC<HomeRowproductNameProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-gray-800 cursor-pointer font-worksans min-w-[318px] rounded-tl-md text-center text-xs uppercase"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[318px]">{props?.productName}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer font-worksans min-w-[123px] text-center text-xs uppercase"
          shape="square"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[123px]">{props?.gender}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer flex-1 font-worksans min-w-[164px] text-center text-xs uppercase"
          shape="square"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[164px]">{props?.status}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer flex-1 font-worksans min-w-[164px] text-center text-xs uppercase"
          shape="square"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[164px]">{props?.basePrice}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer flex-1 font-worksans min-w-[164px] text-center text-xs uppercase"
          shape="square"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[164px]">{props?.discount}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer flex-1 font-worksans min-w-[164px] text-center text-xs uppercase"
          shape="square"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[164px]">{props?.currentPrice}</div>
        </Button>
        <Button
          className="!text-gray-800 cursor-pointer flex-1 font-worksans min-w-[164px] rounded-tr-md text-center text-xs uppercase"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="min-w-[164px]">{props?.actions}</div>
        </Button>
      </div>
    </>
  );
};

HomeRowproductName.defaultProps = {
  productName: "Product name",
  gender: "Gender",
  status: "Status",
  basePrice: "Base price",
  discount: "Discount",
  currentPrice: "Current price",
  actions: "Actions",
};

export default HomeRowproductName;
