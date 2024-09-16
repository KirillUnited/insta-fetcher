import React from 'react'
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva('container', {
  variants: {
    variant: {
      lg: 'max-w-screen-lg',
      fluid: 'max-w-full',
    },
  },
  defaultVariants: {
    variant: 'lg',
  },
})

interface Props extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof variants> {
  children: React.ReactNode
}

export default function Section({ className, variant, children, ...props }: Props) {
  return (
    <section className={cn('section', className)} {...props}>
      <div className={cn(variants({ variant }))}>
        {children}
      </div>
    </section>
  )
}
export function withDataSection(Component: React.ComponentType<any>) {
  return (props: any) => <Section><Component {...props} /></Section>
}