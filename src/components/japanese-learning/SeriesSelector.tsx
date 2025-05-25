import { Button } from "@/components/ui/button"
import { characterGroups } from "@/types/japanese"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { motion } from "motion/react"

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
      <motion.div 
        className="flex items-center gap-2 overflow-x-auto py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            key="all"
            variant={allSelected ? "secondary" : "outline"}
            size="sm"
            className={cn(
              "font-bold px-2 py-1 rounded-full transition-all min-w-[2rem] h-9 flex-shrink-0",
              allSelected
                ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
                : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800"
            )}
            onClick={handleAll}
          >
            <Check className="w-4 h-4" />
          </Button>
        </motion.div>
        {characterGroups.map((group, idx) => {
          const selected = selectedIndices.includes(idx)
          return (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selected ? "secondary" : "outline"}
                size="sm"
                className={cn(
                  "font-bold px-4 py-1 rounded-full transition-all min-w-[6rem] h-9 flex-shrink-0",
                  selected
                    ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
                    : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800"
                )}
                onClick={() => handleToggle(idx)}
              >
                {group.name}
              </Button>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
} 