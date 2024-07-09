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
  { id: 1, title: "Gold", start: 0, end: 100 },
  { id: 2, title: "Silver", start: 101, end: 200 },
  { id: 3, title: "Diamond", start: 201, end: 300 },
  { id: 4, title: "Star", start: 301, end: 400 },
  { id: 4, title: "Bokon nane khomeyni", start: 1001, end: 2000 },
  { id: 4, title: "Bokon nane khamenei", start: 2001, end: 3000 },
];

export const adminsData = [
  { id: 1, email: "artin@gmail.com", code: "0820", tokens: 12345666 },
  { id: 2, email: "amir@gmail.com", code: "0820", tokens: 200 },
];
