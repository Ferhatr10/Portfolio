"use client"

import { useTranslations, useMessages } from "next-intl"
import { ArrowRight } from "lucide-react"
import type { ProjectProps, TranslationMessages, TranslationProject } from "@/types"
import { iconMap } from "@/data"
import { Button } from "../ui/button"
import { useState } from "react"
import Image from "next/image"

export function Projects() {
  const t = useTranslations()
  const messages = useMessages() as TranslationMessages

  const rawProjectsItems = messages?.projects?.items || []

  const projectsItems: ProjectProps[] = rawProjectsItems.map((project: TranslationProject) => ({
    ...project,
    tags:
      project.tags?.map((tag) => ({
        ...tag,
        icon: iconMap[tag.icon]!,
      })) || [],
  }))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{t('projects.title')}</h1>
        <Button
          variant="ghost"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {projectsItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No projects found</p>
          <Button variant="secondary" size="sm" asChild>
            <a href="/projects">{t("projects.not-found")}</a>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {projectsItems.map((project, index) => (
            <ProjectAccordionItem key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectAccordionItem({ project }: { project: ProjectProps }) {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const { title, description, tags, link, image } = project

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Project Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.name}
                    className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isOpen ? 'Collapse' : 'Expand'}
            </span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </div>
        </div>
      </button>

      {/* Project Details */}
      {isOpen && (
        <div className="px-6 pb-6 bg-gray-50 dark:bg-gray-900">
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Project Image/Video */}
            {image && (
              <div className="mb-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                {description}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className="text-xs bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-blue-800 dark:text-blue-200"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {link.preview && (
                <Button variant="outline" size="sm" className="text-xs" asChild>
                  <a href={link.preview} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    {t('projects.preview')}
                  </a>
                </Button>
              )}
              {link.github && (
                <Button variant="outline" size="sm" className="text-xs" asChild>
                  <a href={link.github} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    {t('projects.github')}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
