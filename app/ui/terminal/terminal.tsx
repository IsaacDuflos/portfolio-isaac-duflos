"use client";

import { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState<string[]>([]);
    const [command, setCommand] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCommand = () => {
        setHistory([...history, command]);

        // Exemple de redirection
        if (command === 'about') {
            window.location.href = '/about';
        } else if (command === 'projects') {
            window.location.href = '/projects';
        } else if (command === 'contact') {
            window.location.href = '/contact';
        } else {
            setHistory([...history, `Unknown command: ${command}`]);
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
                <div className="terminal" >
                    <div className="history">
                        {history.map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </div>
                    <div id="terminal-input">
                        <span style={{color: 'green'}}>&gt;_</span>
                        <input
                            id="terminal-input"
                            type="text"
                            value={command}
                            onChange={(e) => setCommand(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
        </div>
                );
                };

                export default Terminal;