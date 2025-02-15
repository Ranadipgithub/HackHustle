"use client";

import { motion, useScroll } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import { topics } from "@/public/topics";

export default function Topics() {
  const ref = useRef(null);
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="topics"
      ref={ref}
      className="py-20 bg-black/50 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--secondary) 0%, transparent 50%)",
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
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Hackathon Topics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from a variety of cutting-edge technology tracks to showcase
            your skills and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-black/50 border-white/10 hover:border-primary/50 transition-all">
                <CardHeader className="items-center md:items-start text-center md:text-left">
                  <topic.icon className="w-8 h-8 mb-2 text-primary mx-auto md:mx-0" />
                  <CardTitle className="text-2xl text-center md:text-left">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center md:text-left">
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

