import { cn } from '@/lib/utils';
import { MessageSquareTextIcon, User2Icon } from 'lucide-react';
import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    data: {
        followers?: number,
        posts?: number
    }
}

const Item = ({ title, count, className }: { title: string, count: number } & React.HtmlHTMLAttributes<HTMLElement>) => (
    <div className={cn(
        'flex items-center gap-4 md:max-w-[50%] md:border-r last:border-none border-primary/30 md:pr-4 last:pr-0 overflow-hidden',
        className
    )}>
        <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/30'>
            {title === 'Followers' ? <User2Icon className='text-primary w-5 h-5 md:w-10 md:h-10' /> : <MessageSquareTextIcon className='text-primary w-5 h-5 md:w-10 md:h-10' />}
        </div>
        <div className='flex flex-col gap-1 overflow-hidden'>
            <p className='text-primary text-sm'>{title}</p>
            <p className='md:text-3xl font-bold truncate'>{count}</p>
        </div>
    </div>
)

export default function DataPanelInfo({ data, className }: Props) {
    const { followers, posts } = data;

    return (
        <div className={cn('flex items-center flex-wrap md:flex-nowrap gap-4 overflow-hidden', className)}>
            {
                followers &&
                <Item title='Followers' count={followers} />
            }
            {
                posts &&
                <Item title='Posts' count={posts} />
            }
        </div>
    )
}
