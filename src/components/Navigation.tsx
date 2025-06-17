import { Button } from "./ui/button"
import { ThemeToggle } from "~/components/theme/theme-toggle"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-red-200 dark:border-red-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/Mushoku_Logo.png" alt="Mushoku" width={64} height={64} />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/learn">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Start Learning</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 