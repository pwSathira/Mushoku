import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { BookOpen, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WordRotate } from "./magicui/word-rotate"
import { motion } from "motion/react"

export function Hero() {
  const mushokuVariations = ["無職", "ムショク", "むしょく", "Mushoku"]

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-900">
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10"
      >
        <Image src="/Mushoku_Logo.png" alt="Decorative Logo" width={320} height={320} />
      </motion.div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="secondary" className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-800 mb-4 font-bold">
              Master Japanese Writing
            </Badge>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-black dark:from-red-500 dark:to-white bg-clip-text text-transparent">
              Learn Hiragana & Katakana
            </span>
            <br />
            <span className="text-black dark:text-white">with </span>
            <WordRotate 
              words={mushokuVariations} 
              className="inline-block text-black dark:text-white"
              duration={2000}
              motionProps={{
                initial: { opacity: 0, y: 20, scale: 0.8 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: -20, scale: 0.8 },
                transition: { 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  scale: { duration: 0.3 }
                }
              }}
            />
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Master both Japanese writing systems simultaneously. Our unique approach helps you understand the connection between Hiragana and Katakana.
          </motion.p>
        </div>

        {/* Character Preview */}
        <motion.div 
          className="flex justify-center items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-6xl font-bold text-black dark:text-white mb-2">あ</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Hiragana</p>
          </div>
          <div className="text-4xl text-gray-400 dark:text-gray-500">+</div>
          <div className="text-center">
            <div className="text-6xl font-bold text-black dark:text-white mb-2">ア</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Katakana</p>
          </div>
          <div className="text-4xl text-gray-400 dark:text-gray-500">=</div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">/a/</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Same Sound</p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/learn">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-bold">
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 px-8 py-3 text-lg font-bold"
          >
            <Brain className="w-5 h-5 mr-2" />
            Take a Quiz
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 