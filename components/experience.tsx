"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Zoho",
    period: "Aug 2024 - Present",
    description:
      "Working on HRMS & LMS projects. Developing and maintaining web applications using Zoho tools and technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["Zoho People", "Zoho Creator", "Zoho Learn", "JavaScript", "HTML/CSS"],
  },
  {
    title: "SDE Intern",
    company: "Webllisto",
    period: "Feb 2024 - Aug 2024",
    description:
      "Worked on web development projects using the MERN stack. Implemented responsive UI designs and integrated backend APIs. Participated in code reviews and agile development processes.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Founder",
    company: "Apex Allies",
    period: "2023 - Present",
    description:
      "Founded a business automation & tech solutions company. Providing services in web development, business process automation, and digital transformation. Managing client relationships and project delivery.",
    technologies: ["Zoho Tools", "MERN Stack", "Next.js", "Tailwind CSS", "Business Automation"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Experience" subtitle="My professional journey and work experience" />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2 hidden md:block"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item}>
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-end items-start relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-auto md:right-0 top-6 w-4 h-4 rounded-full bg-primary transform translate-x-[-50%] md:translate-x-[50%] hidden md:block"></div>

                    <Card className="w-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>
                        <h4 className="text-lg font-medium mb-1">{exp.company}</h4>
                        <div className="flex items-center gap-2 text-foreground/70 mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-foreground/80 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-muted px-3 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
