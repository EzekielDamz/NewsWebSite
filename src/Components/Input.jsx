import Modal from "react-modal";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Input = () => {
  // const [showSearch, setShowSearch]  = useState(false)
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
  const [showSearch, setShowSearch] = useState(false);

  const closeSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };

  return (
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
  );
};

export default Input;
