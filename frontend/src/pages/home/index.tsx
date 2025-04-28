import { FC } from "react";
import List from "./list";
import Filter from "./filter";
import Hero from "./hero";

const Home: FC = () => {
  return (
    <div className="container my-5">
      <Hero />

      <div className="grid grid-cols-1 log:grid-cols-4 max-lg:mt-10 gap-5 lg:mt-20">
        <Filter />

        <div className="lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
