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

            // 3. Zoom klaviatura shortcutlarini bloklash (Ctrl +, Ctrl -, Ctrl 0)
            if (ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0" || e.key === "_")) {
                e.preventDefault();
                return false;
            }
        };

        // 4. Ctrl + mouse wheel zoom bloklash
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
            }
        };

        // 5. Touch pinch-zoom bloklash (mobile/tablet)
        const handleGestureStart = (e: Event) => {
            e.preventDefault();
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("wheel", handleWheel, { passive: false });
        document.addEventListener("gesturestart", handleGestureStart);
        document.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleWheel);
            document.removeEventListener("gesturestart", handleGestureStart);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return null;
}
