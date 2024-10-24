
import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import SoupsImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";
import CategoryTitle from "../../Components/CategoryTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const Soups = menu.filter((item) => item.category === "Soups");
  //   console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro | Our Menu</title>
      </Helmet>
      {/* offered section */}
      <Cover img={menuImg} title={"our menu"} />
      <CategoryTitle subtitle={"Don't miss"} title={"TODAY'S OFFER"} />
      <div className="grid lg:grid-cols-2 gap-4 p-8 mt-5">
        {offered.map((item) => (
          <MenuItem
            key={item._id}
            img={item.image}
            title={item.name}
            price={item.price}
            recipe={item.recipe}
          />
        ))}
      </div>
      {/* DESSERTS section */}
      <MenuCategory
        coverImg={pizzaImg}
        coverTitle={"desserts"}
        items={dessert}
      />
      {/* PIZZA section */}
      <MenuCategory coverImg={dessertImg}
       coverTitle={"pizza"}
      items={pizza} />

      {/* Soups section */}
      <MenuCategory
        coverImg={SoupsImg}
        coverTitle={"Soups"}
        items={Soups}
      />
    </div>
  );
};

export default Menu;
