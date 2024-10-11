import { useState } from "react";
// react icons

import { GoSidebarCollapse } from "react-icons/go";
import Items from "./Items";
import Profile from "./Profile";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  return (
    <aside
      className={`${
        isCollapse && "w-[260px]"
      } bg-white boxShadow rounded-md transition-all duration-300 ease`}
    >
      <div
        className={`mt-5 ${
          isCollapse ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {isCollapse ? (
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">TODO</h2>
            <div className="relative group">
              <GoSidebarCollapse
                className="text-[1.5rem] text-gray-600 cursor-pointer"
                onClick={() => setIsCollapse(false)}
              />

              {/* tooltip */}
              <div
                className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
              >
                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                  Collapse
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h2
            onClick={() => setIsCollapse(!isCollapse)}
            className="text-lg font-bold cursor-pointer"
          >
            TODO
          </h2>
        )}
      </div>
      {/* general section */}
      <div
        className={`mt-6 ${
          isCollapse ? "px-[20px]" : "px-[10px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Sidebar Items */}
        <Items isCollapse={isCollapse} />
      </div>
      {/* profile section */}
      <div className="w-full absolute bottom-[70px]">
        <Profile isCollapse={isCollapse} />
      </div>
    </aside>
  );
};

export default Sidebar;
