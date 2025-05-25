import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { BookOpen, Brain, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export function LearningModes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-black dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Two Ways to Master Japanese
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Choose your preferred learning style or combine both for maximum effectiveness.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-gray-900 dark:to-red-900/20">
              <CardHeader>
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white">Learn Mode</CardTitle>
                </motion.div>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                  Study character pairs side-by-side with their shared pronunciations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Visual character comparison</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Pronunciation guides</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Self-paced learning</span>
                </motion.div>
                <Link href="/learn" className="block pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 font-bold">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-black dark:border-gray-700 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <CardHeader>
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white">Quiz Mode</CardTitle>
                </motion.div>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                  Test your knowledge with interactive quizzes and immediate feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Multiple choice questions</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Instant feedback</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Score tracking</span>
                </motion.div>
                <Link href="/quiz" className="block pt-4">
                  <Button className="w-full bg-black dark:bg-white hover:bg-red-700 dark:hover:bg-red-400 text-white dark:text-black font-bold">Take Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 