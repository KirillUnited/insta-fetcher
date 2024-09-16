import { cn } from '@/lib/utils';
import { PodcastIcon, User2Icon } from 'lucide-react';
import React from 'react'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    data: {
        followers?: number,
        posts?: number
    }
}

const Item = ({ title, count, className }: { title: string, count: number } & React.HtmlHTMLAttributes<HTMLElement>) => (
    <div className={cn(
        'flex items-center gap-4 border-r last:border-none border-primary/30 pr-4 last:pr-0',
        className
    )}>
        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-primary/30'>
            {title === 'Followers' ? <User2Icon size={40} className='text-primary' /> : <PodcastIcon size={40} className='text-primary' />}
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-primary text-sm'>{title}</p>
            <p className='text-3xl font-bold'>{count}</p>
        </div>
    </div>
)

export default function DataPanelInfo({ data, className }: Props) {
    const { followers, posts } = data;

    return (
        <div className={cn('flex items-center gap-4', className)}>
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
