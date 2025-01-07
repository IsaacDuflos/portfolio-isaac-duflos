"use client";
import { UserGroupIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import {useState} from "react";

const links = [
    { name: 'Accueil', href: '/', icon: HomeIcon },
    { name: 'Projets', href: '/projects', icon: HomeIcon },
    { name: 'Contact', href: '/contact', icon: UserGroupIcon },
    { name: 'A propos', href: '/about', icon: UserGroupIcon },
];

export default function Navbar({ isVisible }: { isVisible: boolean }) {
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    return (
        <nav className={clsx('navbar', { 'visible': isVisible })}>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="win95-button"
                    >

                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}