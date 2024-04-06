import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config-firebase/firebase";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  const Icons = [
    { Img: "Icon1", to: "/" },
    { Img: "Icon2", to: "/" },
    { Img: "Icon3", to: "/" },
    { Img: "Icon4", to: "/" },
  ];

  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = JSON.parse(localStorage.getItem("userName"));

  return (
    <nav className="absolute  -top-[15.8rem] rounded-r-lg -ml-[7rem] bg-[#EDEDED] p-2">
      <div className="">
        <h1 className=" text-black text-lg py-2"> User: {userName}</h1>
      </div>
      <div>
        <h1 className="text-black text-lg">Email :{user && user.email}</h1>
      </div>

      <div className="pt-5">
        {Icons.map((data, index) => (
          <Link key={index} to={data.to}>
            <p>{data.Img}</p>
          </Link>
        ))}
      </div>
      <Link to="/">
        <button onClick={handleSignOut}>Log out</button>
      </Link>
    </nav>
  );
};

export default Dropdown;
