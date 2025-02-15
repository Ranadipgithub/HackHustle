"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold gradient-text">HackHustle</h3>
            <p className="text-muted-foreground">
              Join us for 48 hours of innovation, collaboration, and creative
              problem-solving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#topics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h4 className="font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h4 className="font-bold">Newsletter</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[200px] px-4 py-2 bg-black/50 rounded-md border border-white/10 focus:outline-none focus:border-primary w-full sm:w-auto"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto shrink-0">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} HackHustle. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
