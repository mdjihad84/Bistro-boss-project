
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Menu from "../PopularMenu/PopularMenu";
import ContactSection from "../ContactSection";
import ShefSection from "../ShefSection";
import Featured from "../Featured";
import Testimonials from "../Testimonials";
import { Helmet } from "react-helmet-async";

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
        <ContactSection/>
        <ShefSection/>
        <Featured/>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
