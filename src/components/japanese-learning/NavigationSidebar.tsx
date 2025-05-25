import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { ArrowLeft, ArrowRight, RotateCcw, ChevronsUpDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { NavigationProps } from "./types"

export function NavigationSidebar({
  currentGroupIndex,
  currentIndex,
  currentGroup,
  characterGroups,
  onPreviousGroup,
  onNextGroup,
  onPreviousCharacter,
  onNextCharacter,
  onResetProgress,
  onGroupSelect,
}: NavigationProps) {
  return (
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
                onClick={onPreviousGroup}
                disabled={currentGroupIndex === 0}
                className="flex-1 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous Group
              </Button>
              <Button
                size="sm"
                onClick={onNextGroup}
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
                            onSelect={() => onGroupSelect(idx)}
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
                onClick={onPreviousCharacter}
                disabled={currentIndex === 0}
                className="flex-1 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                size="sm"
                onClick={onNextCharacter}
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
            onClick={onResetProgress} 
            className="w-full border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Progress
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 