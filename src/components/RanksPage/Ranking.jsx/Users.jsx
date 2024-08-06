import { decrypted } from "../../../utils";

export default function Users({ props, index }) {
  const email = decrypted("token");

  return (
    <div className="w-full flex justify-between bg-secondary text-primary px-3 py-4 rounded-lg items-center">
      <div className="flex items-center gap-4">
        <p>{index + 1} </p>
        <div className="flex items-center gap-2">
          <h3>user_{props._id.slice(0, 7)}</h3>
          {props.email === email && <div className="bg-primary text-secondary px-[4px] py-[2px] text-[10px] rounded-md flex items-center">YOU</div>}
        </div>
      </div>
      <p>{props.coins}</p>
    </div>
  );
}
