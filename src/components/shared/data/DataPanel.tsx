import React from 'react'
import { SearchInput } from '@/components/shared';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import ProfileAvatar from '@/components/shared/ProfileAvatar';

export interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    className?: string,
    url: string,
    name: string,
    avatar?: string,
    title?: string
}

export default function DataPanel({ url, avatar, name, title, className, ...props }: Props) {
    return (
        <Card className={cn('w-full', className)} {...props}>
            <CardHeader>
                <div className={cn('flex flex-wrap items-center justify-between gap-4')}>
                    <Link href={`${url}`} target='_blank' className='flex items-center gap-4'>
                        <ProfileAvatar avatar={`${avatar}`} name={`${name}`} title={`${title}`} className='w-16 h-16' />
                        <p className='text-xl font-bold'>{name}</p>
                    </Link>
                    <div className='flex items-center gap-4'>
                        <SearchInput variant={'withIcon'} placeholder={'Search user...'} />
                    </div>
                </div>
                <p className='text-primary text-sm'>Active Members</p>
            </CardHeader>
        </Card>
    )
}