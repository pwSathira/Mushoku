import type { JapaneseChar, CharacterGroup } from "@/types/japanese"

export interface BaseProps {
  currentGroupIndex: number
  currentIndex: number
}

export interface CharacterCardProps extends BaseProps {
  currentChar: JapaneseChar
}

export interface NavigationProps extends BaseProps {
  currentGroup: CharacterGroup
  characterGroups: CharacterGroup[]
  onPreviousGroup: () => void
  onNextGroup: () => void
  onPreviousCharacter: () => void
  onNextCharacter: () => void
  onResetProgress: () => void
  onGroupSelect: (index: number) => void
  onCharacterSelect: (index: number) => void
}

export interface OverviewProps extends BaseProps {
  currentGroup: CharacterGroup
  onCharacterSelect: (index: number) => void
}

export interface ProgressProps {
  currentIndex: number
  totalCharacters: number
} 