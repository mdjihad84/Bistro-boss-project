
import Cover from "../Shared/Cover";
import shopImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro | Our Shop</title>
      </Helmet>
      <Cover img={shopImg} title={"our shop"} />
      <Tabs>
        <TabList className={`uppercase text-center my-8`}>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {salad.map((item) => (
              <ShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pizza.map((item) => (
              <ShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {soup.map((item) => (
              <ShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dessert.map((item) => (
              <ShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-3 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {drinks.map((item) => (
              <ShopCard key={item._id} items={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
