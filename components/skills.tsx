"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Settings } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express", "MongoDB", "REST API", "GraphQL"],
  },
  {
    name: "Programming",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "TypeScript", "C++"],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    name: "Zoho Tools",
    icon: <Settings className="h-6 w-6 text-primary" />,
    skills: ["Zoho People", "Zoho Creator", "Zoho Learn", "Zoho FSM", "Zoho Analytics"],
  },
  {
    name: "Others",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub", "Responsive Design", "SEO", "UI/UX"],
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

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-muted px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
