"use client";
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    { name: 'Projects', href: '/projects', icon: HomeIcon },
    { name: 'Contact', href: '/contact', icon: UserGroupIcon },
];

export default function Navbar({ isVisible }: { isVisible: boolean }) {
    return (
        <nav className={clsx('navbar', { 'visible': isVisible })}>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (

                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}