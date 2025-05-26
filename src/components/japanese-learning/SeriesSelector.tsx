import { Button } from "@/components/ui/button"
import { characterGroups } from "@/types/japanese"
import { cn } from "@/lib/utils"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { useRef, useState, useEffect } from "react"

interface SeriesSelectorProps {
  selectedIndices: number[]
  onChange: (indices: number[]) => void
}

export function SeriesSelector({ selectedIndices, onChange }: SeriesSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200 // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1) // -1 to account for rounding errors
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScroll()
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  return (
    <div className="relative group">
      <motion.div 
        ref={scrollContainerRef}
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
      
      {/* Left Arrow */}
      <div className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-200",
        showLeftArrow ? "group-hover:opacity-100 opacity-0" : "opacity-0 pointer-events-none"
      )}>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* Right Arrow */}
      <div className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-200",
        showRightArrow ? "group-hover:opacity-100 opacity-0" : "opacity-0 pointer-events-none"
      )}>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 