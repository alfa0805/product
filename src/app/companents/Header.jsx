import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assetc/Logo.png";
import Shape from "../assetc/Shape.svg"
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
  return (
    <header className="border-b-2 border-[#5b595922]">
      <div className="max-w-[1240px] h-[90px] px-5 flex items-center justify-between mx-auto">
        <div className="">
          <Link href="/">
            <div className="relative w-[140px] h-[70px]">
                <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
          </Link>
        </div>
        <form action="" className="w-[50%] flex items-center">
            <input type="text" className=" border border-gray-400 w-full h-[40px] rounded-l-md" />
            <div className="w-[40px] h-[40px] flex items-center justify-center  bg-blue-800 border border-blue-800 rounded-r-md">
                <div className="relative w-[25px] h-[25px]">
                    <Image src={Shape} alt="shape" fill className="object-contain"/>
                </div>
            </div>
        </form>
        <div className="w-[70px] flex items-center justify-between">
            <Link href="/link">
                <BsSuitHeart className="text-[27px] text-bold text-red-600"/>
            </Link>
            <Link href="/card">
                <MdOutlineShoppingCart className="text-3xl text-blue-600"/>
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
