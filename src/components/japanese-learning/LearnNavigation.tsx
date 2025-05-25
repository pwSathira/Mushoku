import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookOpen, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

export function LearnNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-red-200 dark:border-red-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Mushoku_Logo.png" alt="Mushoku" width={64} height={64} />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Segmented Control for Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 p-0.5">
              <button
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold transition-all focus:outline-none",
                  pathname === "/learn"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black border border-gray-400 dark:border-gray-300 shadow-sm"
                    : "bg-transparent text-black dark:text-white"
                )}
                onClick={() => router.push("/learn")}
                type="button"
                aria-pressed={pathname === "/learn"}
              >
                <BookOpen className="w-4 h-4" />
                Learn
              </button>
              <button
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold transition-all focus:outline-none",
                  pathname === "/quiz"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black border border-gray-400 dark:border-gray-300 shadow-sm"
                    : "bg-transparent text-black dark:text-white"
                )}
                onClick={() => router.push("/quiz")}
                type="button"
                aria-pressed={pathname === "/quiz"}
              >
                <Brain className="w-4 h-4" />
                Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 