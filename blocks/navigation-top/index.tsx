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
            <div className= {"container py-8 px-20 flex flex-row justify-between items-center"}>
                <Link href={"/"} className="logo">
                    <Image src={"/vervetto-logo.svg"} width={34} height={34} alt="V."/>
                </Link>
                <ul className={ "list-none flex-wrap items-center justify-center gap-8 hidden md:flex " + (isOpen ? styles.open : "") }>
                    {
                        navMenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.link}>
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className="flex items-center">
                    <Button className="text-xs sm:text-sm md:text-base py-2 px-4 block" type="button" href={"/pricing"}>Get Started!</Button>
                    <button className={ "hamburger hamburger--spin flex md:hidden " + (isOpen ? "is-active" : "") } type="button" onClick={toggleOpen}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button> 
                </div>
                
            </div>
        </nav>
    );
}