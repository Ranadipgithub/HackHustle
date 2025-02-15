"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import { timeline } from "../public/timeline";

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
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
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Event Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mark your calendar and get ready for an exciting journey of
            innovation and creativity.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={ref}>
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 w-1 h-full origin-top bg-gradient-to-b from-primary to-secondary"
          />
          {timeline.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              <motion.div
                className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-primary"
                whileInView={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 0.5 }}
              />

              <Card className="bg-black/50 border-white/10 hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-2xl">{event.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {event.date}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
