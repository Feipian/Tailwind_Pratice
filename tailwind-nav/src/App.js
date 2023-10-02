import { useState } from "react";

import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
  BsArrowLeft,
} from "react-icons/bs";

import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill} from "react-icons/ri";

import './App.css';

function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard"},
    { title: "Pages", icon: <AiOutlineFileText />},
    { title: "Media", spacing: true, icon: <BsFillImageFill/>},
    {
      title: "projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1"},
        { title: "Submenu 2"},
        { title: "Submenu 3"},
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart />},
    { title: "Inbox", icon: <AiOutlineMail />},
    { title: "Profile", spacing: true, icon: <BsPerson />},
    { title: "Logout", icon: <AiOutlineLogout />},

  ];


  return (
    <div className='flex'>
      <div className={`bg-dark-purple h-screen p-5 pt-8 w-72 relative ${open ?'w-72' : 'w-20'} duration-300`}>
        <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"} duration-500`} onClick={() => setOpen(!open)}></BsArrowLeft>
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left duration-300 mr-2 ${!open && 'rotate-[360deg]'}`} />
          <h1 className={`text-white origin-left duration-300 font-medium text-2xl mr-2 ${!open && 'scale-0'}`}>Tailwind</h1>
        </div>

        <div className={`flex items-center rounded-md bg-light-white mt-6 px-4 py-2 ${!open ? "px-2.5" : "px-4"}`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer mr-2 ${!open && 'mr-2'}`} />
          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}></input>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 ${!open && 'hidden'} duration-300`}>{menu.title}</span>
                {menu.submenu && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={ () => 
                    setsubmenuOpen(!submenuOpen)} />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key="{index}" className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

      </div>

      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
