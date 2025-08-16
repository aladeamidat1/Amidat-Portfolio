"use client"

import React from "react"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2025 Amidat Alade. Crafted with <Heart className="w-4 h-4 inline text-primary" /> and lots of coffee.
        </p>
      </div>
    </footer>
  )
}