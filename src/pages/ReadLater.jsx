import MobileNav from "../Components/Header";
import NewToDisplay from "../Components/NewToDisplay";
import Read from "../Components/Read";
const ReadLater = () => {
  return (
    <section>
      <div className="px-[5rem] pt-10 bg-[#EDEDED]  sm:px-[2rem] max-sm:px-[1rem] ">
        <Read
          content="Read Later"
        />
        <NewToDisplay />
      </div>

      <div className="sticky z-0 bottom-0">
        <MobileNav />
      </div>
    </section>
  );
};

export default ReadLater;
