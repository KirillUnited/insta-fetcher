import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SearchInput } from '@/components/shared';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';

interface Props { }

export default function DataPanel({ }: Props) {
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between'>
                <Link href={'https://www.instagram.com/san_vino/'} target='_blank' className='flex items-center gap-4'>
                    <Avatar>
                        <AvatarImage src="/images/account-avatar.jpg" alt='@san_vino' />
                        <AvatarFallback>@san_vino</AvatarFallback>
                    </Avatar>
                    <p className='text-xl font-bold'>@san_vino</p>
                </Link>
                <div className='flex items-center gap-4'>
                    <SearchInput variant={'withIcon'} />
                </div>
            </CardHeader>
        </Card>
    )
}