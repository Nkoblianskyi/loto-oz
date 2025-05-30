"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { CountdownTimer } from "@/components/countdown-timer"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, DollarSign, Users, Star, Shield, Clock, Gift, Zap } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Redesigned with Australian colors */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Logo Section */}
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/oz-lotto-logo.png"
                  alt="OZ Lotto"
                  width={300}
                  height={150}
                  className="h-24 w-auto mx-auto animate-pulse-slow"
                />
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h1 className="text-6xl md:text-8xl font-black leading-tight animate-bounce-in">
                WIN BIG
                <span className="block text-red-400 animate-slide-in-right animation-delay-300">AUSSIE STYLE!</span>
              </h1>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto hover:bg-white/20 transition-all duration-300 animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">AUSTRALIA'S #1 LOTTERY EXPERIENCE</h2>
                <p className="text-lg md:text-xl leading-relaxed">
                  Join millions of Aussies chasing life-changing jackpots every week. Dreams come
                  true with OZ Lotto!
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="max-w-lg mx-auto animate-fade-in-up animation-delay-600">
              <CountdownTimer />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
              <Button
                size="lg"
                onClick={() => router.push("/login")}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                🎫 PLAY NOW  <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={20} height={20} className="h-12 w-auto" />
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

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-1000">
              {[
                { icon: "💰", title: "$50M+", subtitle: "Current Jackpot" },
                { icon: "🏆", title: "2M+", subtitle: "Happy Winners" },
                { icon: "⭐", title: "25+", subtitle: "Years of Trust" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-2 animate-bounce-slow">{stat.icon}</div>
                  <div className="text-3xl font-bold">{stat.title}</div>
                  <div className="text-lg opacity-90">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About OZ Lotto Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in-up flex flex-col items-center">
              <h2 className="text-5xl font-bold text-blue-900">What is OZ Lotto?</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={30} height={30} className="h-12 w-auto" />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-8 border-2 border-blue-100 animate-fade-in-up animation-delay-200 hover:shadow-xl transition-shadow duration-300">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                <strong>Australia's Premier National Lottery</strong> - Born in 1994, OZ Lotto has been making Aussie
                dreams come true for over 25 years! Every Tuesday night at 8:30pm AEST, we draw 7 winning numbers plus 2
                supplementary numbers, creating 7 different ways to win.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Trophy,
                  title: "7 Prize Divisions",
                  description: "Multiple ways to win with 7 different prize divisions every draw",
                },
                {
                  icon: DollarSign,
                  title: "$2M Minimum",
                  description: "Guaranteed minimum Division 1 prize of $2 million every week",
                },
                {
                  icon: Star,
                  title: "Weekly Draws",
                  description: "Every Tuesday night at 8:30pm AEST across all Australian states",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <CardHeader>
                    <item.icon className="w-16 h-16 text-red-600 mx-auto animate-bounce-slow" />
                    <CardTitle className="text-blue-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="bg-gradient-to-r from-blue-900 to-red-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in-up flex flex-col items-center">
              <h2 className="text-5xl font-bold text-white">How to Play OZ Lotto</h2>
              <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={120} height={60} className="h-12 w-auto" />
              <div className="w-24 h-1 bg-white mx-auto rounded-full animate-expand"></div>
              <p className="text-xl text-white/90">
                It's as easy as 1-2-3! Follow these simple steps to start your winning journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: <Zap className="w-12 h-12" />,
                  title: "Choose Your Numbers",
                  description: "Pick 7 numbers from 1 to 47, or use QuickPick for random selection",
                },
                {
                  step: "2",
                  icon: <Gift className="w-12 h-12" />,
                  title: "Buy Your Ticket",
                  description: "Purchase online, via app, or at any authorized retailer across Australia",
                },
                {
                  step: "3",
                  icon: <Trophy className="w-12 h-12" />,
                  title: "Check Results",
                  description: "Draws happen every Tuesday at 8:30pm AEST. Check if you're a winner!",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 200}ms` }}
                >
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 animate-pulse-glow">
                    {item.step}
                  </div>
                  <div className="text-white mb-4 animate-bounce-slow">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/90 text-lg">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in-up animation-delay-800 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">💡 Pro Tip</h3>
              <p className="text-white/90 text-lg">
                You can play up to 18 games on one ticket and enter multiple draws in advance. The more you play, the
                better your chances of winning!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose OZ Lotto Section */}
      <section className="bg-gradient-to-r from-red-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in-up flex flex-col items-center">
              <h2 className="text-5xl font-bold text-blue-900">Why Choose OZ Lotto?</h2>
              <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={120} height={60} className="h-12 w-auto" />
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <p className="text-xl text-gray-700">Trusted by millions of Australians for over 25 years</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-red-600" />,
                  title: "100% Secure",
                  description: "Licensed and regulated by Australian gaming authorities",
                },
                {
                  icon: <Clock className="w-12 h-12 text-red-600" />,
                  title: "25+ Years",
                  description: "Trusted lottery experience since 1994",
                },
                {
                  icon: <Users className="w-12 h-12 text-red-600" />,
                  title: "2M+ Winners",
                  description: "Millions of Aussies have won prizes with us",
                },
                {
                  icon: <DollarSign className="w-12 h-12 text-red-600" />,
                  title: "Biggest Jackpots",
                  description: "Record jackpots over $100 million",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl text-center hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="mx-auto animate-bounce-slow">{feature.icon}</div>
                    <CardTitle className="text-blue-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-red-800 rounded-3xl p-8 text-center text-white animate-fade-in-up animation-delay-800 hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-4"><Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={40} height={40} className="h-12 w-auto" />Proudly Australian</h3>
              <p className="text-xl mb-6">
                OZ Lotto is 100% Australian owned and operated. When you play, you're supporting local communities and
                helping fund important causes across the country.
              </p>
              <Button
                onClick={() => router.push("/login")}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-bold hover:scale-105 transition-all duration-300"
              >
                Learn More About Our Community Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in-up flex flex-col items-center">
              <h2 className="text-5xl font-bold text-blue-900">What Can You Win?</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={30} height={30} className="h-14 w-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { division: "Division 1", prize: "$2M+", description: "7 numbers", highlight: true },
                { division: "Division 2", prize: "$50K+", description: "6 numbers + 1 supplementary" },
                { division: "Division 3", prize: "$5K+", description: "6 numbers" },
                { division: "Division 4", prize: "$500+", description: "5 numbers + 1 supplementary" },
                { division: "Division 5", prize: "$100+", description: "5 numbers" },
                { division: "Division 6", prize: "$50+", description: "4 numbers" },
                { division: "Division 7", prize: "$25+", description: "3 numbers + 1 supplementary" },
              ].map((prize, index) => (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up ${prize.highlight
                    ? "border-red-400 bg-gradient-to-br from-red-50 to-blue-50 animate-pulse-glow"
                    : "border-blue-200 hover:border-red-400"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className={`text-lg ${prize.highlight ? "text-red-700" : "text-blue-900"}`}>
                      {prize.division}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`text-3xl font-bold mb-2 animate-bounce-slow ${prize.highlight ? "text-red-600" : "text-blue-700"}`}
                    >
                      {prize.prize}
                    </div>
                    <p className="text-sm text-gray-600">{prize.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Winners Section */}
      <section className="bg-gradient-to-r from-blue-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-fade-in-up  flex flex-col items-center">
              <h2 className="text-5xl font-bold text-blue-900">Recent Aussie Winners</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={30} height={30} className="h-12 w-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", location: "Sydney, NSW", amount: "$15.2 Million", date: "January 2025", flag: "🏙️" },
                {
                  name: "Michael T.",
                  location: "Melbourne, VIC",
                  amount: "$8.7 Million",
                  date: "December 2024",
                  flag: "☕",
                },
                {
                  name: "Jennifer L.",
                  location: "Brisbane, QLD",
                  amount: "$12.1 Million",
                  date: "November 2024",
                  flag: "🌴",
                },
              ].map((winner, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-blue-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="text-4xl mb-2 animate-bounce-slow">{winner.flag}</div>
                    <Users className="w-12 h-12 text-red-600 mx-auto animate-pulse-slow" />
                    <CardTitle className="text-xl text-blue-900">{winner.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-red-600 mb-2 animate-pulse-glow">{winner.amount}</div>
                    <p className="text-blue-700 font-semibold">{winner.location}</p>
                    <p className="text-sm text-gray-500">{winner.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-red-800 rounded-3xl p-8 text-white text-center animate-fade-in-up animation-delay-800 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">🎉 Could You Be Next?</h3>
              <p className="text-lg mb-6">
                Join thousands of Australians who have already changed their lives with OZ Lotto. Your winning moment
                could be just one ticket away!
              </p>
              <Button
                onClick={() => router.push("/login")}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-bold hover:scale-105 transition-all duration-300"
              >
                Start Playing Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
