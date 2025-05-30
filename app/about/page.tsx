"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Heart, Check, Star, Clock, Users } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight animate-fade-in-up">
              ABOUT US – YOUR TRUSTED
              <span className="block text-red-400 animate-slide-in-right animation-delay-300">LOTTERY PARTNER</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                onClick={() => router.push("/login")}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                🎫 BUY TICKET NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/login")}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 text-xl font-bold rounded-xl hover:scale-105 transition-all duration-300"
              >
                📱 GET APP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">WHO WE ARE</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex justify-center animate-fade-in-up">
                <div className="relative w-80 h-80">
                  <AnimatedLogo />
                </div>
              </div>

              <div className="lg:w-1/2 animate-fade-in-up animation-delay-300">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Welcome to ozbigwinau.com, where fortune meets innovation! We are Australia's leading lottery
                  platform, powered by a passionate team of gaming experts, technology pioneers, and dedicated support
                  specialists who are committed to transforming your lottery experience:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Frictionless Gaming – Tickets in 3 taps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Bank-level Security – your data stays confidential</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lightning Payouts – winnings hit your account within hours</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  value: "500M+",
                  label: "Total Winnings Distributed",
                  icon: <Star className="w-10 h-10 text-yellow-500" />,
                },
                {
                  value: "50K+",
                  label: "Happy Winners",
                  icon: <Users className="w-10 h-10 text-blue-500" />,
                },
                {
                  value: "99.9%",
                  label: "Uptime Guarantee",
                  icon: <Clock className="w-10 h-10 text-green-500" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4 animate-bounce-slow">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-900 mb-2 animate-number-flip">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-gradient-to-r from-blue-900 to-red-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4">OUR PROMISE</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full animate-expand"></div>
              <p className="text-xl mt-6 text-white/90">
                We are committed to providing you with the best possible lottery experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-16 h-16" />,
                  title: "SECURITY FIRST",
                  description: "Your trust is sacred. We use:",
                  items: ["AES-256 Encryption", "Two-Factor Authentication", "Independent Gaming Audits"],
                },
                {
                  icon: <Award className="w-16 h-16" />,
                  title: "FAIR PLAY GUARANTEE",
                  description: "Every number has equal chances — no algorithms, no tricks.",
                  items: [
                    "Certified Random Number Generators",
                    "Transparent Terms and Conditions",
                    "Regular Independent Audits",
                  ],
                },
                {
                  icon: <Heart className="w-16 h-16" />,
                  title: "WINS THAT GIVE BACK",
                  description: "5% from every ticket goes to:",
                  items: ["Rural Healthcare Programs", "Wildlife Conservation", "Youth Sports Initiatives"],
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6 animate-bounce-slow">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/90 mb-6">{feature.description}</p>
                    <ul className="space-y-2 text-left">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gradient-to-r from-blue-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">LIFE-CHANGING SUCCESS STORIES</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <p className="text-xl mt-6 text-gray-700">
                Meet extraordinary Australians whose lives were forever changed by the magic of OZ Lotto
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "When I saw those winning numbers match mine, I nearly fell off my chair! I've gone from working two jobs to establishing a foundation for disadvantaged children. OZ Lotto didn't just change my life—it's changing hundreds of young lives too!",
                  name: "Marcus T.",
                  win: "$24.3 Million – Melbourne, VIC",
                },
                {
                  quote:
                    "After 15 years of night shifts as a nurse, I can finally breathe! My family has a beautiful new home, my children's education is secured, and I've opened a community health clinic in my hometown. Dreams really do come true with OZ Lotto!",
                  name: "Sarah M.",
                  win: "$12.8 Million – Geelong, VIC",
                },
                {
                  quote:
                    "We've played the same numbers for 20 years—our anniversary and children's birthdays. When they finally hit, our retirement transformed overnight! From a modest pension to traveling the world and helping our grandchildren buy their first homes. Tuesday is still our lucky day!",
                  name: "The Wilson Family",
                  win: "$45.7 Million – Ballarat, VIC",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-blue-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div className="text-center">
                      <p className="font-bold text-blue-900">{testimonial.name}</p>
                      <p className="text-red-600">{testimonial.win}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
