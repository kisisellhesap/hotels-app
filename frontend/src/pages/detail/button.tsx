import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { deletePlace } from "../../utils/services";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}
const Button: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ["delete"],
    mutationFn: () => deletePlace(id),

    onSuccess: () => {
      alert("Place deleted successfully!");
      navigate("/");
    },

    onError: () => {
      alert("Place not found!");
    },
  });
  return (
    <div className="flex justify-end my-5">
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="border border-zinc-300 py-1 px-4 rounded-md transition hover:bg-zinc-100 cursor-pointer"
      >
        Kaldır
      </button>
    </div>
  );
};

export default Button;
