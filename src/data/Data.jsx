import { FireIcon, HomeIcon, PresentationChartBarIcon, RectangleGroupIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const bannedOSListData = ["Mac OS", "Linux", "Windows"];

export const navData = [
  { id: 1, title: "Ref", icon: <UserGroupIcon className="w-8" />, func: "" },
  { id: 2, title: "Task", icon: <RectangleGroupIcon className="w-8" />, func: "" },
  { id: 3, title: "Home", icon: <HomeIcon className="w-8" />, func: "" },
  { id: 4, title: "Boost", icon: <FireIcon className="w-8" />, func: "" },
  { id: 5, title: "Status", icon: <PresentationChartBarIcon className="w-8" />, func: "" },
];

export const ranksData = [
  { id: 1, title: "Star", start: 400 },
  { id: 2, title: "Diamond", start: 200 },
  { id: 3, title: "Silver", start: 100 },
  { id: 4, title: "Gold", start: 0 },
];

export const adminsData = [
  { id: 1, email: "artin@gmail.com", code: "0820", tokens: 12345666 },
  { id: 2, email: "amir@gmail.com", code: "0820", tokens: 200 },
];
