import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SearchInput } from '@/components/shared';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
                        <Avatar className='w-16 h-16'>
                            <AvatarImage src={`${avatar}`} alt={`${name}`} />
                            <AvatarFallback className='font-bold px-1'>
                                <span className='truncate inline-block'>{title}</span>
                            </AvatarFallback>
                        </Avatar>
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