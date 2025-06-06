import { Button } from "@/components/ui/button"
import { characterGroups } from "@/types/japanese"
import { cn } from "@/lib/utils"
import { Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"

interface SeriesSelectorProps {
  selectedIndices: number[]
  onChange: (indices: number[]) => void
}

export function SeriesSelector({ selectedIndices, onChange }: SeriesSelectorProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [columns, setColumns] = useState(4)
  const allSelected = selectedIndices.length === characterGroups.length

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 768) {
        setColumns(4)
      } else if (window.innerWidth >= 640) {
        setColumns(3)
      } else {
        setColumns(2)
      }
    }

    // Initial update
    updateColumns()

    // Add event listener
    window.addEventListener('resize', updateColumns)

    // Cleanup
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

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

  // Calculate row number for each item
  const getRowNumber = (index: number, columns: number) => {
    return Math.floor(index / columns)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4 shadow-sm border border-purple-100 dark:border-purple-900">
        {/* Header with select all button and dropdown toggle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-1 hover:bg-purple-100 dark:hover:bg-purple-900"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-purple-600 dark:text-purple-400 transition-transform duration-200",
                  isExpanded ? "rotate-180" : ""
                )}
              />
            </Button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Select Character Series
            </h3>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={allSelected ? "secondary" : "outline"}
              size="sm"
              className={cn(
                "font-bold px-4 py-2 rounded-full transition-all",
                allSelected
                  ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
                  : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800"
              )}
              onClick={handleAll}
            >
              <Check className="w-5 h-5 mr-2" />
              {allSelected ? "Deselect All" : "Select All"}
            </Button>
          </motion.div>
        </div>

        {/* Selection summary - always visible */}
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
          {selectedIndices.length === 0 ? (
            "No series selected"
          ) : (
            <span>
              {selectedIndices.length} of {characterGroups.length} series selected
            </span>
          )}
        </div>

        {/* Collapsible content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-visible"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                {characterGroups.map((group, idx) => {
                  const selected = selectedIndices.includes(idx)
                  const rowNumber = getRowNumber(idx, columns)
                  const isEvenRow = rowNumber % 2 === 0

                  return (
                    <motion.div
                      key={group.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHoveredIndex(idx)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      className="relative"
                    >
                      <div className="absolute inset-0 -m-2" /> {/* Invisible hit area for hover */}
                      <Button
                        variant={selected ? "secondary" : "outline"}
                        size="lg"
                        className={cn(
                          "w-full h-16 font-bold rounded-xl transition-all relative overflow-hidden",
                          selected
                            ? "bg-purple-600 text-white border-purple-700 dark:bg-purple-700 dark:text-white"
                            : isEvenRow
                              ? "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800/30"
                              : "bg-white dark:bg-gray-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800",
                          hoveredIndex === idx && !selected && "ring-2 ring-purple-400 dark:ring-purple-500"
                        )}
                        onClick={() => handleToggle(idx)}
                      >
                        <div className="flex flex-col items-center justify-center gap-1">
                          <span className="text-lg">{group.name}</span>
                          <span className="text-xs opacity-75">
                            {group.characters.length} chars.
                          </span>
                        </div>
                        {selected && (
                          <motion.div
                            className="absolute inset-0 bg-purple-500/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 