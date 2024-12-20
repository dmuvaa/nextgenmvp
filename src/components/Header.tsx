'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTheme } from '../../lib/theme'
import { Moon, Sun, Laptop } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 py-4 px-6 flex justify-between items-center shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        NextGen MVP
      </Link>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <Button asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </li>
        </ul>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('light')}
            className={theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('dark')}
            className={theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme('system')}
            className={theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}
          >
            <Laptop className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </nav>
    </header>
  )
}

