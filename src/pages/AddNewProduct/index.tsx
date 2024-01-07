import React from "react";

import {
  Button,
  Img,
  Input,
  List,
  SelectBox,
  Text,
  TextArea,
} from "components";
import AboutProductColumnNine from "components/AboutProductColumnNine";
import AboutProductColumncontrastOne from "components/AboutProductColumncontrastOne";
import Header from "components/Header";

const selectStatusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectACategoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectGenderOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectMaterialOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectStitchOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddNewProductPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-syncopate items-center justify-start mx-auto pb-[281px] w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-worksans items-start justify-start max-w-[1116px] mt-1 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <div className="border border-gray-200_01 border-solid flex flex-col gap-5 items-start justify-start p-[18px] rounded-[10px] w-auto">
                <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtWorkSansRomanMedium14"
                  >
                    Product images
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-[286px]">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[99%]">
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <div className="bg-white-A700 border border-black-900 border-solid flex flex-col h-[102px] md:h-auto items-center justify-center px-1.5 rounded-[9px] w-[87px]">
                            <Img
                              className="h-[90px] md:h-auto object-cover rounded-md w-[75px]"
                              src="images/img_rectangle160444.png"
                              alt="rectangle160443"
                            />
                          </div>
                          <Img
                            className="h-[102px] md:h-auto object-cover rounded-[9px] w-[87px]"
                            src="images/img_rectangle160447.png"
                            alt="rectangle160447"
                          />
                          <Img
                            className="h-[102px] md:h-auto object-cover rounded-[9px] w-[89px]"
                            src="images/img_rectangle160447.png"
                            alt="rectangle160444"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[67%] md:w-full">
                          <Img
                            className="h-[102px] md:h-auto object-cover rounded-[9px] w-[89px]"
                            src="images/img_rectangle160447.png"
                            alt="rectangle160445"
                          />
                          <Img
                            className="h-[102px] md:h-auto object-cover rounded-[9px] w-[89px]"
                            src="images/img_rectangle160447.png"
                            alt="rectangle160446"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Button
                    className="border border-gray-200_01 border-solid cursor-pointer flex items-center justify-center min-w-[106px] rounded-md"
                    leftIcon={
                      <Img
                        className="h-3.5 mb-px mr-1.5"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    }
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-medium text-left text-xs tracking-[-0.24px]">
                      Add images
                    </div>
                  </Button>
                  <Text
                    className="text-gray-600_01 text-xs tracking-[-0.24px] w-auto"
                    size="txtWorkSansRomanRegular12"
                  >
                    <span className="text-gray-600_01 font-worksans uppercase text-left font-normal">
                      jpg
                    </span>
                    <span className="text-gray-600_01 font-worksans text-left font-normal">
                      ,{" "}
                    </span>
                    <span className="text-gray-600_01 font-worksans uppercase text-left font-normal">
                      jpeg
                    </span>
                    <span className="text-gray-600_01 font-worksans text-left font-normal">
                      {" "}
                      and PNG only supported
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-[18px] items-start justify-start p-[18px] rounded-[10px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.32px] w-auto"
                  size="txtWorkSansRomanMedium16"
                >
                  Availability
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                    size="txtWorkSansRomanRegular14Black900"
                  >
                    Status
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <SelectBox
                        className="border border-gray-200_01 border-solid font-medium text-left text-sm tracking-[-0.28px] w-full"
                        placeholderClassName="text-gray-600_01"
                        indicator={
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowdown_gray_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame1000002755"
                        options={selectStatusOptionsList}
                        isSearchable={false}
                        placeholder="Select status"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                    <Text
                      className="text-gray-600_01 text-xs tracking-[-0.24px] w-auto"
                      size="txtWorkSansRomanRegular12"
                    >
                      Base price of the product
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-6 items-start justify-start p-[18px] rounded-[10px] w-[322px]">
                <Text
                  className="text-base text-black-900 tracking-[-0.32px] w-auto"
                  size="txtWorkSansRomanMedium16"
                >
                  Category Details
                </Text>
                <List
                  className="flex flex-col gap-[18px] items-start w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-1 items-start justify-start my-0 w-full">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                      size="txtWorkSansRomanRegular14Black900"
                    >
                      Category
                    </Text>
                    <div className="flex flex-col items-start justify-start w-[284px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox
                          className="border border-gray-200_01 border-solid font-medium text-left text-sm tracking-[-0.28px] w-full"
                          placeholderClassName="text-gray-600_01"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame1000002755"
                          options={selectACategoryOptionsList}
                          isSearchable={false}
                          placeholder="Select a category"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start my-0 w-auto">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                      size="txtWorkSansRomanRegular14Black900"
                    >
                      Gender
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox
                          className="border border-gray-200_01 border-solid font-medium text-left text-sm tracking-[-0.28px] w-full"
                          placeholderClassName="text-gray-600_01"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame1000002755"
                          options={selectGenderOptionsList}
                          isSearchable={false}
                          placeholder="Select gender"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start my-0 w-auto">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                      size="txtWorkSansRomanRegular14Black900"
                    >
                      Material
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox
                          className="border border-gray-200_01 border-solid font-medium text-left text-sm tracking-[-0.28px] w-full"
                          placeholderClassName="text-gray-600_01"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame1000002755"
                          options={selectMaterialOptionsList}
                          isSearchable={false}
                          placeholder="Select material"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start my-0 w-auto">
                    <Text
                      className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                      size="txtWorkSansRomanRegular14Black900"
                    >
                      Stitch
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox
                          className="border border-gray-200_01 border-solid font-medium text-left text-sm tracking-[-0.28px] w-full"
                          placeholderClassName="text-gray-600_01"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="frame1000002755"
                          options={selectStitchOptionsList}
                          isSearchable={false}
                          placeholder="Select Stitch"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
              <div className="bg-gray-50 flex flex-col gap-6 items-start justify-start pb-3 pt-[18px] px-[18px] rounded-[10px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.32px] w-auto"
                  size="txtWorkSansRomanMedium16"
                >
                  General
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start max-w-[740px] w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtWorkSansRomanRegular14Bluegray900"
                    >
                      Product name
                    </Text>
                    <Input
                      name="input"
                      placeholder="Rounded Neck T-shirt"
                      className="p-0 placeholder:text-black-900 text-left text-sm tracking-[-0.28px] w-full"
                      wrapClassName="border border-gray-200 border-solid rounded-lg w-full"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 h-[127px] md:h-auto items-start justify-start max-w-[740px] w-full">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtWorkSansRomanRegular14Bluegray900"
                    >
                      Description
                    </Text>
                    <TextArea
                      className="bg-white-A700 border border-gray-200 border-solid gap-[5.07px] h-full pb-2.5 pl-4 pr-[8.12px] pt-4 rounded-lg placeholder:text-black-900 text-black-900 text-left text-sm tracking-[-0.28px] w-full"
                      name="input_One"
                      placeholder="Rounded Neck T-shirt"
                    ></TextArea>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between max-w-[740px] w-full">
                    <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[520px] sm:w-full">
                      <div className="flex flex-col items-center justify-start py-1.5 w-full">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtWorkSansRomanRegular14Bluegray900"
                        >
                          Choose available sizes
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                        <Button
                          className="cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="black_900"
                          size="xs"
                          variant="fill"
                        >
                          s
                        </Button>
                        <Button
                          className="border border-gray-400 border-solid cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          M
                        </Button>
                        <Button
                          className="border border-gray-400 border-solid cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          L
                        </Button>
                        <Button
                          className="border border-gray-400 border-solid cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          XL
                        </Button>
                        <Button
                          className="border border-gray-400 border-solid cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          XXL
                        </Button>
                        <Button
                          className="border border-gray-400 border-solid cursor-pointer flex-1 text-center text-lg uppercase w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        >
                          XXL
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start py-1.5 w-[91px]">
                        <Text
                          className="text-blue_gray-900 text-sm w-auto"
                          size="txtWorkSansRomanRegular14Bluegray900"
                        >
                          Add new size
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-400 border-solid flex flex-row gap-2.5 h-8 md:h-auto items-center justify-between pl-[18px] pr-1 py-1 rounded-[16px] w-[158px]">
                        <Text
                          className="capitalize text-gray-600_01 text-sm w-auto"
                          size="txtWorkSansRomanRegular14"
                        >
                          Enter Size
                        </Text>
                        <Button
                          className="capitalize cursor-pointer font-medium h-[25px] rounded-[12px] text-[13px] text-center w-[50px]"
                          color="black_900"
                          size="xs"
                          variant="fill"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start py-1.5 w-full">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtWorkSansRomanRegular14Bluegray900"
                      >
                        Add available colors
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                            <List
                              className="sm:flex-col flex-row gap-3.5 grid grid-cols-2 w-[36%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                                <div className="border border-black-900 border-solid flex flex-col h-9 items-center justify-start p-[5px] rounded-[50%] w-9">
                                  <div className="bg-gray-600_01 h-6 rounded-[50%] w-6"></div>
                                </div>
                                <Text
                                  className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                                  size="txtWorkSansRomanRegular12Bluegray900"
                                >
                                  Grey
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                                <div className="border border-blue_gray-100 border-solid flex flex-col h-9 items-center justify-start p-[5px] rounded-[50%] w-9">
                                  <div className="bg-orange-A200 h-6 rounded-[50%] w-6"></div>
                                </div>
                                <Text
                                  className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                                  size="txtWorkSansRomanRegular12Bluegray900"
                                >
                                  Orange
                                </Text>
                              </div>
                            </List>
                            <div className="flex flex-col gap-2 items-center justify-center w-auto">
                              <div className="border border-blue_gray-100 border-solid flex flex-col h-9 items-center justify-start p-[5px] rounded-[50%] w-9">
                                <div className="bg-light_blue-A200 h-6 rounded-[50%] w-6"></div>
                              </div>
                              <Text
                                className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                                size="txtWorkSansRomanRegular12Bluegray900"
                              >
                                Sky Blue
                              </Text>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-3.5 grid grid-cols-2 w-[34%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                                <div className="border border-blue_gray-100 border-solid flex flex-col h-9 items-center justify-start p-[5px] rounded-[50%] w-9">
                                  <div className="bg-red-300 h-6 rounded-[50%] w-6"></div>
                                </div>
                                <Text
                                  className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                                  size="txtWorkSansRomanRegular12Bluegray900"
                                >
                                  Pink
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                                <div className="border border-blue_gray-100 border-solid flex flex-col h-9 items-center justify-start p-[5px] rounded-[50%] w-9">
                                  <div className="bg-light_green-A200 h-6 rounded-[50%] w-6"></div>
                                </div>
                                <Text
                                  className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                                  size="txtWorkSansRomanRegular12Bluegray900"
                                >
                                  Green
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <AboutProductColumnNine className="flex flex-col gap-8 items-center justify-end px-[5px] w-auto" />
                      <div className="flex flex-col gap-2 items-start justify-center w-auto">
                        <Button
                          className="flex h-9 items-center justify-center w-9"
                          shape="circle"
                          color="blue_gray_100"
                          size="sm"
                          variant="outline"
                        >
                          <Img
                            className="h-3.5"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                        </Button>
                        <Text
                          className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                          size="txtWorkSansRomanRegular12Bluegray900"
                        >
                          Delete
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-8 md:h-auto items-center justify-start w-[82px]">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-xs tracking-[-0.24px] w-auto"
                  >
                    <Text size="txtWorkSansRomanRegular12Bluegray900">
                      Clear All
                    </Text>
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200_01 border-solid flex flex-col items-start justify-start p-[18px] rounded-[10px] w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-black-900 tracking-[-0.32px] w-auto"
                    size="txtWorkSansRomanMedium16"
                  >
                    Pricing
                  </Text>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[740px] w-full">
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                          size="txtWorkSansRomanRegular14Black900"
                        >
                          Base price
                        </Text>
                        <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="frame1000002755_One"
                              placeholder="102.00"
                              className="font-medium lowercase p-0 placeholder:text-black-900 text-base text-left w-full"
                              wrapClassName="border border-gray-200_01 border-solid flex md:h-auto w-[360px]"
                              suffix={
                                <Img
                                  className="h-6 ml-[35px] my-auto"
                                  src="images/img_user_gray_900.svg"
                                  alt="user"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                          <Text
                            className="text-gray-600_01 text-xs tracking-[-0.24px] w-auto"
                            size="txtWorkSansRomanRegular12"
                          >
                            Base price of the product
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[-0.28px] w-auto"
                          size="txtWorkSansRomanRegular14Black900"
                        >
                          Current price
                        </Text>
                        <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="frame1000002755_Two"
                              placeholder="102.00"
                              className="font-medium lowercase p-0 placeholder:text-black-900 text-base text-left w-full"
                              wrapClassName="border border-gray-200_01 border-solid flex md:h-auto w-[360px]"
                              suffix={
                                <Img
                                  className="h-6 ml-[35px] my-auto"
                                  src="images/img_user_gray_900.svg"
                                  alt="user"
                                />
                              }
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            ></Input>
                          </div>
                          <Text
                            className="text-gray-600_01 text-xs tracking-[-0.24px] w-auto"
                            size="txtWorkSansRomanRegular12"
                          >
                            Price of the product after discount
                          </Text>
                        </div>
                      </div>
                    </div>
                    <AboutProductColumncontrastOne className="flex flex-col gap-2 items-start justify-start w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProductPage;
