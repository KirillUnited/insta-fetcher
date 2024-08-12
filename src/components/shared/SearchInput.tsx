import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props extends React.HtmlHTMLAttributes<HTMLElement> { }

export default function SearchInput({ className }: Props) {
    return (
        <div className={cn("search relative", className)}>
            <SearchIcon size={18} className='search-icon absolute top-1/2 left-2 -translate-y-1/2' />
            <Input placeholder="Search" type="search" className="search-input w-full pl-8" />
        </div>
    )
}