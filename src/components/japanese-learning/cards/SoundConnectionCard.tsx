import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { JapaneseChar } from "@/types/japanese"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

interface SoundConnectionCardProps {
  char: JapaneseChar
}

export function SoundConnectionCard({ char }: SoundConnectionCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = () => {
    if (isPlaying) return
    setIsPlaying(true)
    const utterance = new SpeechSynthesisUtterance(char.sound)
    utterance.lang = "ja-JP"
    utterance.onend = () => setIsPlaying(false)
    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    // Small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      playSound()
    }, 500)

    return () => {
      clearTimeout(timer)
      // Cancel any ongoing speech when component unmounts
      speechSynthesis.cancel()
    }
  }, [char]) // Re-run when char changes

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
          <Button
            variant="ghost"
            size="icon"
            onClick={playSound}
            disabled={isPlaying}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
          >
            <Volume2 className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-400">Both characters represent the same sound</p>
      </CardContent>
    </Card>
  )
} 