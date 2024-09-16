import React from 'react'
import { SearchInput } from '@/components/shared';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import ProfileAvatar from '@/components/shared/ProfileAvatar';
import DataPanelInfo from './DataPanelInfo';

export interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    className?: string,
    url: string,
    name: string,
    avatar?: string,
    title?: string,
    followers?: number,
    posts?: number,
}

export default function DataPanel({ url, avatar, name, title, followers, posts, className, ...props }: Props) {
    return (
        <Card className={cn('data-panel w-full', className)} {...props}>
            <CardHeader>
                <div className={cn('flex flex-wrap items-center justify-between gap-4')}>
                    <Link href={`${url}`} target='_blank' className='flex items-center gap-4'>
                        <ProfileAvatar avatar={`${avatar}`} name={`${name}`} title={`${title}`} className='w-16 h-16' />
                        <p className='text-xl font-bold'>{name}</p>
                    </Link>
                    <DataPanelInfo data={{ followers, posts }} />
                </div>
            </CardHeader>
        </Card>
    )
}