import React from "react";
import Title from "../components/Title";
import Search from "../components/Search";
import Cardcontainer from "../components/Cardcontainer";

const Home = ({ meals, getData, isLoading }) => {
  return (
    <div>
      <Title />
      <Search getData={getData} />
      <Cardcontainer meals={meals} isLoading={isLoading} />
    </div>
  );
};

export default Home;
