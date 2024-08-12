import { cn } from '@/lib/utils'
import React from 'react'
import { Logo } from '@/components/shared'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

export default function Sidebar({ className }: Props) {
    return (
        <aside className={cn("sidebar", className)}>
            <Logo />
        </aside>
    )
}