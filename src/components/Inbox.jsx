import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdMoon, IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsChatSquareQuote } from "react-icons/bs";
import Messagesmain from "./Messagesmain";

const Inbox = () => {
  const [mailTypeSelected, setMailtypeSelected] = useState(0);

  const primarySection = [
    {
      icon: <RiInboxUnarchiveFill size={"20"} />,
      text: "Primary",
    },
    {
      icon: <FaRegUser />,
      text: "Social",
    },
    {
      icon: <IoMdInformationCircleOutline />,
      text: "Updates",
    },
    {
      icon: <BsChatSquareQuote />,
      text: "Forums",
    },
  ];

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 ">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-end justify-between text-gray-700 py-5">
          <div className="flex items-center gap-4 ">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className=" pl-2 rounded-full hover:bg-gray-100">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className=" pl-2 rounded-full hover:bg-gray-100">
            <IoMdMore size={"20px"} />
          </div>
        </div>
      </div>
      {/* promtion section start */}
      <div className="flex items-center  mx-4  ">
        {primarySection.map((item, index) => {
          return (
            <div className="flex items-center gap-2   cursor-pointer ">
              <div className="flex items-center gap-2    ">
                <button
                  key={index}
                  className={`flex items-center gap-5 p-4 ${
                    mailTypeSelected === index
                      ? "border-b-4 border-b-blue-600 text-blue-600"
                      : "border-b-4 border-b-transparent"
                  } w-52 hover:bg-gray-100 hover:transition-all delay-75   hover:cursor-pointer`}
                  onClick={() => {
                    setMailtypeSelected(index);
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
                
              </div>
            </div>
          );
        })}
      </div>
      <Messagesmain/>
    </div>
  );
};

export default Inbox;
