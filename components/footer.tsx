"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="text-2xl font-bold">
              Ayush<span className="text-primary">.dev</span>
            </Link>
            <p className="text-foreground/70 mt-2">Full Stack Web Developer | MERN Stack & Zoho Tools Expert</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label="Back to top">
              <Link href="#home">
                <ArrowUp className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-foreground/60">© {new Date().getFullYear()} Ayush Solanki. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
