import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SendMail from "./SendMail";

const Mail = () => {

  const navigate = useNavigate()
  const mailIcon = [
    {
      icon: <RiInboxArchiveLine size={"20"} />,
    },
    { icon: <RiSpam2Line size={"20"} /> },
    { icon: <RiDeleteBin5Line size={"20"} /> },
    { icon: <IoMailUnreadOutline size={"20"} /> },
    { icon: <IoMdMore size={"20"} /> },
  ];

  return (
    <div className="h-full flex-1 items-center justify-center bg-slate-100 py-6 px-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <button onClick={()=>{
            navigate('/')
          }} className="px-6 hover:text-slate-400 ">
          

          {/* --------------- Icon ------------ */}
            <FaArrowLeft />
          </button>
          {mailIcon.map((index, item) => (
            <div className="text-2xl">{index.icon}</div>
          ))}
        </div>
      </div>
  

  <div className=" flex items-center justify-between ">
    <div className=" flex py-8 gap-4 items-center ">
      <h1 className="text-xl font-semi-bold">Subject</h1>
      <span className=" flex bg-gray-400 px-2 rounded-lg  ">Inbox</span>
    </div>
    <div className="mx-4">Time ayega idhr bhii </div>
  </div>
  <div>
    <p>Rishabhdubey00@gmail.com</p>
    <p>to me</p>
  </div>
  <div className="mt-12 pb-6">message</div>


    </div>
  );
};

export default Mail;
