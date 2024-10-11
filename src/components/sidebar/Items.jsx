import Item from "./Item";

const Items = ({ isCollapse }) => {
  return (
    <div className="mt-3 flex flex-col gap-[5px]">
      {/* Single Item */}
      <Item isCollapse={isCollapse} />
      {/* Single Item */}
      <Item isCollapse={isCollapse} />
      {/* Single Item */}
      <Item isCollapse={isCollapse} />
      {/* Single Item */}
      <Item isCollapse={isCollapse} />
    </div>
  );
};

export default Items;
