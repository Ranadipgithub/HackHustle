"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Mahatma Gandhi Rd, A-Zone, Durgapur
                  <br />
                  Durgapur - 713209
                  <br />
                  West Bengal, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@hackhustle.com
                  <br />
                  support@hackhustle.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +91 9883862688
                  <br />
                  +91 7376554328
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-black/50" />
              <Input placeholder="Email" type="email" className="bg-black/50" />
            </div>
            <Input placeholder="Subject" className="bg-black/50" />
            <Textarea
              placeholder="Your message"
              className="min-h-[150px] bg-black/50"
            />
            <Button className="w-full">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
