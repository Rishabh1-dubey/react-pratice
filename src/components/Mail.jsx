import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { motion } from "framer-motion"; // Import Framer Motion

const Mail = () => {
  const mailOpen = useSelector((state) => state.appSlice.selectedMail);
  const navigate = useNavigate();
  const params = useParams();

  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(db, "emails", id));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const mailIcon = [
    {
      icon: <RiInboxArchiveLine size={"20"} />,
    },
    { icon: <RiSpam2Line size={"20"} /> },
    {
      icon: (
        <RiDeleteBin5Line
          className="cursor-pointer"
          onClick={() => {
            deleteMailById(params.id);
          }}
          size={"20"}
        />
      ),
    },
    { icon: <IoMailUnreadOutline size={"20"} /> },
    { icon: <IoMdMore size={"20"} /> },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="h-full flex-1 items-center justify-center bg-slate-100 py-6 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <motion.button
            onClick={() => {
              navigate("/");
            }}
            className="px-4 hover:text-slate-400"
            variants={itemVariants}
          >
            <FaArrowLeft />
          </motion.button>
          {mailIcon.map((index, item) => (
            <motion.div
              key={item}
              className="text-2xl"
              variants={itemVariants}
            >
              {index.icon}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="flex items-center justify-between"
        variants={itemVariants}
      >
        <div className="flex py-8 gap-4 items-center">
          <h1 className="text-xl font-semi-bold">{mailOpen?.subject}</h1>
          <span className="flex bg-gray-400 px-2 rounded-lg">Inbox</span>
        </div>
        <div className="mx-4">
          {new Date(mailOpen?.createdAt?.seconds * 1000).toUTCString()}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p>{mailOpen?.to}</p>
        <p>To me</p>
      </motion.div>

      <motion.div className="mt-12 pb-6" variants={itemVariants}>
        {mailOpen?.message}
      </motion.div>
    </motion.div>
  );
};

export default Mail;