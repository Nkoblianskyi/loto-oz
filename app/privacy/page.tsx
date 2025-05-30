import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, purchase
                    lottery tickets, or contact us for support. This may include your name, email address, phone number,
                    and payment information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain our lottery services</li>
                    <li>To process your ticket purchases and prize claims</li>
                    <li>To send you important updates about draws and results</li>
                    <li>To comply with legal and regulatory requirements</li>
                    <li>To improve our services and user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@ozbigwinau.com
                  </p>
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
