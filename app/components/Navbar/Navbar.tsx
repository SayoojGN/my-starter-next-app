"use client";
import React from "react";
import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";
import Flyoutlink from "../Flyoutlink/Flyoutlink";

const Navbar = () => {
  return (
    <div className="bg-white text-black h-16 w-screen flex justify-between items-center px-6 border-b border-black">
      <Link href="/" className="h-8 w-24 logo"></Link>
      <div className="flex w-1/3 justify-evenly items-center text-gray-500 h-full">
        <div className="option-nv">
          <Flyoutlink href="/cars" FlyoutContent={CollectionFlyoutComponent}>
            Collection
          </Flyoutlink>
        </div>
        <div className="option-nv">
          <Link href="/about">About</Link>
        </div>
        <div className="option-nv">
          <Link href="/contact">Contact</Link>
        </div>
        <button className="option-nv">
          <Link href="/login">Login</Link>
        </button>
        <button className="bg-yellow-400 p-2.5 rounded-lg hover:bg-yellow-500 option-nv">
          <Link href="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

// const Flyoutlink = ({ children, href, FlyoutContent }) => {
//   const [Open, setOpen] = useState(false);

//   const showFlyout = Open && FlyoutContent;;

//   return (
//     <div
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       className="group relative h-fit w-fit"
//     >
//       <a href={href} className="relative">
//         {children}
//         <span
//           style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
//           className="absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left rounded-full bg-black transition-transform duration-300 ease-out"
//         />
//       </a>
//       {showFlyout && (
//         <div className="absolute pt-10 left-1/2 -translate-x-1/2">
//           <FlyoutContent />
//         </div>
//       )}
//     </div>
//   );
// };

const CollectionFlyoutComponent = () => {
  return <div className="p-4 bg-white flex justify-between align-middle textCustom w-72">
    <div className="h-full w-1/2 flex-col">
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconHatch"></div>
        <div>HatchBack</div>
      </Link>
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconCoupe"></div>
        <div>Coupe</div>
      </Link>
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconSuper"></div>
        <div>Super car</div>
      </Link>
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconSedan"></div>
        <div>Sedan</div>
      </Link>
    </div>
    <div className="h-full w-1/2 flex-col">
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconPickup"></div>
        <div>Pickup</div>
      </Link>
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconSUV"></div>
        <div>SUV</div>
      </Link>
      <Link href="/cars" className="w-full h-1/4 centerInside">
        <div className="iconSize iconCUV"></div>
        <div>CUV</div>
      </Link>
    </div>
  </div>;
};

export default Navbar;
