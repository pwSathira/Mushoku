import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import type { OverviewProps } from "./types"

export function CharacterOverview({
  currentGroup,
  currentGroupIndex,
  currentIndex,
  onCharacterSelect,
}: OverviewProps) {
  return (
    <Card className="border-red-100 dark:border-red-800">
      <CardHeader>
        <CardTitle className="text-lg text-black dark:text-white">Character Overview</CardTitle>
        <CardDescription>{currentGroup.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={`overview-${currentGroupIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-5 gap-2"
          >
            {currentGroup.characters.map((char, index) => (
              <motion.button
                key={index}
                onClick={() => onCharacterSelect(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center text-sm font-bold transition-all ${
                  index === currentIndex
                    ? "border-yellow-500 dark:border-yellow-400 bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400"
                    : index < currentIndex
                      ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-400"
                      : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <span className="text-lg">{char.hiragana}</span>
                <span className="text-xs">{char.romaji}</span>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
} 