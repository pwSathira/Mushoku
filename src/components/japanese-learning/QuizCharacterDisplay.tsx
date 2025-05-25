import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { JapaneseChar } from "@/types/japanese"

interface QuizCharacterDisplayProps {
  currentChar: JapaneseChar
  quizType: "hiragana" | "katakana" | "both"
  quizInputType: "choice" | "type"
}

export function QuizCharacterDisplay({ currentChar, quizType, quizInputType }: QuizCharacterDisplayProps) {
  return (
    <motion.div
      key={`char-${currentChar.romaji}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center bg-white dark:bg-gray-800 rounded-xl p-5 border-2 border-gray-100 dark:border-gray-700 relative overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
        {(quizType === "hiragana" || quizType === "both") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <Badge className="mb-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-800">Hiragana</Badge>
            <div className="text-9xl font-bold text-red-600 dark:text-red-400">{currentChar.hiragana}</div>
          </motion.div>
        )}

        {quizType === "both" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl text-gray-400 dark:text-gray-500 self-end pb-8"
          >
            +
          </motion.div>
        )}

        {(quizType === "katakana" || quizType === "both") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Badge className="mb-3 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 border-purple-200 dark:border-purple-800">Katakana</Badge>
            <div className="text-9xl font-bold text-purple-600 dark:text-purple-400">{currentChar.katakana}</div>
          </motion.div>
        )}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-600 dark:text-gray-400"
      >
        {quizInputType === "choice" ? "Select the correct pronunciation" : "Type the pronunciation (romaji)"}
      </motion.p>
    </motion.div>
  )
} 