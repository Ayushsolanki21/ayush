"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SHPortal",
    description:
      "A student helping platform built with the MERN stack. Connects students with mentors and provides resources for academic growth.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Foody",
    description:
      "A food ordering application built with the MERN stack. Features include restaurant listings, menu browsing, cart management, and order tracking.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Chai Or Baate",
    description:
      "A café app with a unique scratch card feature. Users can win discounts and free items through interactive scratch cards.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Apex Allies",
    description:
      "Business automation agency website showcasing services, case studies, and client testimonials. Features a custom CMS for content management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Tailwind CSS", "Zoho Creator", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="Some of my recent work and personal projects" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="default" size="sm">
                      <Link href={project.liveLink} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubLink} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
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
