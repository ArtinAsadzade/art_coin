import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { home_url } from "../router/Urls";

export default function PageNotFound() {
  return (
    <div className="w-full h-svh bg-primary flex items-center justify-center px-3">
      <div className="w-full bg-secondary text-center p-6 rounded-md shadow-lg flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold text-primary">Page Not Found</h2>
        <h2 className="text-4xl font-bold text-primary">404</h2>
        <Link to={home_url} className="w-2/3 bg-primary text-secondary font-bold p-2 rounded-md flex items-center justify-center gap-2">
          Back To Home <ArrowUturnLeftIcon className="w-5" />
        </Link>
      </div>
    </div>
  );
}
