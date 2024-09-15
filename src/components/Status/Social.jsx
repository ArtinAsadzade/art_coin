import { socialMedia } from "../../data/Data";

export default function Social() {
  return (
    <div className="w-full font-bold text-secondary">
      <h3 className="text-left">Art Coin Social Media :</h3>
      <div className="flex flex-col gap-2 my-2">
        {socialMedia.map((item) => (
          <a
            href={item.link}
            key={item.id}
            target="_blank"
            className="w-full flex items-center gap-10 rounded-xl bg-secondary text-primary text-center  px-1 text-bold"
          >
            <img src={item.logo} alt="Social Logo" className="w-[45px] h-[45px] rounded-xl" />
            <p className="py-4">{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
