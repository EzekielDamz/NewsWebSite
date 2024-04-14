import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "../config-firebase/firebase";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const userName = JSON.parse(localStorage.getItem("userName"));
  const userEmail = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="absolute -top-[11.8rem]  rounded-r-lg -ml-[7rem] bg-white p-2">
      <div className="">
        <h1 className=" text-black text-lg py-2 font-extralight">{userName}</h1>
      </div>
      <div>
        <h1 className="text-black text-lg font-extralight">{userEmail}</h1>
      </div>

      <div className=" flex gap-4 pt-5">
        <a href="" target="_blank">
          <IoLogoGithub />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100008397045730"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com/dammy_zek_dor" target="_blank">
          <FaXTwitter />
        </a>
      </div>
      <div className="mt-5 cursor-pointer pb-4">
        <Link
          to="/"
          className="bg-blue-600  text-white px-2 py-1 rounded-lg mt-5"
        >
          <button onClick={handleSignOut}>Log out</button>
        </Link>
      </div>
    </nav>
  );
};

export default Dropdown;
