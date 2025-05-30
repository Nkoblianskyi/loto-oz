import { ShieldX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SecurityWarning() {
  const siteName = "ozbigwinau.com"

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Security Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <ShieldX className="w-16 h-16 text-gray-600" />
          </div>
        </div>

        {/* Main Warning Message */}
        <div className="space-y-2">
          <h1 className="text-xl font-normal text-gray-900">{siteName} doesn't support a secure connection</h1>
        </div>

        {/* Warning Details */}
        <div className="space-y-4 text-sm text-gray-700 text-left">
          <div className="space-y-1">
            <p>
              <span className="font-medium">Attackers can see and change</span> information you send or receive from the
              site.
            </p>
          </div>

          <div className="space-y-1">
            <p>
              <span className="font-medium">It's safest to visit this site later</span> if you're using a public
              network. There is less risk from a trusted network, like your home or work Wi-Fi.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-sm text-gray-600">
          <p>
            You might also contact the site owner and suggest they upgrade to HTTPS.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about this warning
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center pt-4">
          <Button
            variant="outline"
            className="px-6 py-2 text-sm bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
          >
            Continue to site
          </Button>
          <Button className="px-6 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white">Go back</Button>
        </div>
      </div>
    </div>
  )
}
