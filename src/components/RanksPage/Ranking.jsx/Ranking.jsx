import Users from "./Users";

export default function Ranking({ data, userId }) {
  const userIndex = data?.findIndex((item) => item._id === userId);

  const isUserInTop100 = userIndex >= 0 && userIndex < 100;

  const userSurroundings = data?.slice(Math.max(userIndex - 3, 0), userIndex + 1);

  return (
    <div className="w-full flex flex-col text-secondary font-bold gap-[20px] border-t-[1px] border-secondary pt-5">
      <div className="w-full flex justify-between">
        <h5>Ranking</h5>
        <h5>Total Coins</h5>
      </div>
      <div className="flex flex-col gap-2">
        {data
          ?.slice(0, 100)
          .filter((item) => item.emailVerified)
          .map((item, index) => (
            <Users key={item._id} index={index} props={item} />
          ))}

        {!isUserInTop100 && userIndex >= 0 && (
          <>
            <div className="w-full flex justify-between border-t-[1px] border-secondary pt-5">
              <h5>Your Rank</h5>
            </div>
            {userSurroundings?.map((item, index) => (
              <Users key={item._id} index={index} props={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
