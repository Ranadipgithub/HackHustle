"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold gradient-text"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            HackHustle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              Register Now
            </Button>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute w-full h-0.5 bg-primary rounded-full"
                style={{ top: "0%" }}
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-primary rounded-full"
                style={{ top: "50%" }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-primary rounded-full"
                style={{ top: "100%" }}
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavLinks mobile setIsOpen={setIsOpen} />
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLinks({
  mobile = false,
  setIsOpen = () => {},
}: {
  mobile?: boolean;
  setIsOpen?: (value: boolean) => void;
}) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#topics", label: "Topics" },
    { href: "#timeline", label: "Timeline" },
    { href: "#prizes", label: "Prizes" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    if (mobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          initial={mobile ? { opacity: 0, x: -20 } : false}
          animate={mobile ? { opacity: 1, x: 0 } : false}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={link.href}
            className={`text-md hover:text-primary transition-colors ${
              mobile ? "block py-2" : ""
            }`}
            onClick={handleScroll}
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </>
  );
}
