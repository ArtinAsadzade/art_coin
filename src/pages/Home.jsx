import ClaimTokens from "../components/ClaimTokens";
import Coin from "../components/Coin";
import NavContainer from "../components/Nav/NavContainer";
import StatusBar from "../components/StatusBar";
import Tokens from "../components/Tokens";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="flex-1 flex flex-col gap-5 items-center px-3 bg-primary relative select-none">
          <Tokens />
          <StatusBar />
          <Coin />
          <ClaimTokens />
          <NavContainer />
        </div>
      </div>
    </>
  );
}
