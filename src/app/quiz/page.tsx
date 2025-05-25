"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, BookOpen, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { characterGroups} from "@/types/japanese"
import { ProgressSection } from "@/components/japanese-learning/ProgressSection"
import { QuizCharacterDisplay } from "@/components/japanese-learning/QuizCharacterDisplay"
import { QuizModeToggle } from "@/components/japanese-learning/QuizModeToggle"
import { SeriesSelector } from "@/components/japanese-learning/SeriesSelector"
import { QuizControls } from "@/components/japanese-learning/QuizControls"

export default function QuizPage() {
  const [selectedGroupIndices, setSelectedGroupIndices] = useState<number[]>([0])
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [quizType, setQuizType] = useState<"hiragana" | "katakana" | "both">("both")
  const [quizInputType, setQuizInputType] = useState<"choice" | "type">("choice")
  const [typedAnswer, setTypedAnswer] = useState<string>("")
  const [isTypingCorrect, setIsTypingCorrect] = useState<boolean | null>(null)
  const [currentOptions, setCurrentOptions] = useState<string[]>([])
  const [quizChars, setQuizChars] = useState<typeof characterGroups[number]["characters"]>([])
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false)
  const pathname = usePathname()
  const router = useRouter()

  // Get the pool of characters from selected groups
  const selectedGroups = selectedGroupIndices
    .map(idx => characterGroups[idx])
    .filter((group): group is typeof characterGroups[number] => group !== undefined)
  
  // Update quiz characters when selected groups change
  useEffect(() => {
    const newQuizChars = selectedGroups.flatMap(group => group.characters)
    setQuizChars(newQuizChars)
    if (newQuizChars.length < 4) {
      setCurrentOptions([])
      setCurrentIndex(0)
      return
    }
    generateNewOptions(0, newQuizChars)
  }, [selectedGroupIndices])

  // Generate options for the current character
  const generateNewOptions = (index: number, chars: typeof quizChars = quizChars) => {
    if (!chars || chars.length < 4) {
      setCurrentOptions([])
      return
    }
    const correctSound = chars[index]?.romaji ?? ""
    const soundOptions = [correctSound]
    while (soundOptions.length < 4 && chars.length > 1) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)] ?? chars[0]!
      if (!soundOptions.includes(randomChar.romaji)) {
        soundOptions.push(randomChar.romaji)
      }
    }
    setCurrentOptions(soundOptions.sort(() => Math.random() - 0.5))
  }

  // Regenerate options whenever quizChars or currentIndex changes
  useEffect(() => {
    generateNewOptions(currentIndex, quizChars)
  }, [quizChars, currentIndex])

  const currentChar = quizChars[currentIndex] ?? quizChars[0]!

  const nextCharacter = () => {
    if (currentIndex < quizChars.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      setShowAnswer(false)
      setTypedAnswer("")
      setIsTypingCorrect(null)
      generateNewOptions(nextIndex, quizChars)
    } else {
      // End of quiz: hide answer overlay and show complete
      setTimeout(() => {
        setShowAnswer(false)
        setTypedAnswer("")
        setIsTypingCorrect(null)
        setIsQuizComplete(true)
      }, 500)
    }
  }

  const resetProgress = () => {
    setCurrentIndex(0)
    setScore(0)
    setQuizAnswers([])
    setShowAnswer(false)
    setTypedAnswer("")
    setIsTypingCorrect(null)
    setIsQuizComplete(false)
    generateNewOptions(0, quizChars)
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
    }, isCorrect ? 800 : 1500)
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
    }, isCorrect ? 1000 : 2000)
  }

  // Handle group selection change (multi-select)
  const handleGroupChange = (indices: number[]) => {
    setSelectedGroupIndices(indices)
    setCurrentIndex(0)
    setScore(0)
    setQuizAnswers([])
    setShowAnswer(false)
    setTypedAnswer("")
    setIsTypingCorrect(null)
  }

  const shuffleQuiz = () => {
    if (quizChars.length < 2) return;
    // Shuffle all characters
    const shuffled = [...quizChars].sort(() => Math.random() - 0.5);
    setQuizChars(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setTypedAnswer("");
    setIsTypingCorrect(null);
    generateNewOptions(0, shuffled);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Top Navigation Bar */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-red-200 dark:border-red-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Mushoku_Logo.png" alt="Mushoku" width={48} height={48} className="sm:w-16 sm:h-16 w-12 h-12" />
            </Link>
            <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
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

      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-4">
        {/* Progress Section */}
        <ProgressSection 
          currentIndex={currentIndex}
          totalCharacters={quizChars.length}
          mode="quiz"
          score={score}
          quizAnswers={quizAnswers}
        />
      
        {/* Quiz Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          
          {/* Main Quiz Area */}
          <div className="lg:col-span-2 space-y-4">
            {quizChars.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-96 text-xl text-gray-500 dark:text-gray-400 font-semibold border-2 border-dashed border-purple-200 dark:border-purple-800 rounded-xl bg-purple-50/50 dark:bg-purple-900/30">
                Please select at least one group to start the quiz.
              </div>
            ) : quizChars.length < 4 ? (
              <div className="flex flex-col items-center justify-center h-96 text-xl text-gray-500 dark:text-gray-400 font-semibold border-2 border-dashed border-purple-200 dark:border-purple-800 rounded-xl bg-purple-50/50 dark:bg-purple-900/30">
                Please select at least 4 characters (from one or more groups) to start the quiz.
              </div>
            ) : isQuizComplete ? (
              <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-indigo-50 dark:from-green-900/50 dark:to-indigo-900/50 flex flex-col items-center justify-center h-96">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-1 text-green-700 dark:text-green-300">Quiz Complete!</CardTitle>
                  <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                    You scored <span className="font-bold text-green-600 dark:text-green-400">{score} / {quizChars.length}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8" onClick={resetProgress}>
                    Restart Quiz
                  </Button>
                  <Link href="/learn">
                    <Button variant="outline">Back to Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
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
                    <QuizCharacterDisplay 
                      currentChar={currentChar}
                      quizType={quizType}
                      quizInputType={quizInputType}
                    />
                  </AnimatePresence>

                  {quizInputType === "choice" && quizChars.length >= 4 && currentChar ? (
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
                          const isCorrect = currentChar && option === currentChar.romaji
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
                  ) : quizInputType === "type" && quizChars.length >= 4 && currentChar ? (
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
                  ) : null}

                  {/* Answer Feedback */}
                  {showAnswer && quizChars.length >= 4 && currentChar && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center z-20 px-2"
                      >
                        <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl p-4 sm:p-8 border-2 border-gray-100 dark:border-gray-700 shadow-xl w-full max-w-full sm:max-w-lg mx-auto flex flex-col items-center">
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
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 mt-4 lg:mt-0">
            {/* Series Selector (multi-select) */}
            <SeriesSelector selectedIndices={selectedGroupIndices} onChange={handleGroupChange} />
            {/* Toggles */}
            <QuizModeToggle 
              quizType={quizType}
              quizInputType={quizInputType}
              onQuizTypeChange={setQuizType}
              onQuizInputTypeChange={setQuizInputType}
            />
            {/* Quiz Controls */}
            <QuizControls 
              onResetProgress={resetProgress}
              onShuffleQuiz={shuffleQuiz}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 