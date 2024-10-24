
import Cover from "../Shared/Cover";
import CategoryTitle from "../../Components/CategoryTitle";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ coverImg, coverTitle, cateSub, cateMain, items }) => {
  return (
    <div>
      <Cover img={coverImg} title={coverTitle} />
      {(cateSub || cateMain) && (
        <CategoryTitle subtitle={cateSub} title={cateMain} />
      )}
      <div className="grid lg:grid-cols-2 gap-4 p-8 mt-5">
        {items.map((item) => (
          <MenuItem
            key={item._id}
            img={item.image}
            title={item.name}
            price={item.price}
            recipe={item.recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
