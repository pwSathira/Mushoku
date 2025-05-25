import { Progress } from "@/components/ui/progress"

interface ProgressSectionProps {
  currentIndex: number
  totalCharacters: number
  mode: "learn" | "quiz"
  score?: number
  quizAnswers?: boolean[]
}

export function ProgressSection({ 
  currentIndex, 
  totalCharacters, 
  mode,
  score,
  quizAnswers 
}: ProgressSectionProps) {
  const progress = ((currentIndex + 1) / totalCharacters) * 100

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {mode === "learn" ? "Learning Mode" : "Sound Recognition Quiz"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {mode === "learn" 
              ? "Study character pairs and their pronunciations"
              : "Test your knowledge with interactive quizzes"
            }
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Character {currentIndex + 1} of {totalCharacters}
          </div>
          {mode === "quiz" && score !== undefined && quizAnswers && (
            <div className="text-lg font-semibold text-black dark:text-white">
              Score: {score}/{quizAnswers.length}
            </div>
          )}
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
} 