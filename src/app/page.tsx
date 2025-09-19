import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe } from "lucide-react";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">Arjun Kaliyath</span>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">About</a>
              <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">Projects</a>
              <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">Skills</a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Cool background theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/8 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-primary/30 flex items-center justify-center dark-knight-glow">
              {/* <span className="text-4xl font-bold dark-knight-text">AK</span> */}
              <img 
              src="/pfp.jpg" 
              alt="Arjun Kaliyath's profile picture"
              className="h-full w-full rounded-full object-cover"
            />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="dark-knight-text">Arjun</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Hello and welcome! I&apos;m Arjun Kaliyath, a software engineer with a passion for building innovative solutions. Explore my projects to see how I combine technical rigor with a user-centric approach to solve complex challenges and build powerful applications. I&apos;m excited to share my work and my journey with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto dark-knight-glow dark-knight-border" asChild>
              <a href="mailto:kaliyatharjun@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto dark-knight-border" asChild>
              <a href="https://github.com/ArjunKaliyath" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View My Work
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, passion, and what drives me in the world of development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark-knight-text">My Story</h3>
              <p className="text-muted-foreground mb-4">
              After four years as a full-stack developer within the Salesforce ecosystem, where I rose to a Senior Software Engineer, 
              I made the deliberate decision to pursue a Master&apos;s in Computer Science. This journey was driven by my recognition of 
              the evolving tech landscape and the growing importance of AI, equipping me with a diverse and forward-thinking skill set.
              </p>
              <p className="text-muted-foreground mb-6">
                My journey spans from building enterprise-scale Salesforce applications to developing cutting-edge LLM-based research tools. 
                I&apos;m passionate about creating solutions that make a real impact, whether it&apos;s optimizing business processes or advancing scientific research.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Salesforce Developer</Badge>
                <Badge variant="secondary">Cloud Developer</Badge>
                <Badge variant="secondary">Full Stack Developer</Badge>
                <Badge variant="secondary">AI Developer</Badge>
                <Badge variant="secondary">DevOps Engineer</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary">4+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary">20000+</CardTitle>
                  <CardDescription>Lines of Code Written</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary">20+</CardTitle>
                  <CardDescription>Projects Delivered</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-primary">200+</CardTitle>
                  <CardDescription>User Stories Delivered</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <CardTitle>Frontend Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Redux</Badge>
                  <Badge>EJS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-primary" />
                  <CardTitle>Backend Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>Go</Badge>
                  <Badge>Salesforce Apex</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>WebSockets</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Palette className="h-6 w-6 text-primary" />
                  <CardTitle>Tools & Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Docker</Badge>
                  <Badge>Git</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Google Cloud</Badge>
                  <Badge>Jenkins</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Jira</Badge>
                  <Badge>Linux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Videomash</CardTitle>
                <CardDescription>
                  A full-stack, distributed video processing and hosting service with microservices architecture on Google Cloud Platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Cloud Run</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/videomash" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Booksmart</CardTitle>
                <CardDescription>
                  A secure e-commerce book store with automated invoice generation, AI chatbot integration, and comprehensive payment processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/booksmart" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Palette className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>LLM Research Agent</CardTitle>
                <CardDescription>
                  A conversational LLM-based agent for metabolomics data analysis using OpenAI API, LangChain, and Chainlit for natural language data processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">LangChain</Badge>
                  <Badge variant="outline">Chainlit</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Socials</CardTitle>
                <CardDescription>
                  A real-time social media application with RESTful API and modern web frontend, featuring real-time data updates and secure user authentication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Socket.IO</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/socials" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Spotify Recommender</CardTitle>
                <CardDescription>
                  A unified Streamlit application that visualizes music trends across decades and provides interactive EDA with a conversational recommender chatbot.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/spotifyrecommender" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Globe className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>The Swamp</CardTitle>
                <CardDescription>
                  A real-time video-chat web app built with React frontend and Go backend, featuring WebRTC for live video calls and WebSockets for group chat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">WebRTC</Badge>
                  <Badge variant="outline">WebSockets</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/theSwamp" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow dark-knight-border hover:dark-knight-glow">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>GoReddit</CardTitle>
                <CardDescription>
                  A Reddit-like social platform built with Go backend and modern web technologies, featuring user posts, comments, and real-time interactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">REST API</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/ArjunKaliyath/GoReddit" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Let&apos;s Start a Conversation</CardTitle>
                <CardDescription>
                  Send me a message and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4">
                    <Mail className="mr-2 h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">kaliyatharjun@gmail.com</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4">
                    <Linkedin className="mr-2 h-4 w-4" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">linkedin.com/in/arjun-kaliyath</div>
                    </div>
                  </Button>
                </div>
                <Separator />
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Or connect with me on social media
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/ArjunKaliyath" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://linkedin.com/in/arjun-kaliyath" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:kaliyatharjun@gmail.com">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded-full bg-primary"></div>
              <span className="font-semibold">Arjun Kaliyath</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Arjun. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
