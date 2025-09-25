import type React from "react"
import type { Metadata } from "next"
import { ViewTransitions } from "next-view-transitions"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Head } from "@/components/head"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { Toaster as ToasterProvider } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import type { Locale } from "@/i18n"
import { cn } from "@/lib/utils"
import "../styles/globals.css"
import { Suspense } from "react"

const metadata: Metadata = {
  title: "Portfolio | Ferhat Rudvanoğulları",
  description: "My personal portfolio: showcasing my work and skills.",
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <Head metadata={metadata} />
      <body className="w-full">
        <NextIntlClientProvider messages={messages}>
          <ViewTransitions>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <TooltipProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
                    <Header />
                    <main className="flex-1 ml-56 p-8">{children}</main>
                  </div>
                </Suspense>
              </TooltipProvider>
              <Toaster />
              <ToasterProvider />
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
          </ViewTransitions>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
