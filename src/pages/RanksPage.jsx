import NavContainer from "../components/Nav/NavContainer";
import RanksPageSlider from "../components/RanksPage/RanksPageSlider";

export default function RanksPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 flex flex-col gap-5 items-center px-3 bg-primary relative select-none">
        <RanksPageSlider />
        <NavContainer />
      </div>
    </div>
  );
}
