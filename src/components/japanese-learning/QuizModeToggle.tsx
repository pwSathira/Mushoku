import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuizModeToggleProps {
  quizType: "hiragana" | "katakana" | "both"
  quizInputType: "choice" | "type"
  onQuizTypeChange: (type: "hiragana" | "katakana" | "both") => void
  onQuizInputTypeChange: (type: "choice" | "type") => void
}

export function QuizModeToggle({ 
  quizType, 
  quizInputType, 
  onQuizTypeChange, 
  onQuizInputTypeChange 
}: QuizModeToggleProps) {
  return (
    <div className="space-y-4">
      {/* Character Display Toggle */}
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-purple-400 text-sm mb-1">Display</div>
        <div className="flex gap-2">
          <Button
            variant={quizType === "hiragana" ? "default" : "outline"}
            size="sm"
            onClick={() => onQuizTypeChange("hiragana")}
            className={quizType === "hiragana" ? "bg-red-600 hover:bg-red-700" : "border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"}
          >
            Show Hiragana
          </Button>
          <Button
            variant={quizType === "katakana" ? "default" : "outline"}
            size="sm"
            onClick={() => onQuizTypeChange("katakana")}
            className={
              quizType === "katakana" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400"
            }
          >
            Show Katakana
          </Button>
          <Button
            variant={quizType === "both" ? "default" : "outline"}
            size="sm"
            onClick={() => onQuizTypeChange("both")}
            className={
              quizType === "both" ? "bg-indigo-600 hover:bg-indigo-700" : "border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400"
            }
          >
            Show Both
          </Button>
        </div>
      </div>
      {/* Input Type Toggle */}
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-purple-400 text-sm mb-1">Quiz Mode</div>
        <div className="flex w-full rounded-full bg-gray-100 dark:bg-gray-800 p-1">
          <button
            type="button"
            onClick={() => onQuizInputTypeChange("choice")}
            className={cn(
              "flex-1 px-4 py-2 rounded-full text-base font-semibold transition-all focus:outline-none",
              quizInputType === "choice"
                ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm"
                : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            )}
          >
            Multiple Choice
          </button>
          <button
            type="button"
            onClick={() => onQuizInputTypeChange("type")}
            className={cn(
              "flex-1 px-4 py-2 rounded-full text-base font-semibold transition-all focus:outline-none",
              quizInputType === "type"
                ? "bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm"
                : "bg-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            )}
          >
            Type Sound
          </button>
        </div>
      </div>
    </div>
  )
} 