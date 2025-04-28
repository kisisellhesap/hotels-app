import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { getPlace } from "../../utils/services";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Return from "../../components/return";
import Images from "./images";
import Info from "./info";
import Overview from "./overview";
import Button from "./button";

const Detail: FC = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  if (isLoading)
    return (
      <div className="container">
        <Return />
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="container">
        <Return />
        <Error info={error} refetch={refetch} />
      </div>
    );

  if (!data) return;

  return (
    <div className="container">
      <Return />
      <Images image={data.image_url} />

      <Info place={data} />

      <Overview place={data} />

      <Button id={id as string } />
    </div>
  );
};

export default Detail;
