import BreakingNewspage from "../Components/BreakingNewspage";
import MobileNav from "../Components/Header";
import NewToDisplay from "../Components/NewToDisplay";

const Webpage = () => {
  return (
    <main>
      <div className="px-[5rem] pt-10 bg-[#EDEDED]  sm:px-[2rem] max-sm:px-[1rem] ">
        <BreakingNewspage />
        <NewToDisplay />
      </div>

      {/* <Topstory /> */}
      <div className="sticky z-0 bottom-0">
        <MobileNav />
      </div>
    </main>
  );
};

export default Webpage;
