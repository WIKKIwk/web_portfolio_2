"use client";

import { useEffect } from "react";

export default function DisableDevTools() {
    useEffect(() => {
        // 1. Sichqonchaning o'ng tugmasini bosishni bloklash (Kontekst menyu)
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // 2. Maxsus klaviatura tugmalari tugmachalarini bloklash (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12 tugmasi bloklash
            if (e.key === "F12" || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }

            const ctrlKey = e.ctrlKey || e.metaKey; // Windows/Linux uchun Ctrl, Mac uchun Cmd
            const shiftKey = e.shiftKey;

            if (ctrlKey && shiftKey && (e.key === "I" || e.key === "i")) {
                // Ctrl + Shift + I (DevTools)
                e.preventDefault();
                return false;
            }

            if (ctrlKey && shiftKey && (e.key === "J" || e.key === "j")) {
                // Ctrl + Shift + J (Console)
                e.preventDefault();
                return false;
            }

            if (ctrlKey && (e.key === "U" || e.key === "u")) {
                // Ctrl + U (View Source)
                e.preventDefault();
                return false;
            }

            if (ctrlKey && shiftKey && (e.key === "C" || e.key === "c")) {
                // Ctrl + Shift + C (Inspect Element)
                e.preventDefault();
                return false;
            }
        };

        // Event listener'larni ulash
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        // Tozalash - agar component o'chirilsa listener'larni ham olib tashlash
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null; // Bu shunchaki orqa fonda ishlaydigan mantiq, ko'rinadigan UI qaytarmaydi
}
