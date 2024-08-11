import { cn } from '@/lib/utils'
import React from 'react';
import { ThemeSwitcher } from '@/components/shared';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

export default function Header({ className }: Props) {
    return (
        <header className={cn("header", className)}>
            <div className='container'>
                <div className='flex items-center justify-between min-h-20 py-2'>
                    <h2>Insta Fetcher</h2>
                    <ThemeSwitcher theme='light' />
                </div>
            </div>
        </header>
    )
}