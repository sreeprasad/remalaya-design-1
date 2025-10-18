import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Traditional Border Pattern */}
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>

      {/* Header */}
      <header className="border-b-4 border-primary/20 bg-background relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center border-2 border-accent shadow-lg">
                  <span className="font-serif text-2xl font-bold text-primary-foreground">ॐ</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-primary block leading-none">Remalaya</span>
                  <span className="text-xs text-muted-foreground">रेमालय</span>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Home
                </Link>
                <a href="/#events" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Events
                </a>
                <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                  About
                </Link>
                <Link
                  href="/programs"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Programs
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 shadow-md">
              <Link href="/#donate">Donate</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-primary/20 relative overflow-hidden bg-gradient-to-br from-secondary/40 to-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0), radial-gradient(circle at 75px 75px, currentColor 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance leading-tight">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mb-8"></div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Have questions about our programs, events, or how to get involved? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-accent/30 shadow-xl">
            <CardHeader className="border-b-2 border-accent/20">
              <CardTitle className="font-serif text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-semibold mb-2 block text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" className="border-2 border-input" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-semibold mb-2 block text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" className="border-2 border-input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold mb-2 block text-foreground">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="border-2 border-input" />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold mb-2 block text-foreground">
                    Phone Number (Optional)
                  </label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" className="border-2 border-input" />
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-semibold mb-2 block text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Program Inquiry" className="border-2 border-input" />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold mb-2 block text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="border-2 border-input resize-none"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 shadow-md" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>

              <div className="space-y-6">
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-accent/30">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a
                          href="mailto:remalayaa@gmail.com"
                          className="text-accent hover:text-accent/80 transition-colors"
                        >
                          remalayaa@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <a href="tel:4084096178" className="text-accent hover:text-accent/80 transition-colors">
                          408-409-6178
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-accent/30">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Mailing Address</h3>
                        <p className="text-muted-foreground">
                          P.O. Box 2206
                          <br />
                          Santa Clara, CA 95055
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-secondary/20 to-background">
              <CardHeader>
                <CardTitle className="font-serif text-primary">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-accent/30 hover:bg-primary/20 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border-2 border-primary/30 hover:bg-accent/20 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-accent/30 hover:bg-primary/20 transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t-4 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center border-2 border-accent">
                  <span className="font-serif text-xl font-bold text-primary-foreground">ॐ</span>
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-primary">Remalaya</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Preserving and promoting South Indian classical arts through authentic education and performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm text-primary">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-accent transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/#events" className="hover:text-accent transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm text-primary">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/#donate" className="hover:text-accent transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm text-primary">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>P.O. Box 2206</li>
                <li>Santa Clara, CA 95055</li>
                <li>
                  <a href="tel:4084096178" className="hover:text-accent transition-colors">
                    408-409-6178
                  </a>
                </li>
                <li>
                  <a href="mailto:remalayaa@gmail.com" className="hover:text-accent transition-colors">
                    remalayaa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-accent/20 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Remalaya. All rights reserved. 501(c)(3) nonprofit organization.
            </p>
          </div>
        </div>
      </footer>

      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </div>
  )
}
