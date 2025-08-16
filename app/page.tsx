"use client"

import React from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const projects = [
    {
      title: "EcoTrack Mobile App",
      description:
        "A React Native app helping users track their carbon footprint with beautiful data visualizations and gamification.",
      tech: ["React Native", "TypeScript", "Firebase", "Chart.js"],
      image: "/eco-friendly-app.png",
      link: "https://github.com/sarahchen/ecotrack",
    },
    {
      title: "Mindful Moments Web Platform",
      description:
        "A wellness platform built with Next.js featuring meditation guides, mood tracking, and community features.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
      image: "/wellness-meditation-app.png",
      link: "https://github.com/sarahchen/mindful-moments",
    },
    {
      title: "AI-Powered Recipe Assistant",
      description:
        "Machine learning application that suggests personalized recipes based on dietary preferences and available ingredients.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "/ai-recipe-app.png",
      link: "https://github.com/sarahchen/recipe-ai",
    },
  ]

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Blockchain",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Design Thinking",
    "Critical Thinking",
    "Problem Solving",
    "Docker",
    "Git",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Header />
      <Hero />
      <About skills={skills} />
      <Projects projects={projects} />
      <ContactForm />
      <Footer />
    </div>
  )
}
