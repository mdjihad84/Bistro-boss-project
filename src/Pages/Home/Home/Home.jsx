import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Menu from "../PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";
// import img1 from "../../../assets/menu/salad-bg.jpg";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner />
      <div className="p-8">
        <Category />
        <ChefService />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
