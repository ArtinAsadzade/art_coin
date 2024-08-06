import Users from "./Users";

export default function Ranking({ data }) {
  return (
    <div className="w-full flex flex-col text-secondary font-bold gap-[40px] border-t-[1px] border-secondary pt-5">
      <div className="w-full flex justify-between">
        <h5>Ranking</h5>
        <h5>Total</h5>
      </div>
      <div className="flex flex-col gap-[15px]">
        {data?.slice(0, 100).map((item, index) => (
          <Users key={item.id} index={index} props={item} />
        ))}
      </div>
    </div>
  );
}
