import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi"; // Import React Icons

// Assuming these are image imports

import { navLinks } from "../constants";
import { hoverVariant } from "../variants";
import { logo } from "../assets/logos";

// Define types for navLinks
interface SubNavItem {
  id: string;
  title: string;
}

interface NavItem {
  id: string;
  title: string;
  hasChildren?: boolean;
  subNav?: SubNavItem[];
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [toggle, setToggle] = useState<boolean>(false);

  const activeLink: string =
    "font-poppins font-normal cursor-pointer mr-5 hover:text-primaryYello text-primaryYello";
  const normalLink: string =
    "font-poppins font-normal cursor-pointer mr-5 hover:text-primaryYello text-secondaryGray";

  const normalLinkMobile: string =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-primaryYello text-dimWhite";

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <NavLink to="/">
        <motion.img
          variants={hoverVariant}
          whileHover="hover"
          src={logo}
          alt="logo"
          className="w-[100px] h-[100px] object-center"
        />
      </NavLink>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav: NavItem, index: number) => {
          return !nav.hasChildren ? (
            <motion.li
              key={index.toString()}
              whileHover={{
                scale: 1.2,
                originY: 0,
                color: "#FF9810",
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <NavLink
                to={`/${nav.id}`}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <span className="capitalize text-sm">{nav.title}</span>
              </NavLink>
            </motion.li>
          ) : (
            <motion.li key={index.toString()}>
              <NavLink
                to={`/${nav.id}`}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <Menu as="div" className="relative inline-block text-left z-50">
                  <Menu.Button className="flex gap-1 items-center">
                    <span className="capitalize h-[100%] w-[100%] text-sm">
                      {nav.title}
                    </span>
                    <HiChevronDown className="h-5 w-5" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-primaryYello divide-y divide-gray-100 focus:outline-none">
                      <div className="py-1">
                        {nav.subNav?.map(
                          (subNav: SubNavItem, subIndex: number) => (
                            <Menu.Item key={subIndex.toString()}>
                              {({ active }) => (
                                <NavLink
                                  to={`/${subNav.id}`}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-white",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {subNav.title}
                                </NavLink>
                              )}
                            </Menu.Item>
                          )
                        )}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </NavLink>
            </motion.li>
          );
        })}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <HiX
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <HiMenu
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
            {navLinks.map((nav: NavItem, index: number) => {
              return nav.hasChildren ? (
                <motion.li key={index.toString()}>
                  <div className="flex items-center">
                    <span className={`capitalize text-sm ${normalLinkMobile}`}>
                      {nav.title}
                    </span>
                    <HiChevronDown className="ml-1 h-5 w-5" />
                  </div>
                  {nav.subNav && (
                    <ul className="ml-3 list-none flex justify-end items-start flex-1 flex-col gap-3">
                      {nav.subNav.map(
                        (subNav: SubNavItem, subIndex: number) => (
                          <li
                            key={subIndex.toString()}
                            onClick={() => {
                              setActive(subNav.title);
                              setToggle(!toggle);
                            }}
                          >
                            <NavLink
                              to={`/${subNav.id}`}
                              className={({ isActive }) =>
                                isActive ? activeLink : normalLinkMobile
                              }
                            >
                              <span className="capitalize text-sm">
                                {subNav.title}
                              </span>
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </motion.li>
              ) : (
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    originY: 0,
                    color: "#FF9810",
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
                  key={nav.id}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <NavLink
                    to={`/${nav.id}`}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLinkMobile
                    }
                  >
                    <span className="capitalize text-sm">{nav.title}</span>
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
