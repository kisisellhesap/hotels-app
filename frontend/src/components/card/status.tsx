import { FC } from "react";
import { CgUnavailable as NotOk } from "react-icons/cg";
import { MdEventAvailable as Ok } from "react-icons/md";

interface Props {
  data: boolean;
  expand?: boolean;
}
const Status: FC<Props> = ({ data, expand }) => {
  return (
    <div
      className={`flex items-center gap-4 border border-zinc-300 p-2 rounded-md ${
        data ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {data ? (
        <Ok className="text-xl text-green-700" />
      ) : (
        <NotOk className="text-xl text-red-700" />
      )}
      {expand && (
        <p className="font-bold">
          {data ? "Şuan Konaklanabilir" : "Konaklama için müsait değil"}
        </p>
      )}
      Status
    </div>
  );
};

export default Status;
