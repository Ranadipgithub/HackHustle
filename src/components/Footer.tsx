"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold gradient-text">HackHustle</h3>
            <p className="text-muted-foreground">
              Join us for 24 hours of innovation, collaboration, and creative
              problem-solving.
            </p>
          </motion.div>

          {/* Quick Links */}
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

          {/* Follow Us */}
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

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h4 className="font-bold">Address</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div className="text-muted-foreground text-sm">
                  Mahatma Gandhi Rd, A-Zone, Durgapur <br />
                  Durgapur - 713209 <br />
                  West Bengal, India
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <a
                  href="mailto:info@hackhustle.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@hackhustle.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <a
                  href="tel:+919883862688"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 9883862688
                </a>
              </div>
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
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by IEEE SB NITD
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
