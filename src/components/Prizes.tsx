"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prizes } from "../public/prizes";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Prizes & Rewards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Win amazing prizes and get recognized for your innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Card
                className={`bg-black/50 border-white/10 ${
                  index === 0 ? "border-primary/50" : ""
                }`}
              >
                <CardHeader>
                  <prize.icon
                    className={`w-12 h-12 mb-4 ${
                      index === 0 ? "text-primary" : "text-secondary"
                    }`}
                  />
                  <CardTitle>{prize.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4 gradient-text">
                    {prize.amount}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    {prize.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

