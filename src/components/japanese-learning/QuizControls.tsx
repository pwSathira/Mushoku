import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Shuffle } from "lucide-react"
import Link from "next/link"

interface QuizControlsProps {
  onResetProgress: () => void
  onShuffleQuiz: () => void
}

export function QuizControls({ onResetProgress, onShuffleQuiz }: QuizControlsProps) {
  return (
    <Card className="border-red-100 dark:border-red-800">
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="font-semibold text-purple-400 text-sm mb-1">Quiz Controls</div> 
          <Button 
            variant="outline" 
            onClick={onResetProgress} 
            className="w-full border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/"
          >
            <Shuffle className="w-4 h-4 mr-2 mb-2" />
            Reset Quiz
          </Button>
          <Button 
            variant="outline" 
            onClick={onShuffleQuiz}
            className="w-full border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Shuffle
          </Button>
          <Link href="/learn">
            <Button 
              variant="outline" 
              className="w-full border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/50 mt-2"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Back to Learning
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 