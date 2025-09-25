"use client"

import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { LangSwitcher } from "./lang-switcher"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getNavItems } from "@/constants"
import { data } from "@/constants"
import { Home, Briefcase, FolderOpen, Mail } from "lucide-react"
import clsx from "clsx"

const iconMap = {
  "/": Home,
  "/career": Briefcase,
  "/projects": FolderOpen,
  "/contact": Mail,
}

export function Header() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations()
  const navItems = getNavItems(t)
  const { avatar, links } = data

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-16 h-16 mb-4">
            <AvatarImage alt={t('sidebar.avatar.name')} src={"/assets/avatar.webp"} />
            <AvatarFallback className="font-mono font-bold text-lg">{t('sidebar.avatar.initials')}</AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t('sidebar.avatar.name')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{t('sidebar.avatar.role')}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = iconMap[item.url as keyof typeof iconMap]
              const fullUrl = item.url === '/' ? `/${locale}` : `/${locale}${item.url}`
              const isActive = pathname === fullUrl

              return (
                <li key={item.url}>
                  <Link
                    href={fullUrl}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex justify-center gap-3 mb-4">
            {links.map((link) => (
              <Button key={link.title} variant="ghost" size="sm" className="w-8 h-8 p-0" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={t(`sidebar.links.${link.title.toLowerCase()}`)}>
                  <link.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Settings */}
          <div className="flex justify-center gap-2">
            <LangSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </aside>
  )
}
