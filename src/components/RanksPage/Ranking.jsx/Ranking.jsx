import Users from "./Users";

const rankings = [
  { id: 1, title: "Coin Ranking" },
  { id: 2, title: "Ref Ranking" },
];

export default function Ranking({ data, userId, ranking, setRanking }) {
  const userIndex = data?.findIndex((item) => item._id === userId);

  const isUserInTop100 = userIndex >= 0 && userIndex < 100;

  const userSurroundings = data?.slice(userIndex + 1 - 1, userIndex + 1);

  return (
    <div className="w-full flex flex-col text-secondary font-bold gap-[20px] border-t-[1px] border-secondary pt-5">
      <div className="w-full bg-secondary p-1 rounded-[15px] flex justify-between gap-1">
        {rankings.map((item) => (
          <div
            className={`w-full rounded-[12px] text-center p-1 transition-all duration-300 ${
              item.id === ranking ? " bg-primary text-secondary" : "text-primary"
            }`}
            key={item.id}
            onClick={() => setRanking(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between">
        <h5>Ranking</h5>
        <h5>Total Coins</h5>
      </div>
      <div className="flex flex-col gap-2">
        {data?.slice(0, 100).map((item, index) => (
          <Users key={item._id} index={index} props={item} />
        ))}

        {!isUserInTop100 && userIndex >= 0 && (
          <>
            <div className="w-full flex justify-between border-t-[1px] border-secondary pt-5">
              <h5>Your Rank</h5>
            </div>
            {userSurroundings?.map((item) => (
              <Users key={item._id} index={userIndex} props={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
