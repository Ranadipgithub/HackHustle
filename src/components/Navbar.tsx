"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold gradient-text"
          >
            HackHustle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-md"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-primary" />
            ) : (
              <Menu className="text-primary" />
            )}
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
            viewport={{ once: false }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
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

    if (mobile) {
      setIsOpen(false);
      setTimeout(() => {
        elem?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-md hover:text-primary transition-colors ${
            mobile ? "block py-2" : ""
          }`}
          onClick={handleScroll}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
