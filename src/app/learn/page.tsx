"use client"

import { useState } from "react"
import { LearnNavigation } from "@/components/japanese-learning/LearnNavigation"
import { CharacterCards } from "@/components/japanese-learning/CharacterCards"
import { NavigationSidebar } from "@/components/japanese-learning/NavigationSidebar"
import { CharacterOverview } from "@/components/japanese-learning/CharacterOverview"
import { ProgressSection } from "@/components/japanese-learning/ProgressSection"
import { characterGroups, type CharacterGroup, type JapaneseChar } from "@/types/japanese"

export default function LearnPage() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // Ensure we always have a valid character and group
  const currentGroup: CharacterGroup = characterGroups[currentGroupIndex] ?? characterGroups[0]!
  const currentChar: JapaneseChar = (currentGroup.characters[currentIndex] ?? currentGroup.characters[0])!

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
      <LearnNavigation />

      <div className="max-w-7xl mx-auto px-6 py-4">
        <ProgressSection 
          currentIndex={currentIndex} 
          totalCharacters={currentGroup.characters.length}
          mode="learn"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Character Cards */}
          <div className="lg:col-span-2 space-y-6">
            <CharacterCards 
              currentChar={currentChar}
              currentGroupIndex={currentGroupIndex}
              currentIndex={currentIndex}
            />
          </div>

          {/* Navigation Sidebar */}
          <div className="space-y-6">
            <NavigationSidebar
              currentGroupIndex={currentGroupIndex}
              currentIndex={currentIndex}
              currentGroup={currentGroup}
              characterGroups={characterGroups}
              onPreviousGroup={previousGroup}
              onNextGroup={nextGroup}
              onPreviousCharacter={previousCharacter}
              onNextCharacter={nextCharacter}
              onResetProgress={resetProgress}
              onGroupSelect={setCurrentGroupIndex}
              onCharacterSelect={setCurrentIndex}
            />

            <CharacterOverview
              currentGroup={currentGroup}
              currentGroupIndex={currentGroupIndex}
              currentIndex={currentIndex}
              onCharacterSelect={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  )
}