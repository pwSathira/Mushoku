import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import type { JapaneseChar } from "@/types/japanese"

interface KatakanaCardProps {
  char: JapaneseChar
  groupIndex: number
  charIndex: number
}

export function KatakanaCard({ char, groupIndex, charIndex }: KatakanaCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`katakana-${groupIndex}-${charIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-2 border-purple-100 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 hover:shadow-lg transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <Badge className="w-fit mx-auto bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-800">
              カタカナ Katakana
            </Badge>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-9xl font-bold text-purple-600 dark:text-purple-400 mb-4 leading-none">{char.katakana}</div>
            <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">/{char.romaji}/</div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
} 