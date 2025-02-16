"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { useRef } from "react";
import Link from "next/link";
import ieeesb_logo_theme from "@/public/ieeesb_logo_theme.svg";
import ieeeCs from "@/public/ieee-cs-logo.webp"
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen pt-16 relative overflow-hidden flex items-center"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, var(--primary), var(--secondary))",
          opacity: 0.1,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating shapes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: Math.random() * 50 + 10,
            height: Math.random() * 50 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            {/* IEEE Branding */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <Image
                  src={ieeesb_logo_theme}
                  alt="IEEE Student Branch"
                  className="h-16 md:h-24 w-auto" // Smaller on mobile, larger on md+
                />
                <Image
                  src={ieeeCs}
                  alt="IEEE CS Society"
                  className="h-16 md:h-24 w-auto filter invert" // Responsive heights with inversion filter
                />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">
                Presents
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text leading-tight">
              HackHustle 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Code. Create. Conquer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Countdown targetDate="2025-03-15T09:00:00Z" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              Register Now
            </Button>
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
