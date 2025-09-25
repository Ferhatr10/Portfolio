"use client"

import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Download, Copy } from "lucide-react"

export function Hero() {
  const t = useTranslations()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('hero.about.title')}</h1>
        <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
          {t('hero.badge.developer')}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {t('hero.badge.location')}
        </Badge>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
        {t('hero.about.description')}
      </p>

      <div className="flex items-center gap-3">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          {t('hero.buttons.resume')}
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Copy className="w-4 h-4" />
          {t('hero.buttons.copyEmail')}
        </Button>
      </div>
    </div>
  )
}
