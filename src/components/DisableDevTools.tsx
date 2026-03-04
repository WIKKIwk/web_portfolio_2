"use client";

import { useEffect } from "react";

export default function DisableDevTools() {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "F12" || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }

            const ctrlKey = e.ctrlKey || e.metaKey;
            const shiftKey = e.shiftKey;

            if (ctrlKey && shiftKey && (e.key === "I" || e.key === "i")) {
                e.preventDefault(); return false;
            }
            if (ctrlKey && shiftKey && (e.key === "J" || e.key === "j")) {
                e.preventDefault(); return false;
            }
            if (ctrlKey && (e.key === "U" || e.key === "u")) {
                e.preventDefault(); return false;
            }
            if (ctrlKey && shiftKey && (e.key === "C" || e.key === "c")) {
                e.preventDefault(); return false;
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null;
}
