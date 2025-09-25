import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of JavaScript: What's New in ES2025?",
    excerpt: "Exploring the latest features and improvements coming to JavaScript in 2025.",
    date: "March 15, 2024",
    readTime: "5 min",
    image: "/javascript-code-editor.png",
    category: "JavaScript",
  },
  {
    title: "How AI is Transforming Software Development",
    excerpt: "Understanding the impact of artificial intelligence on modern development workflows.",
    date: "March 8, 2024",
    readTime: "8 min",
    image: "/ai-technology-abstract.png",
    category: "AI",
  },
  {
    title: "Top 5 Programming Languages for 2024",
    excerpt: "A comprehensive guide to the most in-demand programming languages this year.",
    date: "February 28, 2024",
    readTime: "6 min",
    image: "/programming-languages-code.jpg",
    category: "Programming",
  },
]

export function Blog() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog</h2>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="border-0 shadow-sm bg-white dark:bg-gray-800 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex gap-6 p-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read more
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" className="text-sm">
          View All Posts
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
