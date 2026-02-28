"use client";
import { motion } from "framer-motion";

export default function FadeInItem({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
