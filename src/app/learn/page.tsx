"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { ChevronsUpDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type JapaneseChar = {
  sound: string
  hiragana: string
  katakana: string
  romaji: string
}

type CharacterGroup = {
  name: string
  characters: JapaneseChar[]
}

// Japanese character data with Hiragana and Katakana pairs
const characterGroups: CharacterGroup[] = [
  {
    name: "Basic Vowels",
    characters: [
      { sound: "a", hiragana: "あ", katakana: "ア", romaji: "a" },
      { sound: "i", hiragana: "い", katakana: "イ", romaji: "i" },
      { sound: "u", hiragana: "う", katakana: "ウ", romaji: "u" },
      { sound: "e", hiragana: "え", katakana: "エ", romaji: "e" },
      { sound: "o", hiragana: "お", katakana: "オ", romaji: "o" },
    ]
  },
  {
    name: "K-Series",
    characters: [
      { sound: "ka", hiragana: "か", katakana: "カ", romaji: "ka" },
      { sound: "ki", hiragana: "き", katakana: "キ", romaji: "ki" },
      { sound: "ku", hiragana: "く", katakana: "ク", romaji: "ku" },
      { sound: "ke", hiragana: "け", katakana: "ケ", romaji: "ke" },
      { sound: "ko", hiragana: "こ", katakana: "コ", romaji: "ko" },
    ]
  },
  {
    name: "S-Series",
    characters: [
      { sound: "sa", hiragana: "さ", katakana: "サ", romaji: "sa" },
      { sound: "shi", hiragana: "し", katakana: "シ", romaji: "shi" },
      { sound: "su", hiragana: "す", katakana: "ス", romaji: "su" },
      { sound: "se", hiragana: "せ", katakana: "セ", romaji: "se" },
      { sound: "so", hiragana: "そ", katakana: "ソ", romaji: "so" },
    ]
  }
]

export default function LearnPage() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ensure we always have a valid character and group
  const currentGroup: CharacterGroup = characterGroups[currentGroupIndex] ?? characterGroups[0]!
  const currentChar = (currentGroup.characters[currentIndex] ?? currentGroup.characters[0])!
  const progress = ((currentIndex + 1) / currentGroup.characters.length) * 100

  const nextCharacter = () => {
    if (currentIndex < currentGroup.characters.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousCharacter = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const resetProgress = () => {
    setCurrentIndex(0)
  }

  const nextGroup = () => {
    if (currentGroupIndex < characterGroups.length - 1) {
      setCurrentGroupIndex(currentGroupIndex + 1)
      setCurrentIndex(0)
    }
  }

  const previousGroup = () => {
    if (currentGroupIndex > 0) {
      setCurrentGroupIndex(currentGroupIndex - 1)
      setCurrentIndex(0)
    }
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
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">Learning Mode</h2>
              <p className="text-gray-700 dark:text-gray-300">Study character pairs and their pronunciations</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Character {currentIndex + 1} of {currentGroup.characters.length}
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Learning Mode - Horizontal Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Character Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hiragana Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hiragana-${currentGroupIndex}-${currentIndex}`}
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
                      <div className="text-9xl font-bold text-red-600 dark:text-red-400 mb-4 leading-none">{currentChar.hiragana}</div>
                      <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">/{currentChar.romaji}/</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Katakana Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`katakana-${currentGroupIndex}-${currentIndex}`}
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
                      <div className="text-9xl font-bold text-purple-600 dark:text-purple-400 mb-4 leading-none">{currentChar.katakana}</div>
                      <div className="text-2xl font-medium text-gray-700 dark:text-gray-300">/{currentChar.romaji}/</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sound Connection Card */}
            <Card className="border-2 border-orange-100 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/50 dark:to-yellow-900/50">
              <CardContent className="text-center py-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-red-600 dark:text-red-400">{currentChar.hiragana}</span>
                  <span className="text-2xl text-gray-400 dark:text-gray-500">+</span>
                  <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">{currentChar.katakana}</span>
                  <span className="text-2xl text-gray-400 dark:text-gray-500">=</span>
                  <Badge variant="outline" className="text-xl px-4 py-2 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-400">
                    /{currentChar.romaji}/
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Both characters represent the same sound</p>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Sidebar */}
          <div className="space-y-6">
            {/* Character Navigation */}
            <Card className="border-red-100 dark:border-red-800">
              <CardContent className="space-y-4">
                {/* Group Navigation */}
                <div className="space-y-2">
                  <div className="font-semibold text-purple-400 text-sm mb-1">Group Navigation</div>
                  <div className="flex gap-2 mb-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={previousGroup}
                      disabled={currentGroupIndex === 0}
                      className="flex-1 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Previous Group
                    </Button>
                    <Button
                      size="sm"
                      onClick={nextGroup}
                      disabled={currentGroupIndex === characterGroups.length - 1}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Next Group
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="group-select" className="block text-purple-400 font-semibold mb-1">
                      Select Group
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={false}
                          className="w-full justify-between"
                        >
                          {characterGroups[currentGroupIndex]?.name ?? "Select a group"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search group..." />
                          <CommandList>
                            <CommandEmpty>No group found.</CommandEmpty>
                            <CommandGroup>
                              {characterGroups.map((group, idx) => (
                                <CommandItem
                                  key={group.name}
                                  value={group.name}
                                  onSelect={() => {
                                    setCurrentGroupIndex(idx)
                                    setCurrentIndex(0)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      currentGroupIndex === idx ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {group.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                {/* Character Navigation */}
                <div className="space-y-2">
                  <div className="font-semibold text-red-400 text-sm mb-1">Character Navigation</div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={previousCharacter}
                      disabled={currentIndex === 0}
                      className="flex-1 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                    <Button
                      size="sm"
                      onClick={nextCharacter}
                      disabled={currentIndex === currentGroup.characters.length - 1}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={resetProgress} 
                  className="w-full border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Progress
                </Button>
              </CardContent>
            </Card>

            {/* Character Overview */}
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
                        onClick={() => setCurrentIndex(index)}
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
          </div>
        </div>
      </div>
    </div>
  )
}