import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, List, ReactTable, Text } from "components";
import HomeRowmen from "components/HomeRowmen";
import HomeRowproductName from "components/HomeRowproductName";

import { CloseSVG } from "../../assets/images";

type TableRowType = {
  productname: string;
  gender: string;
  status: string;
  baseprice: string;
  discount: string;
  currentprice: string;
  actions: string;
};

const Home1Page: React.FC = () => {
  const tableData = React.useRef<TableRowType[]>([
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
    {
      productname: "Wolle men's classic T shirts - round neck",
      gender: "Men",
      status: "Available",
      baseprice: "$120",
      discount: "10%",
      currentprice: "$108",
      actions: "View",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("productname", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col h-[85px] md:h-auto items-start justify-start sm:px-5 px-[22px] py-2.5 w-auto">
              <Img
                className="h-[62px] md:h-auto object-cover rounded-md w-[62px]"
                src="images/img_rectangle160444.png"
                alt="rectangle160444"
              />
            </div>
            <div className="flex flex-col h-[85px] md:h-auto items-center justify-center p-2.5 w-auto">
              <Text className="capitalize leading-[18.00px] max-w-[192px] md:max-w-full text-[15px] text-black-900 tracking-[-0.15px]">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer min-w-[318px] py-2 rounded-tl-md text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[318px]">Product name</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("gender", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px]">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer min-w-[123px] py-2 text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[123px]">Gender</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer flex-1 h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px]">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer flex-1 min-w-[164px] py-2 text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[164px]">Status</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("baseprice", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer flex-1 h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px]">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer flex-1 min-w-[164px] py-2 text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[164px]">Base price</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("discount", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer flex-1 h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px]">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer flex-1 min-w-[164px] py-2 text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[164px]">Discount</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("currentprice", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer flex-1 h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px]">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer flex-1 min-w-[164px] py-2 text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[164px]">Current price</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("actions", {
        cell: (info) => (
          <Button className="capitalize cursor-pointer flex-1 h-[85px] py-[33px] text-[15px] text-black-900 text-center tracking-[-0.15px] underline">
            <div className="text-black-900">{info?.getValue()}</div>
          </Button>
        ),
        header: (info) => (
          <Button className="bg-gray-50 cursor-pointer flex-1 min-w-[164px] py-2 rounded-tr-md text-center text-gray-800 text-xs uppercase">
            <div className="min-w-[164px]">Actions</div>
          </Button>
        ),
      }),
    ];
  }, []);

  const [frame1000002802value, setFrame1000002802value] =
    React.useState<string>("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-syncopate gap-7 items-center justify-start mx-auto pb-[63px] w-full">
        <header className="border-b border-gray-100 border-solid flex h-[72px] md:h-auto items-center justify-center pl-5 pr-12 md:pr-5 py-[26px] w-full">
          <div className="flex flex-row gap-4 items-center justify-between max-w-[1390px] w-full">
            <div className="header-row my-2">
              <div className="flex flex-row gap-[9.61px] h-[22px] md:h-auto items-center justify-center">
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
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-200_01 border-solid flex flex-col h-10 md:h-auto sm:hidden items-center justify-center sm:px-5 px-[22px] py-[9px] rounded-[9px] w-auto">
              <Img className="h-6 w-6" src="images/img_lock.svg" alt="lock" />
            </div>
          </div>
        </header>
        <div className="flex flex-col font-worksans items-start justify-start max-w-[1285px] mx-auto md:px-5 py-2.5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
              <div className="flex sm:flex-1 flex-col h-11 md:h-auto items-center justify-center w-[437px] sm:w-full">
                <Input
                  name="frame1000002802"
                  placeholder="Search"
                  value={frame1000002802value}
                  onChange={(e) => setFrame1000002802value(e)}
                  className="!placeholder:text-gray-600_01 !text-gray-600_01 p-0 text-left text-sm tracking-[-0.28px] w-full"
                  wrapClassName="border border-gray-200_01 border-solid flex rounded-[22px] w-full"
                  suffix={
                    frame1000002802value?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer h-[22px] ml-[35px] my-auto"
                        onClick={() => setFrame1000002802value("")}
                        fillColor="#797a7c"
                        height={22}
                        width={22}
                        viewBox="0 0 22 22"
                      />
                    ) : (
                      <Img
                        className="cursor-pointer h-[22px] ml-[35px] my-auto"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    )
                  }
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="border border-lime-A400 border-solid cursor-pointer flex items-center justify-center min-w-[162px] rounded-[22px]"
                leftIcon={
                  <Img
                    className="h-5 mt-px mr-2"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                }
                color="lime_A400"
                size="sm"
                variant="fill"
              >
                <div className="capitalize font-medium text-base text-left tracking-[-0.96px]">
                  Add product
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-9 items-start justify-start outline outline-[1px] outline-gray-200 pb-[21px] rounded w-auto md:w-full">
              <div className="overflow-auto bg-white-A700 border border-gray-200 border-solid max-w-[1265px] w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"odd:bg-white-A700 even:bg-gray-50_01"}
                  headerClass="bg-gray-50"
                />
              </div>
              <div className="flex flex-row gap-[37px] items-center justify-between sm:px-5 px-[21px] w-[412px] sm:w-full">
                <Button
                  className="border border-gray-600_01 border-solid cursor-pointer flex items-center justify-center min-w-[91px] rounded-lg"
                  leftIcon={
                    <Img
                      className="h-3 mr-px my-px"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <div className="!text-gray-600_01 text-left text-xs">
                    Previous
                  </div>
                </Button>
                <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer h-[22px] rounded-md text-black-900 text-center text-xs w-[29px]"
                    size="xs"
                  >
                    1
                  </Button>
                  <List
                    className="sm:flex-col flex-row gap-[15px] grid grid-cols-2 w-[46%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-[22px] md:h-auto items-center justify-center rounded-lg w-[29px]">
                      <div className="flex flex-col h-full items-center justify-center p-3 rounded-lg w-full">
                        <Text
                          className="text-center text-gray-600_01 text-sm w-auto"
                          size="txtWorkSansRomanRegular14"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-[22px] md:h-auto items-center justify-center rounded-lg w-[29px]">
                      <div className="flex flex-col h-full items-center justify-center p-3 rounded-lg w-full">
                        <Text
                          className="text-center text-gray-600_01 text-sm w-auto"
                          size="txtWorkSansRomanRegular14"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col font-satoshi h-[22px] md:h-auto items-start justify-center rounded-lg w-auto">
                    <div className="flex flex-col h-[22px] md:h-auto items-center justify-center p-3 rounded-lg w-[29px]">
                      <Text
                        className="text-center text-gray-600_01 text-sm w-auto"
                        size="txtSatoshiMedium14"
                      >
                        ...
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="border border-lime-A400 border-solid cursor-pointer flex h-[22px] items-center justify-center min-w-[71px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-3 ml-1 my-px"
                      src="images/img_arrowleft.svg"
                      alt="arrow_left"
                    />
                  }
                  color="lime_A400"
                  size="xs"
                  variant="fill"
                >
                  <div className="text-left text-xs">Next</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
