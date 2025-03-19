import React from "react";
import { MdCropSquare, MdStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Message = () => {

  const navigate = useNavigate()

  const opemMail=()=>{
    navigate('/mail/w12kjfj123kj')
  }


  return (
    <div onClick={opemMail} className="flex items-start hover:bg-slate-100  cursor-pointer transition-all delay-100 border-b-2  rounded-md hover:rounded-md my-4 py-2   mx-2 shadow-lg">
      <div className="flex items-center gap-3"></div>
      <div className="flex-none px-3 ">
        <MdCropSquare size={"20px"} />
      </div>{" "}
      <div className="flex-none px-3">
        <MdStar size={"20px"} />
      </div>{" "}
      <div className="flex-1 ml-4">

      <p className=" text-gray-500 truncate inline-block max-w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam possimus quisquam alias qui.</p>
      </div>
      <div className=" flex items-center mr-2">time ayegaa</div>
    </div>
  );
};

export default Message;
