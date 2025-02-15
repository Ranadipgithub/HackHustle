"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 0 25px -3px rgba(99, 102, 241, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br rounded-full shadow-2xl backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <div className="relative">
            <HiArrowUp className="w-6 h-6 text-white transform transition-transform duration-300 hover:scale-125" />
            <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
