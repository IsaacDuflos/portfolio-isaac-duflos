"use client";

import { useState, useEffect, useRef } from "react";

const Terminal = () => {
    const [history, setHistory] = useState<string[]>([]);
    const [command, setCommand] = useState('');
    const [currentTyping, setCurrentTyping] = useState(''); // New state for typed characters
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        const messages = [
            "..................................",
            "Bienvenue sur le portfolio de Isaac Duflos.",
            "Etudiant en informatique à l'IUT de Lens.",
            "Tapez 'about', 'projets' ou 'contact' pour plus d'informations.",

        ];
        let messageIndex = 0;
        let charIndex = 0;

        const typeText = () => {
            if (messageIndex < messages.length) {
                if (charIndex < messages[messageIndex].length) {
                    setCurrentTyping((prev) => prev + messages[messageIndex][charIndex]);
                    charIndex++;
                    setTimeout(typeText, 10); // Adjust typing speed here
                } else {
                    setHistory((prev) => [...prev, messages[messageIndex]]);
                    setCurrentTyping(''); // Reset typed characters
                    charIndex = 0;
                    messageIndex++;
                    setTimeout(typeText, 1000); // Delay before typing the next message
                }
            }
        };

        typeText();
    }, []);

    const handleCommand = () => {
        setHistory([...history, `> ${command}`]); // Add the command to history
        // Example of redirection
        if (command === "about") {
            window.location.href = "/about";
        } else if (command === "projets") {
            window.location.href = "/projects";
        } else if (command === "contact") {
            window.location.href = "/contact";
        } else {
            setHistory((prev) => [...prev, `Unknown command: ${command}`]);
        }
        setCommand('');
    };

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div id="screen" onClick={handleClick}>
            <div id="crt">
                <div className="scanline"></div>
                <div className="terminal">
                    <div className="history">
                        {history.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                        <div>{currentTyping}</div> {/* Show typed characters */}
                    </div>
                    <div id="terminal-input">
                        <span style={{ color: "green" }}>&gt;_</span>
                        <input
                            id="terminal-input"
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
