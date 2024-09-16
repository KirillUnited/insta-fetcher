import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    avatar?: string,
    name?: string,
}
export default function ProfileAvatar({ avatar, name, className, ...props }: Props) {
    return (
        <Avatar className={cn('shadow-sm border', className)} {...props}>
            <AvatarImage src={`${avatar}`} alt={`${name}`} />
            <AvatarFallback className='font-bold px-1'>
                <span className='truncate inline-block'>{name}</span>
            </AvatarFallback>
        </Avatar>
    )
}
