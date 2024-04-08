import MobileNav from "../Components/Header";
import Read from "../Components/Read";
import ForYourApi from "../Components/ForYou";
const ForYou = () => {
  return (
    <section>
      <div className="px-[5rem] pt-10 bg-[#EDEDED]  sm:px-[2rem] max-sm:px-[1rem] ">
        <Read content="Read More" />
        <ForYourApi />
      </div>

      <div className="sticky z-0 bottom-0">
        <MobileNav />
      </div>
    </section>
  );
};

export default ForYou;
