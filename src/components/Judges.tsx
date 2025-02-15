"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { judges } from "@/public/judges";

export default function Judges() {
  return (
    <section id="judges" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Judges & Mentors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished panel of judges and industry expert mentors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <Card className="bg-black/50 border-white/10 overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={judge.image || "/placeholder.svg"}
                    alt={judge.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
                  <p className="text-muted-foreground mb-4">{judge.role}</p>
                  <div className="flex gap-4">
                    <a
                      href={judge.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={judge.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href={judge.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

