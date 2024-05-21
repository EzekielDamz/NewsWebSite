import { Link } from "react-router-dom";
import Navlinks from "../contants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center gap-[5rem] sm:gap-[3rem] max-sm:gap-[3rem] max-sm:pt-3">
        {Navlinks.map((menu, index) => (
          <ul key={index}>
            <li>
              <Link to={menu.to} className="text-gray-600 font-bold text-lg">
                {menu.href}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
