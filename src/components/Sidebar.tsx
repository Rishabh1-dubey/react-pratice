import React from 'react'
import { FaPen } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { LuClock } from "react-icons/lu"
import { IoIosArrowDropdown, IoMdSend } from "react-icons/io";
const Sidebar = () => {

    const sidebatItem = [
        {
            icon: <RiInboxUnarchiveFill size={"20"} />,
            text: "Inbox",

        }, {
            icon: <CiStar size={"20"} />,
            text: "Starred",

        }, {
            icon: <LuClock size={"20"} />,
            text: "Snoozed",

        }, {
            icon: <IoMdSend size={"20"} />,
            text: "Sent",

        }, {
            icon: <IoIosArrowDropdown size={"20"} />,
            text: "More",

        }



    ]


    return (
        <div className='w-[270px] border rounded-2xl h-screen'>


            <div className='flex items-center justify-between ml-2 mt-6 '>
                <button className='flex items-center justify-between bg-sky-200 py-4 px-6 rounded-2xl gap-6  '>

                    <FaPen />
                    <div className='font-semibold'>Compose</div>
                </button>
            </div>

            {/* inbox wla section rhega flex col kre dena */}
            <div className='flex  flex-col   mt-3'>


                <div className=' mr-4 text-base  py-1  border border-none pb-3 pt-3  '>

                    {

                        sidebatItem.map(( item,index) => {
                            return (
                                <div className={`flex gap-4 mt-2 pl-6 items-center ${index === 0 ? 'bg-blue-200 rounded-r-2xl py-1' : ''}`}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>

                                </div>
                            )
                        })


                    }


                </div>










                {/* <div className='flex items-center justify-between'>strred <CiStar /></div>
                <div className='flex items-center justify-between'>snozzed < /></div>
                <div className='flex items-center justify-between'>snozzed < /></div>
                <div className='flex items-center justify-between'>snozzed< /> */}
                {/* </div> */}



            </div>

        </div>
    )
}

export default Sidebar