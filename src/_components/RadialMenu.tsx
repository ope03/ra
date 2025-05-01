'use client'

import { useState } from "react"
interface RadialMenuProps {
    button?: React.ReactNode;
}

export default function RadialMenu({ button }: RadialMenuProps) {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: 'Photo', angle: 0 },
        { label: 'Art', angle: 90 },
        { label: 'About', angle: 180 },
        { label: 'Contact', angle: 270 },
    ];

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                {/* Menu items */}
                {menuItems.map((item, index) => {
                    const radius = open ? 80 : 0;
                    const angleInRadians = (item.angle * Math.PI) / 180;
                    const x = radius * Math.cos(angleInRadians);
                    const y = radius * Math.sin(angleInRadians);

                    {/*individual little buttons*/ }
                    return (
                        <button
                            key={index}
                            className="absolute w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-500"
                            style={{
                                transform: `translate(${x}px, ${-y}px)`,
                                opacity: open ? 1 : 0,
                            }}
                        >
                            {item.label}
                        </button>
                    );
                })}

                {/* Central button */}
                {button ? (
                    <div onClick={() => setOpen(!open)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {button}
                    </div>
                ) : (
                    <button
                        onClick={() => setOpen(!open)}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
                    >
                        ☰
                    </button>
                )}
            </div>
        </div>
    );
}
