"use client";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/ui/navbar/Navbar";

export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isNavbarVisible, setNavbarVisible] = useState(false);
    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
    };
    return <div>
        <div className="header">
            <Link href="#" className="home" onClick={toggleNavbar}>
                <Image src="/logo_terminal_2.png" alt="logo" width={150} height={150}/>
            </Link>
            <Navbar isVisible={isNavbarVisible}/>
        </div>


    <div className={"ascii-art"}>
        <pre>      _____         __             __ </pre>
        <pre>     / ___/  ____ _/ /_____  ___ _/ /_ </pre>
        <pre>    / / __ \/ __ \  __/ __ \/ __/  __/</pre>
        <pre>   / / /_/ / / / / / / /_/ / /__/ /</pre>
        <pre>   \ \____/_/ /_/ /_/_/ /_/\___/ /_</pre>
        <pre>    \____/      \__/           \__/</pre>

        <div className={"contact"}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Envoyer</button>
        </form>
        </div>
        <div className={"reseaux"} style={{display: "flex", justifyContent: "center",margin: "20px"}}>
            <a href="https://github.com/IsaacDuflos">
                <Image src={"/github.png"}
                       alt={"github"}
                       width={50}
                       height={50}
                       style={{ margin: "20px"}}
                />
            </a>
            <a href="https://www.linkedin.com/in/isaac-duflos-8b6580289/">
                <Image src={"/linkedin_logo.png"}
                       alt={"linkedin_logo"}
                       width={50}
                       height={50}
                       style={{ margin: "20px"}}
                />
            </a>
        </div>
        <div className={"Coordonnees"} style={{ display: "flex", justifyContent: "center"}}>
            <p>Mail: <a href="mailto:isaac.duflos@gmail.com">isaac.duflos@gmail.com</a></p>
        </div>

    </div>
    </div>
}