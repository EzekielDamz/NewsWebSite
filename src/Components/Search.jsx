import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="text-2xl mt-1 flex">
      <input type="text" name="" className="ring-2" />
      <button className="-ml-8 mt-1">
        <IoSearch className="" />
      </button>
    </div>
  );
};

export default Search;
