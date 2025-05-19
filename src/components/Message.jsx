import React from "react";
import { MdCropSquare, MdStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedMail } from "../redux/appSlice";
import { motion } from "framer-motion";

const Message = ({ email }) => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(setSelectedMail(email));
    navigate(`/mail/${email.id}`);
  };

  return (
    <motion.div
    onClick={openMail}
    initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration:0.5}}
    className="flex items-center bg-white hover:bg-slate-100 cursor-pointer transition-all border-b rounded-md my-2 py-3 px-4 shadow-md"
  >
    <MdCropSquare size={"20px"} className="text-gray-500" />
    <MdStar size={"20px"} className="text-gray-500 mx-3" />

    <div className="flex-1 overflow-hidden">
      <p className="text-gray-600 truncate max-w-[70%]">{email.message}</p>
    </div>

    <div className="text-sm text-gray-400 whitespace-nowrap ml-auto">
      {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
    </div>
  </motion.div>
  );
};

export default Message;
