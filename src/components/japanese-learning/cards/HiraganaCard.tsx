import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import type { JapaneseChar } from "@/types/japanese"

interface HiraganaCardProps {
  char: JapaneseChar
  groupIndex: number
  charIndex: number
}

export function HiraganaCard({ char, groupIndex, charIndex }: HiraganaCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`hiragana-${groupIndex}-${charIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-2 border-red-100 dark:border-red-800 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/50 dark:to-pink-900/50 hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <Badge className="w-fit mx-auto bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-800">ひらがな Hiragana</Badge>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-9xl font-bold text-red-600 dark:text-red-400 mb-4 leading-none">{char.hiragana}</div>
            <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">/{char.romaji}/</div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
} 