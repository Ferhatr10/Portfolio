"use client"

import { usePagination } from "@/hook/use-pagination"
import { Button } from "../ui/button"
import { ProjectCard } from "./card"
import { ProjectPagination } from "./pagination"
import { useTranslations, useMessages } from "next-intl"
import { ArrowRight } from "lucide-react"
import type { ProjectProps, TranslationMessages, TranslationProject } from "@/types"
import { iconMap } from "@/data"

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

  const { currentProjects, page, totalPages, updatePage } = usePagination({
    projects: projectsItems,
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Selected Work</h2>
        <Button
          variant="ghost"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {currentProjects.length === 0 || page < 1 || page > totalPages ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No projects found</p>
          <Button variant="secondary" size="sm" asChild>
            <a href="/projects">{t("projects.not-found")}</a>
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <ProjectPagination page={page} totalPages={totalPages} updatePage={updatePage} />
        </>
      )}
    </div>
  )
}
