import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Are Cookies</h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit our
                    website. They help us provide you with a better experience by remembering your preferences and
                    improving our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                      <p>
                        These help us understand how visitors interact with our website by collecting anonymous
                        information.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Functional Cookies</h3>
                      <p>
                        These cookies enable enhanced functionality and personalization, such as remembering your login
                        details.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Managing Cookies</h2>
                  <p>
                    You can control and manage cookies in various ways. Most browsers allow you to refuse or accept
                    cookies, delete existing cookies, and set preferences for certain websites.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p>If you have any questions about our use of cookies, please contact us at cookies@ozbigwinau.com</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
