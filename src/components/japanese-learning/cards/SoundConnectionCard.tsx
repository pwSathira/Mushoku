import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { JapaneseChar } from "@/types/japanese"

interface SoundConnectionCardProps {
  char: JapaneseChar
}

export function SoundConnectionCard({ char }: SoundConnectionCardProps) {
  return (
    <Card className="col-span-2 border-2 border-orange-100 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/50 dark:to-yellow-900/50">
      <CardContent className="text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl font-bold text-red-600 dark:text-red-400">{char.hiragana}</span>
          <span className="text-2xl text-gray-400 dark:text-gray-500">+</span>
          <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">{char.katakana}</span>
          <span className="text-2xl text-gray-400 dark:text-gray-500">=</span>
          <Badge variant="outline" className="text-xl px-4 py-2 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-400">
            /{char.romaji}/
          </Badge>
        </div>
        <p className="text-gray-600 dark:text-gray-400">Both characters represent the same sound</p>
      </CardContent>
    </Card>
  )
} 