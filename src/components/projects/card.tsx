"use client"

import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { LinkIcon, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import type { ProjectProps } from "@/types"

export function ProjectCard({ project }: { project: ProjectProps }) {
  const t = useTranslations()
  const { title, description, tags, image, video, link } = project

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
      {/* Project Image */}
      <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {image ? (
          <Image
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={400}
            height={240}
            src={image || "/placeholder.svg"}
            alt={title}
            loading="lazy"
          />
        ) : video ? (
          <video className="w-full h-full object-cover" width={400} height={240} muted autoPlay loop>
            <source src={video} type="video/webm" />
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg"></div>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag.name}
                variant="secondary"
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tag.name}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {link.preview && (
              <Button variant="outline" size="sm" className="text-xs" asChild>
                <a href={link.preview} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  <LinkIcon className="w-3 h-3" />
                  Preview
                </a>
              </Button>
            )}
            {link.github && (
              <Button variant="outline" size="sm" className="text-xs" asChild>
                <a href={link.github} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  <Github className="w-3 h-3" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
