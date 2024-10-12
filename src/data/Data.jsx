import { FireIcon, HomeIcon, PresentationChartBarIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { home_url, info_url, status_url, task_url } from "../router/Urls";

export const bannedOSListData = ["Mac OS", "Linux", "Windows"];

export const navData = [
  { id: 1, title: "Info", icon: <UserGroupIcon className="w-7" />, link: info_url },
  { id: 2, title: "Task", icon: <RectangleGroupIcon className="w-7" />, link: task_url },
  { id: 3, title: "Home", icon: <HomeIcon className="w-7" />, link: home_url },
  { id: 4, title: "Boost", icon: <FireIcon className="w-7" />, link: "" },
  { id: 5, title: "Status", icon: <PresentationChartBarIcon className="w-7" />, link: status_url },
];

export const ranksData = [
  { id: 1, title: "Novice", start: 0, end: 999, src: "/ranks/novice.png" },
  { id: 2, title: "Beginner", start: 1000, end: 9999, src: "/ranks/beginner.png" },
  { id: 3, title: "Apprentice", start: 10000, end: 99999, src: "/ranks/apprentice.png" },
  { id: 4, title: "Professional", start: 100000, end: 499999, src: "/ranks/professional.png" },
  { id: 5, title: "Expert", start: 500000, end: 999999, src: "/ranks/expert.png" },
  { id: 6, title: "Master", start: 1000000, end: 9999999, src: "/ranks/master.png" },
  { id: 7, title: "Elite", start: 10000000, end: 99999999, src: "/ranks/elite.png" },
  { id: 8, title: "Champion", start: 100000000, end: 499999999, src: "/ranks/champion.png" },
  { id: 9, title: "Legendary", start: 500000000, end: 999999999, src: "/ranks/legendary.png" },
  { id: 10, title: "Mythic", start: 1000000000, end: 0, src: "/ranks/mythic.png" },
];

export const socialMedia = [
  { id: 3, title: "Telegram Community", link: "", logo: "/social_logo/telegram_logo.png" },
  { id: 1, title: "Instagram", link: "", logo: "/social_logo/Instagram_logo.jpg" },
  { id: 2, title: "Discord", link: "", logo: "/social_logo/discord_logo.jpg" },
];

export const categoryData = [
  { id: 1, title: "Watch Video" },
  { id: 2, title: "Follow" },
  { id: 3, title: "Referrals" },
  { id: 4, title: "Rank" },
];
