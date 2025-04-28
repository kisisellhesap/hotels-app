import { FC } from "react";
import { Place } from "../../types";
import Rating from "../../components/card/rating";
import Overview from "./overview";

interface Props {
  place: Place;
}
const Info: FC<Props> = ({ place }) => {
  return (
    <div>
      <div className="flex my-6 justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">{place.name}</h1>
          <p>{place.description}</p>
        </div>
        <div>
          <Rating data={place.rating} expand />
        </div>
      </div>
    </div>
  );
};

export default Info;
