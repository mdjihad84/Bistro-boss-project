
import CategoryTitle from "../../../Components/CategoryTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);

  // const limitedMenu = menu.slice(0, 6);
  // //   console.log(menu);
  // console.log(limitedMenu);

  return (
    <div>
      <CategoryTitle subtitle={"Check it out"} title={"FROM OUR MENU"} />
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
