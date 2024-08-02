import { FireIcon, HomeIcon, PresentationChartBarIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const bannedOSListData = ["Mac OS", "Linux", "Windows"];

export const navData = [
  { id: 1, title: "Ref", icon: <UserGroupIcon className="w-8" />, link: "" },
  { id: 2, title: "Task", icon: <RectangleGroupIcon className="w-8" />, link: "" },
  { id: 3, title: "Home", icon: <HomeIcon className="w-8" />, link: "" },
  { id: 4, title: "Boost", icon: <FireIcon className="w-8" />, link: "" },
  { id: 5, title: "Status", icon: <PresentationChartBarIcon className="w-8" />, link: "" },
];

export const ranksData = [
  { id: 10, title: "Mythic", start: 1000000000 },
  { id: 9, title: "Legendary", start: 500000000 },
  { id: 8, title: "Champion", start: 100000000 },
  { id: 7, title: "Elite", start: 10000000 },
  { id: 6, title: "Master", start: 1000000 },
  { id: 5, title: "Expert", start: 500000 },
  { id: 4, title: "Professional", start: 100000 },
  { id: 3, title: "Apprentice", start: 10000 },
  { id: 2, title: "Beginner", start: 1000 },
  { id: 1, title: "Novice", start: 0 },
];
