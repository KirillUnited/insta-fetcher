import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type Props = {}

export default function Hero({ }: Props) {
    return (
        <section>
            <div className="container">
                <Card>
                    <div className={cn('flex flex-col items-center justify-center gap-6 py-6')}>
                        <h1 className='text-4xl font-bold'>Instagram Followers</h1>
                    </div>
                    <div className="flex items-center justify-center gap-6 py-6">
    
                        <div className="relative flex place-items-center">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                src="/next.svg"
                                alt="Next.js Logo"
                                width={180}
                                height={37}
                                priority
                            />
                        </div>
    
                        <Button title="Title" size={"lg"}>Title</Button>
                    </div>
                </Card>
            </div>
        </section>
    )
}