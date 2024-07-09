import Coin from "../components/Coin";
import NavContainer from "../components/Nav/NavContainer";
import Tokens from "../components/Tokens";

export default function Home() {
  return (
    <>
      <div className="w-full h-svh flex flex-col items-center p-5 bg-primary relative select-none">
        <Tokens />
        <Coin />
        <NavContainer />
      </div>
    </>
  );
}
