"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { GraduationCap, Briefcase, CastleIcon as ChessKnight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Learn more about my background, education, and interests" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Ayush Solanki"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Web Developer & Business Automation Expert</h3>
            <p className="text-foreground/80 mb-6">
              I&apos;m Ayush Solanki, a passionate Full Stack Web Developer with expertise in MERN Stack and Zoho Tools.
              I enjoy building innovative solutions that solve real-world problems and enhance user experiences.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-foreground/70">
                    MCA from NIT Jamshedpur
                    <br />
                    BCA from DAVV
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Career</h4>
                  <p className="text-foreground/70">
                    Currently working at Zoho (HRMS & LMS projects)
                    <br />
                    Former SDE Intern at Webllisto
                    <br />
                    Founder of Apex Allies – Business Automation & Tech Solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ChessKnight className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Hobbies</h4>
                  <p className="text-foreground/70">
                    Playing chess, exploring new technologies, and building side projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
