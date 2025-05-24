import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Zap, Target, Users } from "lucide-react"
import { motion } from "motion/react"

export function Features() {
  return (
    <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
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
            Why Learn Both Together?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our innovative approach teaches Hiragana and Katakana as pairs, helping you understand their relationship and master Japanese writing faster.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="border-red-100 dark:border-red-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Zap className="w-8 h-8 text-red-600 dark:text-red-400" />
                </motion.div>
                <CardTitle className="text-xl text-black dark:text-white">Faster Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Learn both writing systems simultaneously by understanding their shared phonetic foundation. No need to learn them separately!
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="border-red-200 dark:border-red-700 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
                </motion.div>
                <CardTitle className="text-xl text-black dark:text-white">Interactive Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Test your knowledge with engaging quizzes that reinforce the connection between Hiragana and Katakana characters.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Card className="border-black dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Users className="w-8 h-8 text-black dark:text-white" />
                </motion.div>
                <CardTitle className="text-xl text-black dark:text-white">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Monitor your learning journey with detailed progress tracking and personalized feedback on your performance.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 