import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item, role }: any) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item
          ?.filter((item) => item.permission === role)
          .map((item: any, index: number) => (
            <li key={index}>
              <Link
                href={item.route}
                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:text-black  ${
                  pathname === item.route ? "text-black" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
