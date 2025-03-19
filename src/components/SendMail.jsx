import React from "react";
import { RxCross2 } from "react-icons/rx";

const SendMail = () => {
  return (
    <div className=" overflow-auto h-full w-[400px] border border-slate-300 rounded-xl   shadow-2xl">
      <div className="flex-1 items-center justify-between bg-gray-300 ">
        <div className="flex justify-between items-center py-2 mb-2">
          <div className="px-2">New Message</div>

          <div className="mx-4">
            <RxCross2 />
          </div>
        </div>
      </div>
      {/* form data */}

<form>
    <div className="flex flex-col">


<input className="mb-4 border-b-2 mx-2 focus:outline-none focus:ring-0" type="text" placeholder="To"/>
<input className="border-b-2 mb-2  mx-2 focus:outline-none focus:ring-0" type="text" placeholder="Subject"/>
<textarea className="border border-pink-700" cols={5} rows={10}/>

    </div>
</form>

    </div>
  );
};

export default SendMail;
