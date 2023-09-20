import React, { ReactNode } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
import Logo from "../navbar/Logo";
import { footerLinks, pages, mainProducts } from "@/utilities/Lists";
import ListToRender from "./ListToRender";
import { styles } from "@/utilities/styles/styles";
import { ListToRenderType } from "@/utilities/TypesList";


const Footer = () => {
  return (
    <>
      <div className={`${styles.custom_section} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8  text-white`}>
        <div className={`${styles.normalFlex} justify-around`}>
          <div className="flex flex-col">
            <Logo />
            <div className="mt-5">
              <p className="text-lg">The best services in the world!</p>
              <div className="flex gap-4 mt-2">
                <div className="hover:opacity-20">
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </div>
                <div className="hover:opacity-20">
                  <Link href="/">
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </div>
                <div className="hover:opacity-20">
                  <Link href="/">
                    <AiFillFacebook size={25} />
                  </Link>
                </div>
                <div className="hover:opacity-20">
                  <Link href="/">
                    <AiFillYoutube size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-lg border-y-2">Company</h1>
            {pages.slice(0, 4).map((item:ListToRenderType) => (
              <ListToRender id={item.id} title={item.title} route={item.route} key={item.id}/>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-lg border-y-2">Services</h1>
            {mainProducts.slice(0, 4).map((item:ListToRenderType) => (
              <ListToRender id={item.id} title={item.title} route={item.route} key={item.id}/>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-lg border-y-2">Support</h1>
            {footerLinks.slice(0, 4).map((item:ListToRenderType) => (
              <ListToRender id={item.id} title={item.title} route={item.route} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer