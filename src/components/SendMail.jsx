import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

const SendMail = () => {
  const [formData, setformData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const open = useSelector((state) => state.appSlice.open);
  const dispath = useDispatch();

  const changeHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1>New Message</h1>
        <button
          onClick={() => dispath(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          onChange={changeHandler}
          name="to"
          value={formData.to}
          type="text"
          placeholder="To
          "
          className="outline-none py-1"
        />
        <input
          name="subject"
          onChange={changeHandler}
          type="text"
          value={formData.subject}
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          name="message"
          onChange={changeHandler}
          id=""
          value={formData.message}
          cols="30"
          rows="10"
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
