import { cn } from '@/lib/utils'
import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

export default function Sidebar({ className }: Props) {
    return (
        <aside className={cn("sidebar", className)}>Sidebar</aside>
    )
}