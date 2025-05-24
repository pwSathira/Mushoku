"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { BookOpen, Brain, Zap, Target, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "../components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-red-200 dark:border-red-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/Mushoku_Logo.png" alt="Mushoku" width={64} height={64} />
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/learn">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">Start Learning</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-900">
        {/* Decorative Elements */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-10">
          <Image src="/Mushoku_Logo.png" alt="Decorative Logo" width={320} height={320} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge variant="secondary" className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-800 mb-4 font-bold">
              Master Japanese Writing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-black dark:text-white">
              <span className="bg-gradient-to-r from-red-600 to-black dark:from-red-500 dark:to-white bg-clip-text text-transparent">
                Learn Hiragana & Katakana
              </span>
              <br />
              <span className="text-black dark:text-white">with 無職</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Master both Japanese writing systems simultaneously. Our unique approach helps you understand the connection between Hiragana and Katakana.
            </p>
          </div>

          {/* Character Preview */}
          <div className="flex justify-center items-center gap-8 mb-12">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Why Learn Both Together?</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative approach teaches Hiragana and Katakana as pairs, helping you understand their relationship and master Japanese writing faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 dark:border-red-800 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl text-black dark:text-white">Faster Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Learn both writing systems simultaneously by understanding their shared phonetic foundation. No need to learn them separately!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-700 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl text-black dark:text-white">Interactive Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Test your knowledge with engaging quizzes that reinforce the connection between Hiragana and Katakana characters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-black dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black dark:text-white" />
                </div>
                <CardTitle className="text-xl text-black dark:text-white">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-700 dark:text-gray-300">
                  Monitor your learning journey with detailed progress tracking and personalized feedback on your performance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Two Ways to Master Japanese</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Choose your preferred learning style or combine both for maximum effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-gray-900 dark:to-red-900/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white">Learn Mode</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                  Study character pairs side-by-side with their shared pronunciations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Visual character comparison</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Pronunciation guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Self-paced learning</span>
                </div>
                <Link href="/learn" className="block pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 font-bold">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-black dark:border-gray-700 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white">Quiz Mode</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                  Test your knowledge with interactive quizzes and immediate feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Multiple choice questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Instant feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">Score tracking</span>
                </div>
                <Link href="/learn" className="block pt-4">
                  <Button className="w-full bg-black dark:bg-white hover:bg-red-700 dark:hover:bg-red-400 text-white dark:text-black font-bold">Take Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-black dark:from-red-700 dark:to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Japanese Writing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have successfully mastered Hiragana and Katakana using our innovative paired learning approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white dark:bg-gray-800 text-red-700 dark:text-red-400 font-bold border border-red-200 dark:border-red-800">
                <BookOpen className="w-5 h-5 mr-2" />
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black dark:bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h3 className="text-3xl font-extrabold text-red-600 dark:text-red-400 tracking-widest">無職</h3>
          </div>
          <p className="text-gray-400 mb-4">Learn Hiragana and Katakana Together</p>
          <p className="text-sm text-gray-500">© 2025 Made by Sathira Williams. Made with ❤️ for language learners.</p>
        </div>
      </footer>
    </div>
  )
}
