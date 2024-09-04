import React from 'react'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

interface Props { }

export default function HeroSection({ }: Props) {
    return (
        <section>
            <div className="container">
                <div className='py-6'>
                    <div className={cn('flex-center flex-col gap-4 py-6')}>
                        <h1 className='text-4xl font-bold'>Bro Insta Fetcher</h1>
                        <p className='text-xl'>Get followers of any Instagram account</p>
                    </div>
                    <div className="flex-center flex-wrap gap-4 py-6">
                        <Input id='search_account' name='search_account' placeholder="@account_name" type="search" className={cn("search-input w-auto bg-card")}
                        />
                        <Button type='submit'>Get</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}