"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

type Props = {
  skills: string[]
}

export default function About({ skills }: Props) {
  return (
    <section id="about" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="/alade-amidat.jpg"
              alt="Amidat Alade"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="animate-slide-up">
            <h2 className="font-sans font-bold text-4xl mb-6 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With 3+ years of experience in full-stack development, I specialize in creating intuitive user
              experiences and robust backend systems. I'm passionate about mentoring other women in tech and building
              inclusive, accessible applications.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me contributing to open source projects, speaking at tech conferences,
              or exploring new hiking trails with my camera.
            </p>
            <div className="mb-8">
              <h3 className="font-sans font-semibold text-xl mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}