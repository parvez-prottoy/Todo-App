import { GoHome } from "react-icons/go";

const Item = ({ isCollapse }) => {
  return (
    <div
      className={`${
        isCollapse ? "justify-between" : "justify-center"
      } flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}
    >
      <div className="flex items-center gap-[8px]">
        <GoHome className="text-[1.3rem] text-gray-500" />
        <p
          className={`${
            isCollapse ? "inline" : "hidden"
          } text-[1rem] font-[400] text-gray-500`}
        >
          Home
        </p>
      </div>

      {/* tooltip */}
      <div
        className={`${
          isCollapse ? "hidden" : "inline"
        } absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
      >
        <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
          Home
        </p>
      </div>
    </div>
  );
};

export default Item;
