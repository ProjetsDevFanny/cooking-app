import React from "react";
import Title from "../components/Title";
import Search from "../components/Search";
import Cardcontainer from "../components/Cardcontainer";

const Home = ({ meals, loading }) => {
  return (
    <div>
      <Title />
      <Search />
      <Cardcontainer meals={meals} />
    </div>
  );
};

export default Home;
