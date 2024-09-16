'use client'
import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    theme: 'dark' | 'light'
}

export default function ThemeSwitcher({ className }: Props) {
    const { theme, setTheme } = useTheme();
    const handleClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button className={cn("theme-switcher", className)} variant="outline" size="icon" onClick={handleClick}>
            <MoonIcon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <SunIcon className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        </Button>
    )
}