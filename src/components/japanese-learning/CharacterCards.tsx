import { HiraganaCard } from "./cards/HiraganaCard"
import { KatakanaCard } from "./cards/KatakanaCard"
import { SoundConnectionCard } from "./cards/SoundConnectionCard"
import type { CharacterCardProps } from "./types"

export function CharacterCards({ currentChar, currentGroupIndex, currentIndex }: CharacterCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <HiraganaCard 
        char={currentChar}
        groupIndex={currentGroupIndex}
        charIndex={currentIndex}
      />
      <KatakanaCard 
        char={currentChar}
        groupIndex={currentGroupIndex}
        charIndex={currentIndex}
      />
      <SoundConnectionCard char={currentChar} />
    </div>
  )
} 