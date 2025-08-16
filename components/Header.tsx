"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
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
  )
}