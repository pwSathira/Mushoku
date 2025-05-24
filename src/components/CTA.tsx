import { Button } from "./ui/button"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 bg-gradient-to-r from-red-600 to-black dark:from-red-700 dark:to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Master Japanese Writing?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl mb-8 opacity-90"
        >
          Be the first to join our exclusive club of zero users!
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/learn">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white dark:bg-gray-800 text-red-700 dark:text-red-400 font-bold border border-red-200 dark:border-red-800">
              <BookOpen className="w-5 h-5 mr-2" />
              Begin Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
} 