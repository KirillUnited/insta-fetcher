import { cn } from '@/lib/utils'
import React from 'react';
import { ThemeSwitcher } from '@/components/shared';
import { SearchInput } from '@/components/shared';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

export default function Header({ className }: Props) {
    return (
        <header className={cn("header", className)}>
            <div className='container'>
                <div className='flex items-center justify-between min-h-20 py-2'>
                    <h2 className='text-2xl font-bold'>@san_vino</h2>
                    <div className='flex items-center gap-4'>
                        <SearchInput variant={'withIcon'} />
                        <ThemeSwitcher theme='light' />
                    </div>
                </div>
            </div>
        </header>
    )
}