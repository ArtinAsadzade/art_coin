import { ClipboardIcon, FireIcon } from "@heroicons/react/24/outline";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import TaskItem from "./TaskItem";
import { tasksCategory } from "../../../data/Data";

export default function HotTasks({ data }) {
  const draggScroll = useRef();
  const { events } = useDraggable(draggScroll);

  return (
    <div>
      <div className="flex flex-col gap-1 py-4">
        <h2 className="flex items-center text-secondary gap-1 font-extrabold px-5 text-xl">
          Hot Tasks <FireIcon className="w-8" />
        </h2>
        <div className="flex items-center w-full gap-3 flex-shrink-0 overflow-x-auto px-3" {...events} ref={draggScroll}>
          {data?.missions?.slice(0, 5).map((item) => item.missionType === "visit" && <TaskItem item={item} key={item.id} />)}
        </div>
      </div>
      <div>
        <h2 className="flex items-center text-secondary gap-1 font-extrabold px-5 text-xl">
          Tasks <ClipboardIcon className="w-6" />
        </h2>
        <div>{/* <div className="w-full border-b-[2px] border-secondary pb-1">{tasksCategory.map}</div> */}</div>
      </div>
    </div>
  );
}
