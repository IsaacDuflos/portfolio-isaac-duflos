"use client";
import { useState } from 'react';
import Terminal from '../app/ui/terminal/terminal';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../app/ui/navbar/Navbar";

export default function Page() {
    const [isNavbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    return (
        <div id="terminal">
            <Link href="#" className={"home"} onClick={toggleNavbar}>
                <Image src={"/logo_terminal.png"} alt={'logo'} width={150} height={150} />
            </Link>
            <Navbar isVisible={isNavbarVisible} />
            <div id="monitor">
                <Terminal />
            </div>
        </div>
    );
}