import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { JapaneseChar } from "@/types/japanese"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface SoundConnectionCardProps {
  char: JapaneseChar
}

export function SoundConnectionCard({ char }: SoundConnectionCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasInteractedRef = useRef(false)

  const playSound = () => {
    console.log('Attempting to play sound...')
    if (!audioRef.current) {
      console.error('No audio element available')
      return
    }
    
    setIsPlaying(true)
    audioRef.current.currentTime = 0
    
    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Audio started playing')
        })
        .catch(error => {
          console.error('Error playing audio:', error)
          setIsPlaying(false)
        })
    }
  }

  // Handle user interaction
  useEffect(() => {
    const handleInteraction = () => {
      console.log('User interaction detected')
      hasInteractedRef.current = true
      // Remove listeners after first interaction
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('keydown', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('keydown', handleInteraction)
    }
  }, [])

  useEffect(() => {
    if (!char.fileNumber) {
      console.error(`No file number found for romaji: ${char.romaji}`)
      return
    }

    console.log(`Loading audio for ${char.romaji} with file number ${char.fileNumber}`)
    
    // Create audio element
    const audio = new Audio(`/audio_characters/katakana_${char.fileNumber}_${char.romaji}.mp3`)
    
    audio.onended = () => {
      console.log('Audio playback ended')
      setIsPlaying(false)
    }
    
    audio.onerror = (e) => {
      console.error('Audio loading error:', e)
      setIsPlaying(false)
    }
    
    audioRef.current = audio

    // Try to play after a short delay if user has interacted
    const timer = setTimeout(() => {
      if (hasInteractedRef.current) {
        console.log('Attempting auto-play after delay')
        playSound()
      }
    }, 500)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [char]) // Re-run when char changes

  return (
    <Card className="col-span-2 border-2 border-orange-100 dark:border-orange-800 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/50 dark:to-yellow-900/50">
      <CardContent className="text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl font-bold text-red-600 dark:text-red-400">{char.hiragana}</span>
          <span className="text-2xl text-gray-400 dark:text-gray-500">+</span>
          <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">{char.katakana}</span>
          <span className="text-2xl text-gray-400 dark:text-gray-500">=</span>
          <Badge variant="outline" className="text-xl px-4 py-2 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-400">
            /{char.romaji}/
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={playSound}
            disabled={isPlaying}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
          >
            <Volume2 className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-400">Both characters represent the same sound</p>
      </CardContent>
    </Card>
  )
} 