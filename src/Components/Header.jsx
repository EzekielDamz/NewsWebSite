import { IoIosToday } from "react-icons/io";
import { Navlinks } from "../contants/index";
import { RiMenu4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Modal from "react-modal";
// import axios from "axios";
import { useNewsContext } from "../context/NewsContext";
import { News } from "../contants";

const Header = () => {
  const [inputText, setInputText] = useState("");
  // const { setStateData, setStateNews, setDisplayData } = useNewsContext();
  const { stateNews, setStateNews } = useNewsContext();
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(true);

  const customStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const menuButton = () => {
    setShow(!show);
  };
  const closeSearch = () => {
    setShowSearch(false);
  };
  const openSearch = () => {
    setShowSearch(true);
  };

  useEffect(() => {
    setStateNews(News);
  }, [setStateNews]);

  const handleSearch = () => {
    if (!inputText) {
      setStateNews(News);
      // return;
    } else {
      alert("Data Not Found");
    }

    const searchNews = stateNews.filter(
      (article) =>
        article.title.toLowerCase()?.includes(inputText) ||
        article.name.toLowerCase()?.includes(inputText) ||
        article.author.toLowerCase()?.includes(inputText)
      // article?.content?.toLowerCase()?.includes(inputText)
    );

    console.log(searchNews);
  };

  // }, []);

  return (
    <nav className="bg-white flex justify-between px-[1rem] mt-5 xl:hidden lg:hidden w-full">
      <div className="flex">
        <button className="text-2xl relative" onClick={menuButton}>
          {show ? <IoClose /> : <RiMenu4Line />}
        </button>
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
      <div className="bg-[#EDEDED] flex gap-5 rounded-lg my-2 py-3  ">
        {Navlinks.map((navs, index) => (
          <div key={index} className="my-1 pt-2 mr-1 ml-4 max-w-full">
            <NavLink
              to={navs.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 cursor-pointer text-white  py-4  pt-6 px-2 -ml-4  -mr-1 rounded-lg"
                  : ""
              }
            >
              <div className="ml-4 absolute -mt-4">
                <IoIosToday />
              </div>
              {navs.nav}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex">
        <button className="text-2xl" onClick={openSearch}>
          <FiSearch />
        </button>
        <div>
          <Modal
            isOpen={showSearch}
            onRequestClose={closeSearch}
            style={customStyles}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className="flex gap-5">
                <input
                  className="w-[100%] outline-none focus:outline-blue-500 py-1 px-4 rounded-lg text-black font-extralight"
                  type="search"
                  value={inputText}
                  onChange={handleChange}
                  placeholder="Search......."
                />

                <button
                  className="bg-blue-600 p-3 text-white font-bold rounded-lg"
                  type="submit"
                >
                  <FiSend />
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </nav>
  );
};
export default Header;
