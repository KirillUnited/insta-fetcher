import React from 'react'
import LogoIcon from '@/assets/icons/svg/logo.svg'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLElement> {
    asChild?: boolean,
    href?: string,
    alt?: string
}

export default function Logo({ href = '/', asChild, className, alt = 'logo', ...props }: Props) {
    const Comp = asChild ? React.Fragment : 'a';

    return (
        <Comp className={cn("logo inline-flex", className)} href={href} {...props}>
            <Image src={LogoIcon} width={140} height={60} alt={alt} />
        </Comp>
    )
}