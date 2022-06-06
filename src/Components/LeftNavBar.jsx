import React from "react";
import { Link } from "react-router-dom";
export default function TopNav({ logo }) {
  return (
    <div className="w-[15%] h-[100vh] bg-black flex flex-col gap-3 sticky top-0 ">
      <img
        src={logo}
        alt="Logo Image"
        className="w-[10em] h-[10em] mx-auto my-3"
      />
      <div className="bg-black h-[100%] flex flex-col ">
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            grid_view
          </span>
          <Link className="text-[1em] text-white" to="/pages/overview">
            Overview
          </Link>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            group
          </span>
          <Link className="text-[1em] text-white" to="/pages/clients">
            Clients
          </Link>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            restaurant
          </span>
          <Link className="text-[1em] text-white" to="/pages/resto">
            Restaurent
          </Link>
        </div>
        <div className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            menu_book
          </span>
          <Link className="text-[1em] text-white" to="/pages/menu">
            Menu
          </Link>
        </div>
        <Link to="/pages/add-client" className="w-[100%] h-[5em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[1.5em] text-white pr-[1em]">
            account_circle
          </span>
          <div className="text-[1em] text-white">add your client</div>
        </Link>
        <div className="h-[8%] w-[100%] flex flex-row justify-evenly items-center bg-white border absolute bottom-0">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook text-black text-[2em]"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram text-[2em]"></i>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <i className="fa-brands fa-twitter text-[2em]"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i className="fa-brands fa-linkedin text-[2em]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
