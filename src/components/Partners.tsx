"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partners } from "../public/partners";

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Supported by leading technology companies and organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="flex items-center justify-center p-6 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={60}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

