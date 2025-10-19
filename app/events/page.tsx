import { Calendar, MapPin, Users, ArrowLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Traditional Border Pattern */}
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>

      {/* Header with Traditional Elements */}
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
                <Link href="/events" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
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

      {/* Back to Home Link */}
      <div className="border-b border-border bg-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Featured Event Section */}
      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <Badge className="bg-accent/20 text-accent border-accent/30">Featured Event</Badge>
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Gajanana - The Vignavinashaka
              </h1>
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
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent/60"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-accent/60"></div>
                </div>
                <div className="p-8 flex flex-col justify-between bg-card">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b-2 border-accent/30 pb-2">
                      Event Details
                    </h2>
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
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our calendar of authentic South Indian performances, workshops, and cultural celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        {/* Past Events Section */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <h3 className="font-serif text-3xl font-bold text-primary mb-2">Past Events</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2 border-accent/20 opacity-75">
              <div className="aspect-video bg-muted relative">
                <img
                  src="/indian-classical-dance-bharatanatyam-elegant-perfo.jpg"
                  alt="Past Event"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-muted text-muted-foreground">Completed</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-muted-foreground">Aug 12, 2025</span>
                </div>
                <CardTitle className="font-serif text-primary">Summer Dance Showcase</CardTitle>
                <CardDescription>Annual performance featuring 80+ students</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2 border-accent/20 opacity-75">
              <div className="aspect-video bg-muted relative">
                <img
                  src="/carnatic-music-workshop-class.jpg"
                  alt="Past Event"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-muted text-muted-foreground">Completed</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-muted-foreground">Jul 20, 2025</span>
                </div>
                <CardTitle className="font-serif text-primary">Guru Purnima Celebration</CardTitle>
                <CardDescription>Honoring teachers with music and dance tributes</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2 border-accent/20 opacity-75">
              <div className="aspect-video bg-muted relative">
                <img
                  src="/bharatanatyam-dance-recital-stage.jpg"
                  alt="Past Event"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-muted text-muted-foreground">Completed</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-muted-foreground">Jun 15, 2025</span>
                </div>
                <CardTitle className="font-serif text-primary">Spring Arangetram</CardTitle>
                <CardDescription>Debut solo performances by graduating students</CardDescription>
              </CardHeader>
            </Card>
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
                  <Link href="/events" className="hover:text-accent transition-colors">
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

      {/* Bottom Traditional Border */}
      <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary"></div>
    </div>
  )
}
