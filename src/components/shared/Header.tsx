import { cn } from '@/lib/utils'
import React from 'react';
import { Logo, ThemeSwitcher } from '@/components/shared';
import { INFO } from '@/constants';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

export default function Header({ className }: Props) {
    return (
        <header className={cn("header bg-card shadow-sm", className)}>
            <div className='container'>
                <div className='flex items-center justify-between min-h-20 py-2'>
                    <Logo alt={`Insta Fetcher`} />
                    <div className='flex items-center gap-4'>
                        <ThemeSwitcher theme='light' />
                    </div>
                </div>
            </div>
        </header>
    )
}