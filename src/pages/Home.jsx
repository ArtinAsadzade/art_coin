import ClaimTokens from "../components/ClaimTokens";
import Coin from "../components/Coin";
import StatusBar from "../components/StatusBar";
import Tokens from "../components/Tokens";
export default function Home() {
  return (
    <>
      <div className="w-full h-svh flex flex-col">
        <div className="flex-1 flex flex-col gap-5 items-center px-3 relative select-none bg-primary pb-[100px]">
          <Tokens />
          <StatusBar />
          <Coin />
          <ClaimTokens />
        </div>
      </div>
    </>
  );
}
