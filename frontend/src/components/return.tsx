import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FC } from "react";

const Return: FC = () => {
  return (
    <div className="flex">
      <Link
        to={".."}
        className="border border-zinc-500 p-2 rounded-md transtition hover:bg-zinc-100"
      >
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default Return;
