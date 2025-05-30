"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    title: "",
    firstName: "",
    lastName: "",
    birthName: "",
    zip: "",
    location: "",
    street: "",
    houseNumber: "",
    dateOfBirth: "",
    placeOfBirth: "",
    phone: "",
    iban: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required field validations
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.title) newErrors.title = "Title is required"
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.zip) newErrors.zip = "Postal code is required"
    if (!formData.location) newErrors.location = "City/Location is required"
    if (!formData.street) newErrors.street = "Street address is required"
    if (!formData.houseNumber) newErrors.houseNumber = "House number is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.placeOfBirth) newErrors.placeOfBirth = "Place of birth is required"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (!formData.iban) newErrors.iban = "IBAN is required"

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Registration Successful!",
        description: "Welcome to OZ Lotto! Your account has been created. Redirecting to homepage...",
        duration: 3000,
      })

      setTimeout(() => {
        router.push("/")
      }, 2000)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-red-700">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <Card className="bg-white shadow-2xl border-2 border-blue-200">
            <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-3xl font-bold text-blue-900">SIGN UP</CardTitle>
              <p className="text-gray-600 text-lg">Join thousands of winners and start your lottery journey today</p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email and Password */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-blue-900 font-semibold">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className={`border-2 ${errors.email ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-blue-900 font-semibold">
                      Password *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Create a strong password"
                      className={`border-2 ${errors.password ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                </div>

                {/* ACCOUNT Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-blue-200 pb-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <h3 className="text-lg font-bold text-blue-900">ACCOUNT</h3>
                  </div>

                  <div>
                    <Label htmlFor="title" className="text-blue-900 font-semibold">
                      Title *
                    </Label>
                    <Select value={formData.title} onValueChange={(value) => handleInputChange("title", value)}>
                      <SelectTrigger
                        className={`border-2 ${errors.title ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      >
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-blue-900 font-semibold">
                        First name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Your first name"
                        className={`border-2 ${errors.firstName ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-blue-900 font-semibold">
                        Last name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Your last name"
                        className={`border-2 ${errors.lastName ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="birthName" className="text-blue-900 font-semibold">
                      Birth name
                    </Label>
                    <Input
                      id="birthName"
                      value={formData.birthName}
                      onChange={(e) => handleInputChange("birthName", e.target.value)}
                      placeholder="Birth name (if different)"
                      className="border-2 border-blue-200 focus:border-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zip" className="text-blue-900 font-semibold">
                        Zip *
                      </Label>
                      <Input
                        id="zip"
                        value={formData.zip}
                        onChange={(e) => handleInputChange("zip", e.target.value)}
                        placeholder="Postal code"
                        className={`border-2 ${errors.zip ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-blue-900 font-semibold">
                        Location *
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City/Location"
                        className={`border-2 ${errors.location ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="street" className="text-blue-900 font-semibold">
                        Street *
                      </Label>
                      <Input
                        id="street"
                        value={formData.street}
                        onChange={(e) => handleInputChange("street", e.target.value)}
                        placeholder="Street address"
                        className={`border-2 ${errors.street ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                    </div>

                    <div>
                      <Label htmlFor="houseNumber" className="text-blue-900 font-semibold">
                        House number *
                      </Label>
                      <Input
                        id="houseNumber"
                        value={formData.houseNumber}
                        onChange={(e) => handleInputChange("houseNumber", e.target.value)}
                        placeholder="House number"
                        className={`border-2 ${errors.houseNumber ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.houseNumber && <p className="text-red-500 text-sm mt-1">{errors.houseNumber}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-blue-900 font-semibold">
                        Date of birth *
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className={`border-2 ${errors.dateOfBirth ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                    </div>

                    <div>
                      <Label htmlFor="placeOfBirth" className="text-blue-900 font-semibold">
                        Place of birth *
                      </Label>
                      <Input
                        id="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
                        placeholder="Place of birth"
                        className={`border-2 ${errors.placeOfBirth ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                      />
                      {errors.placeOfBirth && <p className="text-red-500 text-sm mt-1">{errors.placeOfBirth}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-blue-900 font-semibold">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+XX X XXXX XXXX"
                      className={`border-2 ${errors.phone ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* BANK Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-blue-200 pb-2">
                    <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    <h3 className="text-lg font-bold text-blue-900">BANK</h3>
                  </div>

                  <div>
                    <Label htmlFor="iban" className="text-blue-900 font-semibold">
                      IBAN *
                    </Label>
                    <Input
                      id="iban"
                      value={formData.iban}
                      onChange={(e) => handleInputChange("iban", e.target.value)}
                      placeholder="Enter your IBAN"
                      className={`border-2 ${errors.iban ? "border-red-500" : "border-blue-200 focus:border-purple-500"}`}
                    />
                    {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban}</p>}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="border-2 border-blue-300"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                    I agree with the{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-purple-600 font-semibold">
                      politicians ozbigwinaustralia.com
                    </Link>{" "}
                    and data processing for my inquiry
                  </Label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white font-bold py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-purple-600 font-semibold">
                    Log In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
