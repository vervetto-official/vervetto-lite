import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/button';

import { config } from '@/config';

export const NavigationTop = () => {
    let navMenuItems = config.navigationMenu;
    return (
        <div className="container py-8 px-20 flex flex-row justify-between">
            <Link href={"/"} className="logo">
                <Image src={"/vervetto-logo.svg"} width={34} height={34} alt="V."/>
            </Link>
            <ul className="list-none flex flex-wrap items-center justify-center gap-8">
                {
                    navMenuItems.map((item, index) => {
                        return (
                            <li>
                                <Link href={item.link}>
                                    {item.text}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <Button type="button" href={"/pricing"}>Get Started!</Button>
        </div>
    );
}