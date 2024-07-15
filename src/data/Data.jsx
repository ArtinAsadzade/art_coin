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
  { id: 1, title: "Owner", start: 1000000000000 },
  { id: 6, title: "Super Star", start: 100000 },
  { id: 5, title: "Star", start: 400 },
  { id: 2, title: "Diamond", start: 200 },
  { id: 3, title: "Silver", start: 100 },
  { id: 4, title: "Gold", start: 0 },
];
