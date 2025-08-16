"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
            A passionate software engineer crafting beautiful, accessible digital experiences that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold">
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
  )
}