"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, CheckCircle, XCircle, Home, Shuffle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Japanese character data with Hiragana and Katakana pairs
const japaneseChars = [
  { sound: "a", hiragana: "あ", katakana: "ア", romaji: "a" },
  { sound: "i", hiragana: "い", katakana: "イ", romaji: "i" },
  { sound: "u", hiragana: "う", katakana: "ウ", romaji: "u" },
  { sound: "e", hiragana: "え", katakana: "エ", romaji: "e" },
  { sound: "o", hiragana: "お", katakana: "オ", romaji: "o" },
  { sound: "ka", hiragana: "か", katakana: "カ", romaji: "ka" },
  { sound: "ki", hiragana: "き", katakana: "キ", romaji: "ki" },
  { sound: "ku", hiragana: "く", katakana: "ク", romaji: "ku" },
  { sound: "ke", hiragana: "け", katakana: "ケ", romaji: "ke" },
  { sound: "ko", hiragana: "こ", katakana: "コ", romaji: "ko" },
  { sound: "sa", hiragana: "さ", katakana: "サ", romaji: "sa" },
  { sound: "shi", hiragana: "し", katakana: "シ", romaji: "shi" },
  { sound: "su", hiragana: "す", katakana: "ス", romaji: "su" },
  { sound: "se", hiragana: "せ", katakana: "セ", romaji: "se" },
  { sound: "so", hiragana: "そ", katakana: "ソ", romaji: "so" },
]

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showAnswer, setShowAnswer] = useState(false)
  const [quizType, setQuizType] = useState<"hiragana" | "katakana" | "both">("hiragana")
  const [quizInputType, setQuizInputType] = useState<"choice" | "type">("choice")
  const [typedAnswer, setTypedAnswer] = useState("")
  const [isTypingCorrect, setIsTypingCorrect] = useState<boolean | null>(null)
  const [currentOptions, setCurrentOptions] = useState<string[]>([])
  const pathname = usePathname()
  const router = useRouter()

  // Set initial options when component mounts
  useEffect(() => {
    const correctSound = japaneseChars[0]?.romaji ?? ""
    const soundOptions = [correctSound]
    while (soundOptions.length < 4) {
      const randomChar = japaneseChars[Math.floor(Math.random() * japaneseChars.length)] ?? japaneseChars[0]!
      if (!soundOptions.includes(randomChar.romaji)) {
        soundOptions.push(randomChar.romaji)
      }
    }
    setCurrentOptions(soundOptions.sort(() => Math.random() - 0.5))
  }, []) // Empty dependency array means this runs once on mount

  const currentChar = japaneseChars[currentIndex] ?? japaneseChars[0]!
  const progress = ((currentIndex + 1) / japaneseChars.length) * 100

  const nextCharacter = () => {
    if (currentIndex < japaneseChars.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
      setTypedAnswer("")
      setIsTypingCorrect(null)
      // Generate new options for the next question
      const correctSound = japaneseChars[currentIndex + 1]?.romaji ?? ""
      const soundOptions = [correctSound]
      while (soundOptions.length < 4) {
        const randomChar = japaneseChars[Math.floor(Math.random() * japaneseChars.length)] ?? japaneseChars[0]!
        if (!soundOptions.includes(randomChar.romaji)) {
          soundOptions.push(randomChar.romaji)
        }
      }
      setCurrentOptions(soundOptions.sort(() => Math.random() - 0.5))
    }
  }

  const resetProgress = () => {
    setCurrentIndex(0)
    setScore(0)
    setQuizAnswers([])
    setShowAnswer(false)
    setTypedAnswer("")
    setIsTypingCorrect(null)
    // Generate initial options
    const correctSound = japaneseChars[0]?.romaji ?? ""
    const soundOptions = [correctSound]
    while (soundOptions.length < 4) {
      const randomChar = japaneseChars[Math.floor(Math.random() * japaneseChars.length)] ?? japaneseChars[0]!
      if (!soundOptions.includes(randomChar.romaji)) {
        soundOptions.push(randomChar.romaji)
      }
    }
    setCurrentOptions(soundOptions.sort(() => Math.random() - 0.5))
  }

  const shuffleQuiz = () => {
    // Shuffle the remaining characters
    const remainingChars = [...japaneseChars.slice(currentIndex)]
    const shuffledChars = remainingChars.sort(() => Math.random() - 0.5)
    const newChars = [...japaneseChars.slice(0, currentIndex), ...shuffledChars]
    japaneseChars.splice(0, japaneseChars.length, ...newChars)
    
    // Generate new options for current character
    const correctSound = japaneseChars[currentIndex]?.romaji ?? ""
    const soundOptions = [correctSound]
    while (soundOptions.length < 4) {
      const randomChar = japaneseChars[Math.floor(Math.random() * japaneseChars.length)] ?? japaneseChars[0]!
      if (!soundOptions.includes(randomChar.romaji)) {
        soundOptions.push(randomChar.romaji)
      }
    }
    setCurrentOptions(soundOptions.sort(() => Math.random() - 0.5))
  }

  const handleQuizAnswer = (isCorrect: boolean) => {
    const newAnswers = [...quizAnswers]
    newAnswers[currentIndex] = isCorrect
    setQuizAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    setShowAnswer(true)

    setTimeout(() => {
      nextCharacter()
    }, 1500)
  }

  const handleTypedAnswer = (answer: string) => {
    const isCorrect = answer.toLowerCase().trim() === currentChar.romaji.toLowerCase()

    setIsTypingCorrect(isCorrect)
    setShowAnswer(true)

    const newAnswers = [...quizAnswers]
    newAnswers[currentIndex] = isCorrect
    setQuizAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setTypedAnswer("")
      setIsTypingCorrect(null)
      nextCharacter()
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top Navigation Bar */}
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">Sound Recognition Quiz</h2>
              <p className="text-gray-700 dark:text-gray-300">Test your knowledge with interactive quizzes</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Character {currentIndex + 1} of {japaneseChars.length}
              </div>
              <div className="text-lg font-semibold text-black dark:text-white">
                Score: {score}/{quizAnswers.length}
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Quiz Interface */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Quiz Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-purple-100 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-1 text-black dark:text-white">What sound do these characters make?</CardTitle>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                  {quizInputType === "choice"
                    ? `Select the correct pronunciation`
                    : `Type the sound (romaji) for these characters`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Character Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`char-${currentIndex}`}
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
                </AnimatePresence>

                {quizInputType === "choice" ? (
                  /* Multiple Choice for Sounds */
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`options-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 gap-4 justify-items-center w-full max-w-md mx-auto"
                    >
                      {currentOptions.map((option, index) => {
                        const isCorrect = option === currentChar.romaji
                        const isAnswered = showAnswer

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Button
                              variant="outline"
                              className={`w-full h-20 text-3xl font-bold border-2 transition-all duration-300 ${
                                isAnswered
                                  ? isCorrect
                                    ? "bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-400 text-green-700 dark:text-green-300 shadow-lg"
                                    : "bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-400 text-red-700 dark:text-red-300"
                                  : "hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
                              }`}
                              onClick={() => !showAnswer && handleQuizAnswer(isCorrect)}
                              disabled={showAnswer}
                            >
                              <div className="flex items-center gap-3">
                                /{option}/{isAnswered && isCorrect && <CheckCircle className="w-6 h-6" />}
                                {isAnswered && !isCorrect && <XCircle className="w-6 h-6" />}
                              </div>
                            </Button>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  /* Typing Interface for Sounds */
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`typing-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="max-w-2xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="relative"
                        >
                          <input
                            type="text"
                            value={typedAnswer}
                            onChange={(e) => setTypedAnswer(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && typedAnswer.trim() && !showAnswer) {
                                handleTypedAnswer(typedAnswer)
                              }
                            }}
                            placeholder={`Type the sound`}
                            className={`w-full text-center text-4xl font-bold py-6 px-6 rounded-xl border-2 transition-all duration-300 ${
                              isTypingCorrect === null
                                ? "border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 bg-white dark:bg-gray-800 text-black dark:text-white"
                                : isTypingCorrect
                                  ? "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                                  : "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300"
                            }`}
                            disabled={showAnswer}
                            autoFocus
                          />
                          {isTypingCorrect !== null && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2"
                            >
                              {isTypingCorrect ? (
                                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                              ) : (
                                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                              )}
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4 text-center"
                        >
                          <Button
                            onClick={() => handleTypedAnswer(typedAnswer)}
                            disabled={!typedAnswer.trim() || showAnswer}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                          >
                            Submit Answer
                          </Button>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center"
                        >
                          <p>💡 Tip: Type the romaji pronunciation (like &quot;ka&quot;, &quot;shi&quot;, &quot;tsu&quot;)</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Answer Feedback */}
                {showAnswer && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl p-8 border-2 border-gray-100 dark:border-gray-700 shadow-xl max-w-lg w-full mx-auto flex flex-col items-center">
                        {isTypingCorrect === false || (quizInputType === "choice" && !quizAnswers[currentIndex]) ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl font-semibold mb-4 text-black dark:text-white"
                          >
                            Correct pronunciation: <span className="text-orange-600 dark:text-orange-400">/{currentChar.romaji}/</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400"
                          >
                            Correct!
                          </motion.div>
                        )}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex flex-wrap items-center justify-center gap-6 text-lg text-gray-600 dark:text-gray-400"
                        >
                          <div className="text-center">
                            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">{currentChar.hiragana}</div>
                            <div className="text-sm">Hiragana</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">{currentChar.katakana}</div>
                            <div className="text-sm">Katakana</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">/{currentChar.romaji}/</div>
                            <div className="text-sm">Sound</div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Toggles */}
            <div className="space-y-4">
              {/* Character Display Toggle */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-purple-400 text-sm mb-1">Display</div>
                <div className="flex gap-2">
                  <Button
                    variant={quizType === "hiragana" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuizType("hiragana")}
                    className={quizType === "hiragana" ? "bg-red-600 hover:bg-red-700" : "border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"}
                  >
                    Show Hiragana
                  </Button>
                  <Button
                    variant={quizType === "katakana" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuizType("katakana")}
                    className={
                      quizType === "katakana" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400"
                    }
                  >
                    Show Katakana
                  </Button>
                  <Button
                    variant={quizType === "both" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuizType("both")}
                    className={
                      quizType === "both" ? "bg-indigo-600 hover:bg-indigo-700" : "border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400"
                    }
                  >
                    Show Both
                  </Button>
                </div>
              </div>
              {/* Input Type Toggle */}
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-purple-400 text-sm mb-1">Quiz Mode</div>
                <div className="flex w-full rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                  <button
                    type="button"
                    onClick={() => setQuizInputType("choice")}
                    className={cn(
                      "flex-1 px-4 py-2 rounded-full text-base font-semibold transition-all focus:outline-none",
                      quizInputType === "choice"
                        ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm"
                        : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    )}
                  >
                    Multiple Choice
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuizInputType("type")}
                    className={cn(
                      "flex-1 px-4 py-2 rounded-full text-base font-semibold transition-all focus:outline-none",
                      quizInputType === "type"
                        ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm"
                        : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    )}
                  >
                    Type Sound
                  </button>
                </div>
              </div>
            </div>
    
            {/* Quiz Controls */}
            <Card className="border-red-100 dark:border-red-800">
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-purple-400 text-sm mb-1">Quiz Controls</div>
                  <Button 
                    variant="outline" 
                    onClick={resetProgress} 
                    className="w-full border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/"
                  >
                    <Shuffle className="w-4 h-4 mr-2 mb-2" />
                    Reset Quiz
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={shuffleQuiz}
                    className="w-full border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/50"
                  >
                    <Shuffle className="w-4 h-4 mr-2" />
                    Shuffle Remaining
                  </Button>
                  <Link href="/learn">
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 mt-2"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Back to Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 