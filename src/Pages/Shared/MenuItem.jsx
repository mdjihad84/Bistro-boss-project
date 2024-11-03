const MenuItem = ({ img, title, price, recipe }) => {
  return (
    <div className="flex gap-8 h-[104px]">
      {/* image area */}
      <div className="w-[118px] h-[104px] flex-shrink-0">
        <img
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px]"
        />
      </div>
      {/* food area */}
      <div>
        <div className="flex justify-between items-center mb-2 mt-1 text-xs sm:text-[12px] lg:text-[24px]">
          <h1>{title} --------------</h1>
          <p>${price}</p>
        </div>
        <h2 className="lg:text-[18px] text-xs sm:text-[12px]">{recipe}</h2>
      </div>
    </div>
  );
};

export default MenuItem;
