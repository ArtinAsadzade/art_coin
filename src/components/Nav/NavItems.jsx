import { Link } from "react-router-dom";
import { home_url } from "../../router/Urls";

export default function NavItems(props) {
  return (
    <Link
      to={props.link ? props.link : home_url}
      className="w-full p-2 bg-secondary bg-opacity-90 font-bold text-primary rounded-md backdrop-blur-sm flex flex-col items-center gap-3 cursor-pointer"
    >
      {props.icon}
      <h3 className="text-[13px]">{props.title}</h3>
    </Link>
  );
}
