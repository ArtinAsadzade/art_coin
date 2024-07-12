import Coin from "../components/Coin";
import NavContainer from "../components/Nav/NavContainer";
import Tokens from "../components/Tokens";

export default function Home() {
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/api/send-verification-code", {
  //       email: "artinfortnit@gmail.com",
  //     })
  //     .then((response) => {
  //       console.log("User Data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // });

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
