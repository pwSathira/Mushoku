import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <h3 className="text-3xl font-extrabold text-red-600 dark:text-red-400 tracking-widest">無職</h3>
        </div>
        <p className="text-gray-400 mb-4">Learn Hiragana and Katakana Together</p>
        <p className="text-sm text-gray-500">Websites by Sathira Williams</p>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Link href="https://github.com/pwSathira" className="text-sm text-gray-500">github.com/pwSathira |</Link>
          <Link href="https://pwsathira.polywertz.com" className="text-sm text-gray-500">pwsathira.polywertz.com</Link>
        </div>
        <p className="text-sm text-gray-500">Under the MIT License - 2025</p>
      </div>
    </footer>
  )
} 