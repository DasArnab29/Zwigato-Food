import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Header() {
  return (
    <div className="shadow-lg">
      <div className="mx-40 p-3">
        <div className="flex justify-between items-center">
          <div className="w-2/6">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
              className="w-28"
            ></img>
          </div>
          <div className="w-4/6">
            <ul className="flex items-center justify-evenly">
              <li className="hover:text-orange-500  cursor-pointer">
                <SearchIcon /> Search
              </li>
              <li className="hover:text-orange-500  cursor-pointer">
                <DiscountOutlinedIcon /> Offer
              </li>
              <li className="hover:text-orange-500  cursor-pointer">
                <HelpOutlineOutlinedIcon /> Help
              </li>
              <li className="hover:text-orange-500  cursor-pointer">
                <PersonOutlineOutlinedIcon /> Sign In
              </li>
              <li className="hover:text-orange-500  cursor-pointer">
                <ShoppingCartOutlinedIcon />
                Cart
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
