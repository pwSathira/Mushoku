import { Button } from "@/components/ui/button"
import { characterGroups } from "@/types/japanese"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface SeriesSelectorProps {
  selectedIndices: number[]
  onChange: (indices: number[]) => void
}

export function SeriesSelector({ selectedIndices, onChange }: SeriesSelectorProps) {
  const allSelected = selectedIndices.length === characterGroups.length

  // Build a map of label counts
  const labelCounts: Record<string, number> = {}
  characterGroups.forEach(group => {
    const label = group.name
    labelCounts[label] = (labelCounts[label] ?? 0) + 1
  })

  const handleToggle = (idx: number) => {
    if (selectedIndices.includes(idx)) {
      onChange(selectedIndices.filter(i => i !== idx))
    } else {
      onChange([...selectedIndices, idx])
    }
  }

  const handleAll = () => {
    if (allSelected) {
      onChange([])
    } else {
      onChange(characterGroups.map((_, idx) => idx))
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-800 scrollbar-track-transparent">
        <Button
          key="all"
          variant={allSelected ? "secondary" : "outline"}
          size="sm"
          className={cn(
            "font-bold px-2 py-1 rounded-full transition-all min-w-[2rem] h-8 flex-shrink-0",
            allSelected
              ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
              : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800"
          )}
          onClick={handleAll}
        >
          <Check className="w-4 h-4" />
        </Button>
        {characterGroups.map((group, idx) => {
          const selected = selectedIndices.includes(idx)
          return (
            <Button
              key={group.name}
              variant={selected ? "secondary" : "outline"}
              size="sm"
              className={cn(
                "font-bold px-4 py-1 rounded-full transition-all min-w-[6rem] h-8 flex-shrink-0",
                selected
                  ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
                  : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800"
              )}
              onClick={() => handleToggle(idx)}
            >
              {group.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
} 