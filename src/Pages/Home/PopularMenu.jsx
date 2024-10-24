
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle subtitle={"Check it out"} title={"FROM OUR MENU"} />
      <div className="grid lg:grid-cols-2 gap-4">
        {popularItem.map((item) => (
          <MenuItem
            key={item._id}
            img={item.image}
            title={item.name}
            price={item.price}
            recipe={item.recipe}
          />
        ))}
      </div>
      <div className="text-center my-4">
        <button className="py-[20px] px-[30px] rounded-[8px] border-b-[3px]  border-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};
export default PopularMenu;
