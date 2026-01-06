"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Home() {
  const [name, setName] = useState("")

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">shadcn/ui Demo</h1>
          <p className="text-muted-foreground text-lg">
            Beautiful UI components built with Radix UI and Tailwind CSS
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Card</CardTitle>
              <CardDescription>
                This is a card component from shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {name && (
                <p className="text-sm text-muted-foreground">
                  Hello, <span className="font-semibold text-foreground">{name}</span>!
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles available
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Default</Button>
              <Button variant="secondary" className="w-full">
                Secondary
              </Button>
              <Button variant="outline" className="w-full">
                Outline
              </Button>
              <Button variant="ghost" className="w-full">
                Ghost
              </Button>
              <Button variant="destructive" className="w-full">
                Destructive
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Why use shadcn/ui?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Copy and paste components directly into your project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Built on top of Radix UI for accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fully customizable with Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>TypeScript support out of the box</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
