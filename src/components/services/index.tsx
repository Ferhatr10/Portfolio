import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Palette, Code, Smartphone } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Product Design",
    description: "Creating user-centered designs and prototypes for digital products.",
    price: "from $90 per hour",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications with modern technologies.",
    price: "from $100 per hour",
  },
  {
    icon: Smartphone,
    title: "Branding",
    description: "Developing comprehensive brand identities and visual systems.",
    price: "from $80 per hour",
  },
]

export function Services() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h2>

      <div className="space-y-4">
        {services.map((service) => (
          <Card key={service.title} className="border-0 shadow-sm bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <service.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {service.price}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
