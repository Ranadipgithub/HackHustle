"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { judges } from "../public/judges";

export default function Judges() {
  return (
    <section id="judges" className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)",
          opacity: 0.1,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Judges & Mentors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet our distinguished panel of judges and industry expert mentors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mx-auto max-w-[240px] glow-container">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-lighten" />
                <div className="absolute inset-0 rounded-full shadow-xl shadow-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={judge.image || "/placeholder.svg"}
                  alt={judge.name}
                  layout="fill"
                  objectFit="cover"
                  className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="text-center mt-6 relative">
                <h3 className="text-xl font-bold mb-2">{judge.name}</h3>
                <p className="text-muted-foreground mb-4">{judge.role}</p>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FiInstagram, href: judge.instagram },
                    { icon: FiLinkedin, href: judge.linkedin },
                    { icon: FiGithub, href: judge.github },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
