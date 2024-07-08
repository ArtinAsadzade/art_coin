export default function NavItems(props) {
  return (
    <div
      className="w-16 p-2 backdrop:fil bg-secondary bg-opacity-90 font-bold text-primary rounded-md backdrop-blur-sm flex flex-col items-center gap-3 cursor-pointer"
      onClick={props.func}
    >
      {props.icon}
      <h3 className="text-sm">{props.title}</h3>
    </div>
  );
}
