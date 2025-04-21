"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/80 dark:from-primary/5 dark:via-background dark:to-background/90" />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I&apos;m</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Ayush Solanki</h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Full Stack Web Developer | Expert in MERN Stack and Zoho Tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-center mb-10"
        >
          <p className="text-lg text-foreground/70">
            I build modern, responsive web applications with cutting-edge technologies. Passionate about creating
            seamless user experiences and solving complex problems through code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="px-8">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <Link href="#about">
              <Button variant="ghost" size="icon" aria-label="Scroll Down">
                <ArrowDown size={24} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
