"use client";
import ProjectList from '../ui/projects/projectList';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../ui/navbar/Navbar';

export default function Page() {
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };
    const projects = [
        {
            id: 1,
            name: 'Project 1',
            link: 'https://www.example.com',
            image: '/project1.png',
        },
        {
            id: 2,
            name: 'Project 2',
            link: 'https://www.example.com',
            image: '/bezel.png',
        },
        {
            id: 3,
            name: 'Project 3',
            link: 'https://www.example.com',
            image: '/project3.png',
        },
    ];

    return  <div>
            <Navbar isVisible={isNavbarVisible} />
            <Link href="#" className={"home"} onClick={toggleNavbar}>
                <Image src={"/logo_terminal.png"} alt={'logo'} width={150} height={150} />
            </Link>
            <div id="monitor">
                <ProjectList projects={projects}/> {/* Use the ProjectList component */}
            </div>
        </div>

}