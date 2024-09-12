import React from 'react'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Button } from '@/components/ui/button'

const searchInputVariants = cva('search relative', {
    variants: {
        variant: {
            withIcon: '',
            withButton: 'flex items-center gap-2',
            withLabel: '',
        },
    },
    defaultVariants: {
        variant: 'withIcon',
    },
})

interface Props extends React.HtmlHTMLAttributes<HTMLElement>,
    VariantProps<typeof searchInputVariants> {
    placeholder?: string
}

export default function SearchInput({ className, variant, ...props }: Props) {
    return (
        <div className={cn("search relative",
            searchInputVariants({ variant }),
            className
        )}>
            {
                variant === 'withIcon' &&
                <SearchIcon size={18} className={cn('search-icon absolute top-1/2 left-2 -translate-y-1/2')} />
            }
            <Input id='search_user' name='search_user' placeholder={props.placeholder} autoComplete="off" type="search" className={cn("search-input w-full",
                {
                    'pl-8': variant === 'withIcon',
                })}
                {...props}
            />
            {
                variant === 'withButton' &&
                <Button type='submit' className="search-button flex-shrink-0" size={'icon'}>
                    <SearchIcon size={24} className={cn('search-icon')} />
                </Button>
            }
        </div>
    )
}