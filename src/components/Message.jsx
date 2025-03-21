import React from "react";
import { MdCropSquare, MdStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedMail } from "../redux/appSlice";

const Message = ({email}) => {


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const opemMail=()=>{
    dispatch(setSelectedMail(email));
    navigate(`/mail/${email.id}`)
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

      <p className=" text-gray-500 truncate inline-block max-w-full ">{email.message}.</p>
      </div>
      <div className=" flex items-center mr-2 text-sm">{new Date(email?.createdAt?.seconds*1000).toUTCString()}</div>
    </div>
  );
};

export default Message;
