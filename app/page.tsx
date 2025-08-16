"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Heart } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-sans font-bold text-xl text-primary">Aminat Alade</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="mb-6 animate-float">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amidat Alade
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer crafting beautiful, accessible digital experiences that
              make a difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold"
              >
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="font-sans font-semibold bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                With 5+ years of experience in full-stack development, I specialize in creating intuitive user
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

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-4xl mb-4 text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, from mobile apps to AI-powered platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <CardHeader className="p-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-sans font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-accent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-4xl mb-4 text-foreground">Let's Create Something Amazing</h2>
            <p className="text-xl text-muted-foreground">
              Ready to bring your ideas to life? I'd love to hear from you!
            </p>
          </div>
          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background border-border"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sarah Chen. Crafted with <Heart className="w-4 h-4 inline text-primary" /> and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  )
}
