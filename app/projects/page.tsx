"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/app/ui/navbar/Navbar";
import ProjectList from "@/app/ui/projects/projectList";

type Project = {
    id: number;
    name: string;
    link: string;
    image: string;
    description?: string;
};

export default function Page() {
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    const projects: Project[] = [
        {
            id: 1,
            name: 'FLATCRAFT',
            link: 'https://www.example.com',
            image: '/bezel.png',
        },
        {
            id: 2,
            name: 'BOMBERMAN',
            link: 'https://www.example.com',
            image: '/bezel.png',
        },
        {
            id: 3,
            name: 'JO 2024',
            link: 'https://www.example.com',
            image: '/bezel.png',
        },
        {
            id: 4,
            name: 'POKEDEX',
            link: 'https://www.example.com',
            image: '/bezel.png',
            description: 'This is the third project.',
        },
        {
            id: 5,
            name: 'PORTFOLIO (WIP)',
            link: 'https://www.example.com',
            image: '/bezel.png',
            description: 'This is the third project.',
        },
        {
            id: 6,
            name: 'RTX',
            link: 'https://www.example.com',
            image: '/bezel.png',
            description: 'Implémentation d\'un lanceur de rayon en java permettant de générer des rendus 3D avec la gestion des ombres et des reflets. Des calculs d\'intersections entre les objets sont effectués afin d\'afficher correctement les ombres et les formes ou encore d\'autres calculs pour les couleurs. ' +
                'Un projet réalisé en groupe de avec l\'aide de Baptiste Toilliez  et Nathan Cartegnie .',
        },

    ];

    return (
        <div>
            <div className="header">
                <Link href="#" className="home" onClick={toggleNavbar}>
                    <Image src="/logo_terminal_2.png" alt="logo" width={150} height={150} />
                </Link>
                <Navbar isVisible={isNavbarVisible} />
            </div>
            <div id="monitor">
                <ProjectList projects={projects} />
            </div>
        </div>
    );
}