import { cn } from '@/lib/utils'
import React from 'react';
import { ThemeSwitcher } from '@/components/shared';
import { SearchInput } from '@/components/shared';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

export default function Header({ className }: Props) {
    return (
        <header className={cn("header bg-card shadow-sm", className)}>
            <div className='container'>
                <div className='flex items-center justify-between min-h-20 py-2'>
                    <div className='flex items-center gap-4'>
                        <Avatar>
                            <AvatarImage src="/images/account-avatar.jpg" alt='@san_vino' />
                            <AvatarFallback>@san_vino</AvatarFallback>
                        </Avatar>
                        <p className='text-xl font-bold'>@san_vino</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <SearchInput variant={'withIcon'} />
                        <ThemeSwitcher theme='light' />
                    </div>
                </div>
            </div>
        </header>
    )
}