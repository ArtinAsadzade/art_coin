import { Link } from "react-router-dom";

export default function NavItems(props) {
  return (
    <Link
      to={props.link}
      className="w-16 p-2 backdrop:fil bg-secondary bg-opacity-90 font-bold text-primary rounded-md backdrop-blur-sm flex flex-col items-center gap-3 cursor-pointer"
    >
      {props.icon}
      <h3 className="text-sm">{props.title}</h3>
    </Link>
  );
}
