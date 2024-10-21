'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/button';

import styles from './navigation-top.module.css';

import { useState } from "react";

import { config } from '@/config';

interface NavigationTopProperties {
    className?: string
}

export const NavigationTop = ({ className  = "" } : NavigationTopProperties) => {
    const [isOpen, setOpen] = useState(false);
    let navMenuItems = config.navigationMenu;

    function toggleOpen() {
        setOpen(!isOpen);
    }
    return (
        <nav className={ "flex justify-center " + styles.nav + " " + className}>
            <div className= {"container gap-8 py-5 px-5 lg:px-8 xl:px-0 flex flex-row justify-between items-center"}>
                <Link href={"/"} className="logo">
                    <Image src={"/vervetto-logo.svg"} width={34} height={34} alt="V."/>
                </Link>
                <div className={"flex flex-col lg:flex-row grow justify-between items-center h-full " + styles.navWrapper + " " + (isOpen ? styles.open : "") }>
                    <ul className={ "list-none flex flex-col lg:flex-row flex-wrap items-center lg:gap-4 hidden lg:flex" }>
                        {
                            navMenuItems.map((item, index) => {
                                if(!item.hasChild) {
                                    return (
                                        <li key={index} className={styles.navItem + " lg:hover:bg-black/10 py-5 lg:py-1.5 pl-0 lg:px-4 rounded-md border-b border-gray-200 lg:border-0 last:border-0"}>
                                            <Link href={item.link}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className={styles.hasChild + " lg:hover:bg-black/10 py-5 lg:py-1.5 pl-0 lg:pl-4 pr-5 rounded-md border-b border-gray-200 lg:border-0 last:border-0"}>
                                            <Link href={"#"}>{item.text}</Link>
                                            <ul className={styles.childNav + " absolute min-w-max bg-white rounded-b-md shadow px-1.5 py-2.5"}>
                                                {item.children.map((childItem, childIndex) => {
                                                    return (
                                                        <li key={"child-item" + childIndex} className={ styles.navItem + " min-w-40 rounded-md py-2 px-4 hover:bg-gray-100"}>
                                                            <Link href={childItem.link} className="w-full flex">{childItem.text}</Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                        
                                    );
                                    
                                }
                            })
                        }
                    </ul>
                    <div className="border-t border-gray-200 lg:border-0 pt-5 lg:pt-0 gap-4 flex flex-col lg:flex-row">
                        <Button className="hidden lg:flex text-sm md:text-base py-2 px-4 md:px-5 lg:px-8 text-center justify-center" type="button" href={"/signup"}>Get Started!</Button>
                        <Button className="hidden lg:flex text-sm md:text-base py-2 px-4 md:px-5 lg:px-8 text-center justify-center" type="button" href={"/signup"}>Get Started!</Button>
                    </div>
                </div>
                <button className={ "hamburger hamburger--spin flex lg:hidden p-0 " + (isOpen ? "is-active" : "") } type="button" onClick={toggleOpen}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button> 
                
            </div>
        </nav>
    );
}