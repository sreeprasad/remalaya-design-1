import { Calendar, Mail, ArrowRight, MapPin, Users, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SouthIndianDesign1() {
  return (
    <div className="min-h-screen bg-background">
      {/* Traditional Border Pattern */}
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>

      {/* Header with Traditional Elements */}
      <header className="border-b-4 border-primary/20 bg-background relative">
        {/* Decorative Pattern */}
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
                {/* Traditional Om Symbol Style Logo */}
                <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center border-2 border-accent shadow-lg">
                  <span className="font-serif text-2xl font-bold text-primary-foreground">ॐ</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold text-primary block leading-none">Remalaya</span>
                  <span className="text-xs text-muted-foreground">रेमालय</span>
                </div>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                  Home
                </Link>
                <Link
                  href="/events"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Events
                </Link>
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
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
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

      {/* Hero Section with Kolam Pattern */}
      <section className="border-b-4 border-primary/20 relative overflow-hidden">
        {/* Kolam Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0), radial-gradient(circle at 75px 75px, currentColor 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">501(c)(3) Nonprofit Organization</Badge>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance leading-tight">
                Preserving South Indian Classical Arts & Culture
              </h1>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Remalaya is dedicated to promoting the rich heritage of South Indian classical arts through authentic
                performances, traditional education, and vibrant community celebrations.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 shadow-lg">
                  View Events
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats with Traditional Border */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-secondary/30 rounded border-2 border-accent/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Service</div>
                </div>
                <div className="text-center border-x-2 border-accent/20">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Annual Events</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Traditional Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-lg"></div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-4 border-accent/40 shadow-2xl">
                <img
                  src="/indian-classical-dance-bharatanatyam-elegant-perfo.jpg"
                  alt="Bharatanatyam Performance"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-accent"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-accent"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event with Temple Architecture Inspiration */}
      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <Badge className="bg-accent/20 text-accent border-accent/30">Featured Event</Badge>
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Gajanana - The Vignavinashaka
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"></div>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                A spectacular celebration of Lord Ganesha through classical Bharatanatyam dance and Carnatic music
              </p>
            </div>

            <Card className="overflow-hidden border-2 border-accent/30 shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto bg-secondary relative">
                  <img
                    src="/gajanana-ganesha-classical-dance-event-poster.jpg"
                    alt="Gajanana Event"
                    className="w-full h-full object-cover"
                  />
                  {/* Traditional Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent/60"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-accent/60"></div>
                </div>
                <div className="p-8 flex flex-col justify-between bg-card">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-6 border-b-2 border-accent/30 pb-2">
                      Event Details
                    </h3>
                    <div className="space-y-5 mb-6">
                      <div className="flex gap-3">
                        <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Sunday, September 21, 2025</div>
                          <div className="text-sm text-muted-foreground">3:30 PM - 6:00 PM</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Jackson Theater, Ohlone College</div>
                          <div className="text-sm text-muted-foreground">43600 Mission Blvd, Fremont CA</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Featuring Guru Smt. Latha Sriram</div>
                          <div className="text-sm text-muted-foreground">With 100+ students and live orchestra</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded border-l-4 border-accent p-4 mb-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-accent mb-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Free Admission - All Are Welcome</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Seating is limited. Doors open at 3:00 PM.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90 shadow-md" size="lg">
                      Register Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary/30 hover:bg-primary/5 bg-transparent"
                      size="lg"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our calendar of authentic South Indian performances, workshops, and cultural celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
            <div className="aspect-video bg-muted relative">
              <img
                src="/carnatic-music-workshop-class.jpg"
                alt="Music Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-accent text-accent-foreground shadow-md">Workshop</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-accent">Oct 15, 2025</span>
              </div>
              <CardTitle className="font-serif text-primary">Carnatic Music Workshop</CardTitle>
              <CardDescription>
                Intensive training in South Indian classical music fundamentals and ragas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-2 border-primary/30 hover:bg-primary/5 text-primary font-semibold bg-transparent"
              >
                Register
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
            <div className="aspect-video bg-muted relative">
              <img
                src="/bharatanatyam-dance-recital-stage.jpg"
                alt="Dance Recital"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary text-primary-foreground shadow-md">Performance</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-accent">Oct 28, 2025</span>
              </div>
              <CardTitle className="font-serif text-primary">Annual Dance Recital</CardTitle>
              <CardDescription>Showcase of traditional Bharatanatyam by our advanced students</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-2 border-primary/30 hover:bg-primary/5 text-primary font-semibold bg-transparent"
              >
                Get Tickets
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
            <div className="aspect-video bg-muted relative">
              <img
                src="/dance-festival-celebration-community.jpg"
                alt="Diwali Festival"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-accent text-accent-foreground shadow-md">Festival</Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-accent">Nov 1, 2025</span>
              </div>
              <CardTitle className="font-serif text-primary">Diwali Celebration</CardTitle>
              <CardDescription>Community festival with performances, traditional food, and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-2 border-primary/30 hover:bg-primary/5 text-primary font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Section with Traditional Motifs */}
      <section
        id="donate"
        className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-16 md:py-24 relative overflow-hidden"
      >
        {/* Decorative Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, currentColor 20px, currentColor 21px),
                           repeating-linear-gradient(90deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Support Our Sacred Mission</h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Your generous contributions enable us to preserve ancient cultural traditions, provide authentic
                education, and create meaningful spiritual and artistic experiences for our community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Fund Traditional Education Programs</div>
                    <div className="text-sm opacity-90">
                      Support authentic classes in Bharatanatyam, Carnatic music, and Sanskrit
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Enable Free Community Events</div>
                    <div className="text-sm opacity-90">
                      Make cultural and spiritual experiences accessible to everyone
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Preserve Classical Arts Heritage</div>
                    <div className="text-sm opacity-90">
                      Help maintain and promote South Indian classical traditions
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <Card className="border-4 border-accent/30 shadow-2xl">
              <CardHeader className="border-b-2 border-accent/20">
                <CardTitle className="font-serif text-2xl text-primary">Make a Donation</CardTitle>
                <CardDescription>Every contribution preserves our heritage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <label className="text-sm font-semibold mb-3 block text-foreground">Donation Frequency</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-auto py-4 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
                    >
                      <div>
                        <div className="font-semibold text-foreground">One-Time</div>
                        <div className="text-xs text-muted-foreground">Single donation</div>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
                    >
                      <div>
                        <div className="font-semibold text-foreground">Monthly</div>
                        <div className="text-xs text-muted-foreground">Recurring gift</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-3 block text-foreground">Select Amount</label>
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    <Button className="bg-accent hover:bg-accent/90 font-semibold">$25</Button>
                    <Button className="bg-accent hover:bg-accent/90 font-semibold">$50</Button>
                    <Button className="bg-accent hover:bg-accent/90 font-semibold">$100</Button>
                    <Button className="bg-accent hover:bg-accent/90 font-semibold">$250</Button>
                  </div>
                  <Input type="number" placeholder="Custom amount" className="h-12 border-2 border-input" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                  Donate Securely
                </Button>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Tax-deductible</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>501(c)(3)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter with Traditional Border */}
      <section className="border-y-4 border-primary/20 py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 border-2 border-accent mb-6">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Stay Connected</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-foreground/80 mb-8">
              Subscribe to receive updates on upcoming events, programs, and insights into South Indian classical arts
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 text-base flex-1 border-2 border-accent/30 focus:border-accent"
              />
              <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 shadow-md">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Join 500+ subscribers • Unsubscribe anytime • No spam</p>
          </div>
        </div>
      </section>

      {/* Footer with Traditional Elements */}
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
                  <Link href="#" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm text-primary">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Sponsor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Partner
                  </Link>
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
          <div className="border-t-2 border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Remalaya. All rights reserved. 501(c)(3) nonprofit organization.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-2.664 4.771-4.919 4.919-1.281-.059-1.689-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 4.354 0 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Traditional Border */}
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </div>
  )
}
