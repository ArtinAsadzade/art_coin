import Users from "./Users";

export default function Ranking({ data, userRank }) {
  const isUserInTop100 = data.some((item) => item.rank === userRank);

  const userSurroundings = data.slice(userRank - 2, userRank + 1);

  return (
    <div className="w-full flex flex-col text-secondary font-bold gap-[20px] border-t-[1px] border-secondary pt-5">
      <div className="w-full flex justify-between">
        <h5>Ranking</h5>
        <h5>Total</h5>
      </div>
      <div className="flex flex-col gap-2">
        {data?.slice(0, 100).map((item, index) => (
          <Users key={item.id} index={index} props={item} />
        ))}

        {!isUserInTop100 && (
          <>
            <div className="w-full flex justify-between border-t-[1px] border-secondary pt-5">
              <h5>Your Rank</h5>
            </div>
            {userSurroundings.map((item, index) => (
              <Users key={item.id} index={item.rank} props={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
