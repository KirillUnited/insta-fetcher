import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    theme: 'dark' | 'light'
}

export default function ThemeSwitcher({ theme, className }: Props) {
    return (
        <div className={cn("theme-switcher", className)}>
            <Button variant="default" size="icon">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </div>
    )
}