import {pages} from '../../../utilities/Lists'
import ItemNavbar from "./ItemNavbar";
import Link from "next/link";
import React from "react";
import Logo from './Logo'
import { styles } from '@/utilities/styles/styles';

 const Navbar = () => {
  return (
    <>
    <div className={`${styles.custom_section}`}>
      <nav className={`${styles.normalFlex} w-100 justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 h-50`}>
        <div>
          <Logo/>
        </div>
        <div className="flex justify-between gap-10">
          {pages.map((item) =>(
            <ItemNavbar key={`navbar-key`} itemInfo={item}/>
          ))}
        </div>
        <div className={`${styles.button} hover:bg-[#fff] hover:text-[#000]`}>
          <Link href={"/"}>Sign up</Link>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Navbar