import { ArrowLeft, Users, Heart, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
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
                <Link href="/about" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
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
            <Button className="bg-accent hover:bg-accent/90 shadow-md">Donate</Button>
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
              About Remalaya
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mb-8"></div>
            <p className="text-xl text-foreground/80 leading-relaxed mb-6">
              Remalaya is a 501(c)(3) nonprofit organization dedicated to preserving and promoting the rich heritage of
              South Indian classical arts and culture in the Bay Area and beyond.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded with a vision to create a vibrant community that celebrates traditional Bharatanatyam dance,
              Carnatic music, and South Indian cultural values, we provide authentic education, world-class
              performances, and meaningful cultural experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-accent/30 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 border-b-2 border-accent/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 border-2 border-accent">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Mission</h2>
            </div>
            <CardContent className="p-8">
              <p className="text-foreground/80 leading-relaxed">
                To preserve, promote, and perpetuate the ancient traditions of South Indian classical arts through
                authentic education, exceptional performances, and community engagement, making these sacred art forms
                accessible to all generations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/30 overflow-hidden">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 border-b-2 border-accent/20">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 border-2 border-primary">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Vision</h2>
            </div>
            <CardContent className="p-8">
              <p className="text-foreground/80 leading-relaxed">
                To be the leading cultural institution for South Indian classical arts in North America, creating a
                thriving community where traditional values, artistic excellence, and spiritual growth flourish for
                future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-b from-secondary/40 to-background py-16 md:py-24 border-y-4 border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent/30">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Authenticity</h3>
              <p className="text-foreground/70 leading-relaxed">
                Maintaining the purity and traditional essence of South Indian classical arts in all our teachings and
                performances.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-foreground/70 leading-relaxed">
                Building a supportive, inclusive community that celebrates cultural diversity and fosters meaningful
                connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent/30">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Excellence</h3>
              <p className="text-foreground/70 leading-relaxed">
                Striving for the highest standards in artistic performance, education, and cultural preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">Our Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mb-8"></div>

          <div className="space-y-8">
            <div className="border-l-4 border-accent pl-6">
              <div className="text-sm font-semibold text-accent mb-2">2010</div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">The Beginning</h3>
              <p className="text-foreground/80 leading-relaxed">
                Remalaya was founded by a group of passionate artists and cultural enthusiasts with a vision to create a
                space for authentic South Indian classical arts education in the Bay Area.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <div className="text-sm font-semibold text-primary mb-2">2015</div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Growth & Recognition</h3>
              <p className="text-foreground/80 leading-relaxed">
                Achieved 501(c)(3) nonprofit status and expanded programs to include Carnatic music, Sanskrit classes,
                and cultural workshops, serving over 200 students annually.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <div className="text-sm font-semibold text-accent mb-2">2020</div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Digital Transformation</h3>
              <p className="text-foreground/80 leading-relaxed">
                Adapted to virtual platforms during the pandemic, reaching students across North America and continuing
                our mission of cultural preservation through innovative online programs.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <div className="text-sm font-semibold text-primary mb-2">2025</div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Thriving Community</h3>
              <p className="text-foreground/80 leading-relaxed">
                Today, Remalaya serves over 500 students, hosts 50+ annual events, and continues to be a beacon of South
                Indian classical arts and culture in the Bay Area.
              </p>
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
