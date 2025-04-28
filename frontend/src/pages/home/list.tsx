import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getPlaces } from "../../utils/services";
import { Place } from "../../types";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [params] = useSearchParams();

  const paramsObj = Object.fromEntries(params.entries());
  const { isLoading, error, data, refetch } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl"> Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader designs="my-20" />
        ) : error ? (
          <Error info={error} refetch={refetch} />
        ) : (
          <div>
            {data?.map((place, i) => (
              <Card place={place} key={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
