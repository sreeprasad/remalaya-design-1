import { ArrowLeft, Music, Users, BookOpen, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProgramsPage() {
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
                  className="text-sm font-semibold text-primary hover:text-accent transition-colors"
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
              Our Programs
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mb-8"></div>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Discover authentic South Indian classical arts education through our comprehensive programs designed for
              all ages and skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="space-y-16">
          {/* Bharatanatyam */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-lg"></div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-accent/40 shadow-2xl">
                <img
                  src="/bharatanatyam-dance-class-children.jpg"
                  alt="Bharatanatyam Classes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Classical Dance</Badge>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Bharatanatyam</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Learn the ancient art of Bharatanatyam, one of India's oldest classical dance forms, under the guidance
                of experienced gurus. Our comprehensive curriculum covers adavus, jathis, varnams, and padams.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Classes for All Levels</div>
                    <div className="text-sm text-muted-foreground">Beginner, Intermediate, and Advanced batches</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Flexible Schedule</div>
                    <div className="text-sm text-muted-foreground">Weekend and weekday classes available</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Traditional Curriculum</div>
                    <div className="text-sm text-muted-foreground">Authentic teaching following Kalakshetra style</div>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 shadow-md">Enroll Now</Button>
            </div>
          </div>

          {/* Carnatic Music */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Classical Music</Badge>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Carnatic Music</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Immerse yourself in the melodious world of Carnatic music. Learn vocal music, veena, mridangam, and
                other traditional instruments from accomplished musicians.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Multiple Instruments</div>
                    <div className="text-sm text-muted-foreground">Vocal, Veena, Mridangam, Violin, and Flute</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Individual & Group Classes</div>
                    <div className="text-sm text-muted-foreground">Personalized attention for each student</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Theory & Practice</div>
                    <div className="text-sm text-muted-foreground">Comprehensive understanding of ragas and talas</div>
                  </div>
                </div>
              </div>

              <Button className="bg-accent hover:bg-accent/90 shadow-md">Enroll Now</Button>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 rounded-lg"></div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-primary/40 shadow-2xl">
                <img
                  src="/indian-classical-music-concert-tabla.jpg"
                  alt="Carnatic Music Classes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sanskrit & Cultural Studies */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-lg"></div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-accent/40 shadow-2xl">
                <img
                  src="/sanskrit-class-children-learning.jpg"
                  alt="Sanskrit Classes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Language & Culture</Badge>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">Sanskrit & Cultural Studies</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Explore the ancient language of Sanskrit and deepen your understanding of South Indian culture,
                traditions, mythology, and spiritual practices.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Sanskrit Language</div>
                    <div className="text-sm text-muted-foreground">Reading, writing, and conversational skills</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Cultural Workshops</div>
                    <div className="text-sm text-muted-foreground">Mythology, festivals, and traditions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Monthly Sessions</div>
                    <div className="text-sm text-muted-foreground">Interactive learning environment</div>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 shadow-md">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24 border-y-4 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Special Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-accent/30 hover:border-accent/50 transition-all">
              <CardHeader>
                <CardTitle className="font-serif text-primary">Summer Intensive</CardTitle>
                <CardDescription>Immersive 6-week program during summer break</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Intensive training in dance and music with daily classes, workshops, and culminating performance.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/30 hover:bg-primary/5 bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 hover:border-accent/50 transition-all">
              <CardHeader>
                <CardTitle className="font-serif text-primary">Adult Classes</CardTitle>
                <CardDescription>Programs designed specifically for adults</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Never too late to learn! Beginner-friendly classes in dance and music for adult learners.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/30 hover:bg-primary/5 bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 hover:border-accent/50 transition-all">
              <CardHeader>
                <CardTitle className="font-serif text-primary">Performance Troupe</CardTitle>
                <CardDescription>Advanced students showcase their skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Join our performance troupe for regular stage opportunities and professional development.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/30 hover:bg-primary/5 bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
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
                  <a href="#" className="hover:text-accent transition-colors">
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
