import { GiLovers } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import React from "react";
import { DEFAULE_TITLE } from "@/constants";

const NavMenuItem: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return <li className="mx-4 cursor-pointer">{title}</li>;
};

const menus = [
  { id: 1, title: "主页" },
  { id: 2, title: "游记" },
  { id: 3, title: "商城" },
  { id: 4, title: "关于我们" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 font-bold text-slate-800">
      <div className="flex items-center cursor-pointer">
        <div className="text-white bg-black p-2 rounded-full">
            <GiLovers fontSize={18}/>
        </div>
        <span className="ml-2 text-xl">{DEFAULE_TITLE}</span>
      </div>

      <div className="pr-[200px]">
        <ul className="flex">
          {menus.map(({ id, title }) => (
            <NavMenuItem title={title} key={id} />
          ))}
        </ul>
      </div>

      <div className="cursor-pointer">
        <AiOutlineShareAlt fontSize={18}/>
      </div>
    </nav>
  );
}
