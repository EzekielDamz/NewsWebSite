import { IoIosToday } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Modal from "react-modal";
const Header = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [show, setShow] = useState(false);
  const menuButton = () => {
    setShow(!show);
  };

  const [showSearch, setShowSearch] = useState(false);

  const closeSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };
  const openSearch = () => {
    setShowSearch(true);
  };

  const Links = [
    { Icon: IoIosToday, to: "/today", nav: "Today", alt: "menu icons" },
    { Icon: IoIosToday, to: "/foryou", nav: "For You", alt: "menu icons" },
    { Icon: FiSend, to: "/readlater", nav: "For Later", alt: "menu icons" },
  ];

  const normalLink = "";

  return (
    <nav className=" max-sm:bg-white max-sm:flex   max-sm:justify-between  max-sm:px-[1rem] max-sm:mt-5 xl:hidden lg:hidden max-md:hidden sm:hidden">
      <div className="flex">
        <button className="text-2xl relative" onClick={menuButton}>
          {show ? <IoClose /> : <RiMenu4Line />}
        </button>
        {/* Menu drop here */}
        {show && (
          <motion.div
            animate={{ x: 80 }}
            initial={{ x: -300 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <Dropdown />
          </motion.div>
        )}
      </div>

      <div className="bg-[#EDEDED] flex gap-5   rounded-lg my-2 py-3 ">
        {Links.map((navs, index) => (
          <div key={index} className="my-1 pt-2 mr-1 ml-4">
            <NavLink
              to={navs.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-800 cursor-pointer text-white  py-4  pt-6 px-2 -ml-4  -mr-1 rounded-lg"
                  : normalLink
              }
            >
              <div to={navs.to} className="ml-4 absolute -mt-4  ">
                <IoIosToday />
              
                {/* <img src={} alt="" /> */}
              </div>
              {navs.nav}
              {/* <img src={navs.Icon} alt="" /> */}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex">
        <button className="text-2xl" onClick={openSearch}>
          <FiSearch />
        </button>
        {/* {showSearch && ( */}
        <div className="    ">
          <Modal
            isOpen={showSearch}
            onRequestClose={closeSearch}
            style={customStyles}
          >
            <div className="flex gap-5">
              <input
                className="w-[100%] outline-none focus:outline-blue-500 py-1 px-4 rounded-lg text-black font-extralight"
                type="text"
                name=""
                placeholder="Search......."
              />
              <button className="bg-blue-500 p-3 text-white font-bold rounded-lg">
                <FiSend />
              </button>
            </div>
          </Modal>
        </div>
        {/* )} */}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Header;
