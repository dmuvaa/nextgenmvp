// 'use client'

// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { useTheme } from '../../lib/theme'
// import { Moon, Sun, Laptop } from 'lucide-react'

// export default function Header() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <header className="bg-white dark:bg-gray-800 py-4 px-6 flex justify-between items-center shadow-sm">
//       <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//         NextGen MVP
//       </Link>
//       <nav className="flex items-center space-x-6">
//         <ul className="flex space-x-6">
//           <li>
//             <Link
//               href="/about"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/contact"
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Button asChild>
//               <Link href="#get-started">Get Started</Link>
//             </Button>
//           </li>
//         </ul>
//         <div className="flex space-x-2">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme('light')}
//             className={theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}
//           >
//             <Sun className="h-[1.2rem] w-[1.2rem]" />
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme('dark')}
//             className={theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}
//           >
//             <Moon className="h-[1.2rem] w-[1.2rem]" />
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme('system')}
//             className={theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}
//           >
//             <Laptop className="h-[1.2rem] w-[1.2rem]" />
//           </Button>
//         </div>
//       </nav>
//     </header>
//   )
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 py-4 px-6 flex justify-between items-center shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        NextGen MVP
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
      <div className="md:hidden flex items-center">
        <ThemeSwitcher />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="#get-started">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

